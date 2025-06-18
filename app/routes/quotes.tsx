import { useLoaderData, Link, Form } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { getToken, getFlashSession, commitFlashSession } from "~/utils/session.server";
import type { LoaderFunctionArgs } from "@remix-run/node";
import type { Quote } from "~/types/quote";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = await getToken(request);
  if (!token) return redirect("/login");

  const res = await fetch("https://quotes-auth.onrender.com/quotes", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const quotes = res.ok ? await res.json() : [];

  const decodedPayload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  const userEmail = decodedPayload.email;
  const userId = decodedPayload.userId;

  const { session, message } = await getFlashSession(request);

  return json(
    { quotes, token, userEmail, userId, message },
    { headers: { "Set-Cookie": await commitFlashSession(session) } }
  );
};

type LoaderData = {
  quotes: Quote[];
  token: string;
  userEmail: string;
  userId: string;
  message?: string;
};

export default function Quotes() {
  const { quotes, userEmail, userId, message } = useLoaderData<LoaderData>();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Quotes</h1>

      {message && (
  <div
    className={`mb-4 p-3 rounded ${
      (() => {
        const msg = message.trim().toLowerCase();
        return msg.includes("deleted") || msg.includes("logged out")
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700";
      })()
    }`}
  >
    {message}
  </div>
)}



      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Welcome, {userEmail}</p>
        <Link to="/create-quote" className="bg-green-600 text-white px-4 py-2 rounded">Add New Quote</Link>
      </div>

      {quotes.length === 0 && <p className="text-gray-500">No quotes available.</p>}

      {quotes.map((quote) => (
        <div key={quote.id} className="border p-4 mb-2 rounded">
          <p>{quote.text}</p>
          <small>by {quote.author ?? "Anonymous"}</small>
          {quote.tags?.length > 0 && (
            <p className="text-sm text-gray-500 mt-2">Tags: {quote.tags.join(", ")}</p>
          )}

          {quote.userId === userId && (
            <div className="flex space-x-3 mt-3">
              <Link to={`/edit-quote/${quote.id}`} className="text-blue-600 hover:underline">Edit</Link>
              <Form method="post" action="/delete-quote">
                <input type="hidden" name="id" value={quote.id} />
                <button type="submit" className="text-red-600 hover:underline">Delete</button>
              </Form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
