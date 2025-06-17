import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { getToken } from "~/utils/session.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const token = await getToken(request);

  if (!token) {
    return redirect("/login");
  }

  const res = await fetch(`http://localhost:4000/quotes/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Response("Quote not found", { status: 404 });
  }

  const quote = await res.json();
  return json({ quote, token });
};

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const text = formData.get("text");
  const tags = formData.get("tags");

  const token = await getToken(request);

  const res = await fetch(`http://localhost:4000/quotes/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      text,
      tags: tags?.toString().split(",").map(tag => tag.trim()),
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update quote");
  }

  return redirect("/quotes");
};

export default function EditQuote() {
  const { quote } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Quote</h1>
      <Form method="post">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Quote Text</label>
          <textarea
            name="text"
            defaultValue={quote.text}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            defaultValue={quote.tags?.join(", ")}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Quote
        </button>
      </Form>
    </div>
  );
}
