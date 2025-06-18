import { Link, Form } from "@remix-run/react";

export default function NavBar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4 mb-6 rounded">
      <Link to="/" className="text-xl font-bold hover:text-blue-600">
  Quotes App
</Link>

      {isLoggedIn ? (
        <Form method="post" action="/logout">
          <button type="submit" className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        </Form>
      ) : (
        <Link to="/login" className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded">
          Login
        </Link>
      )}
    </nav>
  );
}
