import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { Quote } from "~/types/quote";


export const loader: LoaderFunction = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/quotes/random`);
    if (!res.ok) {
      throw new Error("Failed to fetch random quote");
    }
    const data = await res.json();
    return json<Quote>(data);
  } catch (err: any) {
    return json({
      id: "",
      text: "No quote available.",
      author: "",
      tags: [],
      userId: ""
    });
  }
};


export default function RandomQuote() {
  const quote = useLoaderData<Quote>();

  return (
    <div className="max-w-2xl mx-auto text-center p-8">
      <h1 className="text-3xl font-bold mb-6">Random Quote</h1>
      <p className="italic text-lg mb-4">"{quote.text}"</p>
      {quote.author && (
        <p className="text-right">— {quote.author}</p>
      )}

      {quote.tags && quote.tags.length > 0 && (
        <p className="text-sm text-gray-500 mt-2">
          Tags: {quote.tags.join(", ")}
        </p>
      )}

      <div className="mt-6">
        <Link to="/random" reloadDocument>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Get Another Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
