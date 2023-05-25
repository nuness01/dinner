import { s3 } from "@lib/s3";
import { z } from "zod";
import { adminProcedure, publicProcedure, router } from "../trpc";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";
import { getJwtSecretKey } from "../../../lib/auth";
import cookie from "cookie";
import { TRPCError } from "@trpc/server";
import { MAX_FILE_SIZE } from "src/constants/config";

export const adminRouter = router({
  login: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { res } = ctx;
      const { email, password } = input;

      if (
        email == process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      ) {
        const token = await new SignJWT({})
          .setProtectedHeader({ alg: "HS256" })
          .setJti(nanoid())
          .setIssuedAt()
          .setExpirationTime("1h")
          .sign(new TextEncoder().encode(getJwtSecretKey()));

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("user-token", token, {
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
          })
        );
        return { success: true };
      }

      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Invalid email or password",
      });
    }),
  createPresignedUrl: adminProcedure
    .input(z.object({ fileType: z.string() }))
    .mutation(async ({ input }) => {
      const id = nanoid();
      const ex = input.fileType.split("/")[1];
      const key = `${id}.${ex}`;

      const { url, fields } = (await new Promise((resolve, reject) => {
        s3.createPresignedPost(
          {
            Bucket: "dinner-implementation",
            Fields: { key },
            Expires: 60,
            Conditions: [
              ["content-length-range", 0, MAX_FILE_SIZE],
              ["starts-with", "$Content-Type", "image/"],
            ],
          },
          (err, signed) => {
            if (err) return reject(err);
            resolve(signed);
          }
        );
      })) as any as { url: string; fields: unknown };

      return { url, fields, key };
    }),
  addMenuItem: adminProcedure
    .input(
      z.object({
        imageKey: z.string(),
        name: z.string(),
        price: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { imageKey, name, price } = input;
      const menuItem = await ctx.prisma.menuItem.create({
        data: {
          imageKey,
          name,
          price,
        },
      });

      return menuItem;
    }),
  deleteMenuItem: adminProcedure
    .input(z.object({ imageKey: z.string(), id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { imageKey, id } = input;
      await s3
        .deleteObject({ Bucket: "dinner-implementation", Key: imageKey })
        .promise();

      await ctx.prisma.menuItem.delete({ where: { id } });

      return true;
    }),
});
