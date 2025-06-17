import { Link } from "@remix-run/react";

export default function Nav() {
  return (
    <nav className="flex space-x-4 p-4 bg-gray-200">
      <Link to="/quotes" className="text-blue-600 font-semibold">All Quotes</Link>
      <Link to="/create-quote" className="text-blue-600 font-semibold">Add Quote</Link>
      <Link to="/random" className="text-blue-600 font-semibold">Random Quote</Link>
    </nav>
  );
}
