import { TRPCError } from "@trpc/server";
import { z } from "zod";
import getPayloadClient from "../get-payload";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";

const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });
      if (users.length !== 0) {
        throw new TRPCError({
          code: "CONFLICT",
        });
      }
      await payload.create({
        collection: "users",
        data: {
          email,
          password,
          role: "user",
        },
      });
      return { success: true, sendTo: email };
    }),
  verifyEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ input }) => {
      const { token } = input;

      const payload = await getPayloadClient();
      const isVerify = await payload.verifyEmail({
        collection: "users",
        token,
      });
      if (!isVerify) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
        });
      }
      return { success: true, message: "Email verified successfully" };
    }),

  signIn: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;
      const { res } = ctx;
      const payload = await getPayloadClient();
      try {
        await payload.login({
          collection: "users",
          data: {
            email,
            password,
          },
          res,
        });
        return { succes: true, message: "Logged in successfully" };
      } catch (error) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
        });
      }
    }),
});

export default authRouter;
