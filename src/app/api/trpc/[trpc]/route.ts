import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // @ts-expect-error context already passed from express middleware
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
