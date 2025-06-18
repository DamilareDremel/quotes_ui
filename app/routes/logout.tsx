import { redirect, ActionFunction } from "@remix-run/node";
import { storage, setFlash } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await storage.getSession(request.headers.get("Cookie"));
  await storage.destroySession(session);

  const newSession = await storage.getSession();
  setFlash(newSession, "Logged out successfully!");

  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.commitSession(newSession),
    },
  });
};

export default function Logout() {
  return null;
}
