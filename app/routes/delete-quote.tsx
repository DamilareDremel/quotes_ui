import { json, redirect, LoaderFunctionArgs } from "@remix-run/node";
import { storage, setFlash } from "~/utils/session.server";

export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const id = formData.get("id");

  const session = await storage.getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  if (!token) {
    return redirect("/login");
  }

  const res = await fetch(`https://quotes-auth.onrender.com/quotes/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    return json({ error: "Not authorized or quote not found" }, { status: 403 });
  }

  // ✅ no need to fetch session again, just use the one you already have
  setFlash(session, "Quote deleted successfully!");
  return redirect("/quotes", {
    headers: { "Set-Cookie": await storage.commitSession(session) },
  });
};
