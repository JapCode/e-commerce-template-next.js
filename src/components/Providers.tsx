"use client";

import trpc from "@/trpc/client";
import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Providers = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => trpc.createClient({ url: "/api/trpc" }));
};

export default Providers;
