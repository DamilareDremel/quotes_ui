import { Form, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { storage, setFlash } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, username }),
  });

  const data = await res.json();

  if (!res.ok) {
    return json({ error: data.message });
  }

  const session = await storage.getSession();
  setFlash(session, "Account created successfully. Please log in.");

  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
};

type ActionData = { error?: string };

export default function Register() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Register</h1>

      {actionData?.error && (
        <p className="text-red-600 mb-4">{actionData.error}</p>
      )}

      <Form method="post" className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200">Username</label>
          <input
            name="username"
            type="text"
            required
            className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-800 dark:text-gray-200">Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Register</button>
      </Form>

      <p className="mt-4 text-center text-gray-800 dark:text-gray-200">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">Login here</a>
      </p>
    </div>
  );
}

