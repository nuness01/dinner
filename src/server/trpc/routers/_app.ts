import { router } from "../trpc";
import { adminRouter } from "./admin";
import { waiterRouter } from './waiter'
import { menuRouter } from "./menu";
import { openingRouter } from './opening'
import { checkoutRouter } from './checkout'

export const appRouter = router({
  admin: adminRouter,
  waiter: waiterRouter,
  menu: menuRouter,
  opening: openingRouter,
  checkout: checkoutRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
