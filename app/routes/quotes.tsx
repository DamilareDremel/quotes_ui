import { useLoaderData, Link, Form } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { getToken } from "~/utils/session.server";  // 👈 import here
import type { LoaderFunctionArgs } from "@remix-run/node";
import { decodeJWT } from "~/utils/jwt";
import type { Quote } from "~/types/quote";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const token = await getToken(request);  // 👈 cleaner

  if (!token) {
    return redirect("/login");
  }

  const res = await fetch("http://localhost:4000/quotes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return json({ quotes: [], userEmail: null, token });
  }

  const quotes = await res.json();

const decodedPayload = JSON.parse(
  Buffer.from(token.split(".")[1], "base64").toString()
);
const userEmail = decodedPayload.email;
const userId = decodedPayload.userId;

return json({ quotes, token, userEmail, userId });
}


// Types
type LoaderData = {
  quotes: Quote[];
  token: string;
  userEmail: string;
  userId: string;
};




// COMPONENT
export default function Quotes() {
   const { quotes, token, userEmail, userId } = useLoaderData<LoaderData>();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Quotes</h1>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Welcome, {userEmail}</p>
        <Link
          to="/create-quote"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add New Quote
        </Link>
      </div>

      {quotes.length === 0 && (
        <p className="text-gray-500">No quotes available.</p>
      )}

      {quotes.map((quote) => (
  <div key={quote.id} className="border p-4 mb-2 rounded">
    <p>{quote.text}</p>
    <small>by {quote.author ?? "Anonymous"}</small>

{quote.tags && quote.tags.length > 0 && (
  <div className="mt-2">
    <p className="text-sm text-gray-500">
      Tags: {quote.tags.join(", ")}
    </p>
  </div>
)}

    {quote.userId === userId && (
      <div className="flex space-x-3 mt-3">
        {/* EDIT */}
        <Link
          to={`/edit-quote/${quote.id}`}
          className="text-blue-600 hover:underline"
        >
          Edit
        </Link>

        {/* DELETE */}
        <Form method="post" action="/delete-quote">
          <input type="hidden" name="id" value={quote.id} />
          <button type="submit" className="text-red-600 hover:underline">
            Delete
          </button>
        </Form>
      </div>
    )}
  </div>
))}
    </div>
  );
}
