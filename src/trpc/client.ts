import { createTRPCReact } from "@trpc/react-query";
import type { TAppRouter } from "./index";

const trpc = createTRPCReact<TAppRouter>({});

export default trpc;
