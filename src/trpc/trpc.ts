import type { TExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<TExpressContext>().create();
export const { router } = t;
export const publicProcedure = t.procedure;
