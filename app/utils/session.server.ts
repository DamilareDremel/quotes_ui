import { createCookieSessionStorage } from "@remix-run/node";

export const storage = createCookieSessionStorage({
  cookie: {
    name: "my_session",
    secrets: ["super_secret"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
});

export const getSession = (cookieHeader: string | null) => {
  return storage.getSession(cookieHeader);
};

export async function getToken(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return session.get("token");
}

// Flash utilities
export async function getFlashSession(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const message = session.get("flash");
  return { session, message };
}

export async function commitFlashSession(session: any) {
  return storage.commitSession(session);
}

export function setFlash(session: any, message: string) {
  session.flash("flash", message);
}
