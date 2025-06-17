import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4 mb-6 rounded">
      <div className="text-lg font-bold">Quotes App</div>

      <Link
        to="/logout"
        className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded"
      >
        Logout
      </Link>
    </nav>
  );
}
