import { json, redirect, LoaderFunctionArgs } from "@remix-run/node";
import { storage } from "~/utils/session.server";

export const action = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData();
  const id = formData.get("id");

  const session = await storage.getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  if (!token) {
    return redirect("/login");
  }

  const res = await fetch(`http://localhost:4000/quotes/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    return json({ error: "Not authorized or quote not found" }, { status: 403 });
  }

  return redirect("/quotes");
};
