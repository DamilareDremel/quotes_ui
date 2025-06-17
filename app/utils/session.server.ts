// app/utils/session.server.ts

import { createCookieSessionStorage } from "@remix-run/node";

export const storage = createCookieSessionStorage({
  cookie: {
    name: "my_session",
    secrets: ["super_secret"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

export async function getToken(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return session.get("token");
}
