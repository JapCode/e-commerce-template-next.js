import { User } from "@/payload-types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest } from "next/server";

const getServerSideUser = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies,
) => {
  const token = cookies.get("payload-token");
  const meRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    },
  );

  const { user } = (await meRes.json()) as { user: User | null };
  return { user };
};
export default getServerSideUser;
