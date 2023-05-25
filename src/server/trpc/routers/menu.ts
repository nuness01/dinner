import { publicProcedure, router } from "../trpc";
import { s3 } from "@lib/s3";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const menuRouter = router({
  getMenuItems: publicProcedure.query(async ({ ctx }) => {
    const menuItems = await ctx.prisma.menuItem.findMany();

    const withUrls = await Promise.all(
      menuItems.map(async (menuItem) => {
        return {
          ...menuItem,
          url: await s3.getSignedUrlPromise("getObject", {
            Bucket: "dinner-implementation",
            Key: menuItem.imageKey,
          }),
        };
      })
    );

    return withUrls;
  }),

  checkMenuStatus: publicProcedure.mutation(async () => {
    await sleep(1000);

    return { success: true };
  }),
});
