import { Form, useActionData } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { storage } from "~/utils/session.server";

// Action runs on form POST
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return json(
      { error: "Invalid email or password. Please try again." },
      { status: 400 }
    );
  }

  const data = await res.json();

  const session = await storage.getSession();
  session.set("token", data.token);

  // Set the cookie in response header
  return redirect("/quotes", {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
};

// Page component for login form
export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {/* Error message */}
      {actionData?.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {actionData.error}
        </div>
      )}

      <Form method="post" className="space-y-4">
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </Form>
    </div>
  );
}
