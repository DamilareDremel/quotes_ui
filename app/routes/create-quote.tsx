import { Form, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { storage, setFlash } from "~/utils/session.server";

type ActionData = { error?: string };

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const content = formData.get("content");
  const author = formData.get("author");
  const tag = formData.get("tag");

  if (!content || !author || !tag) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  const session = await storage.getSession(request.headers.get("Cookie"));
  const token = session.get("token");

  if (!token) {
    return redirect("/login");
  }

  const res = await fetch(`${process.env.BACKEND_URL}/quotes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      text: content,
      author,
      tags: [tag],
    }),
  });

  if (res.ok) {
    setFlash(session, "Quote added successfully!");
    return redirect("/quotes", {
      headers: {
        "Set-Cookie": await storage.commitSession(session),
      },
    });
  }

  const data = await res.json().catch(() => null);
  const errorMsg = data?.message || "Failed to add quote";
  return json({ error: errorMsg }, { status: 400 });
};

export default function CreateQuote() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Add New Quote</h1>

      {actionData?.error && (
        <p className="text-red-600 mb-4">{actionData.error}</p>
      )}

      <Form method="post" className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200">Content</label>
          <input name="content" type="text" required className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200" />
        </div>
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200">Author</label>
          <input name="author" type="text" required className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200" />
        </div>
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200">Tag</label>
          <input name="tag" type="text" required className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </Form>
    </div>
  );
}

