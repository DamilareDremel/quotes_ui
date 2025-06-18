import { Form, useActionData, useLoaderData, useSearchParams } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { storage, getFlashSession, commitFlashSession } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { session, message } = await getFlashSession(request);

  return json(
    { message },
    {
      headers: {
        "Set-Cookie": await commitFlashSession(session),
      },
    }
  );
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return json({ error: "Invalid email or password. Please try again." }, { status: 400 });
  }

  const data = await res.json();
  const session = await storage.getSession();
  session.set("token", data.token);
  session.flash("flash", "Login successful!");

  return redirect("/quotes", {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
};

export default function Login() {
  const actionData = useActionData<typeof action>();
  const loaderData = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const urlMessage = searchParams.get("message");

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Login</h1>

      {loaderData.message && (
        <div
          className={`mb-4 p-3 rounded ${
            loaderData.message.toLowerCase().includes("logged out")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {loaderData.message}
        </div>
      )}

      {actionData?.error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {actionData.error}
        </div>
      )}

      {urlMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {urlMessage}
        </div>
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
          <label className="block mb-1 text-gray-800 dark:text-gray-200">Password</label>
          <input
            name="password"
            type="password"
            required
            className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        <div className="mt-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600">Register</a>
          </p>
          <p>
            <a href="/forgot-password" className="text-blue-600">Forgot password?</a>
          </p>
        </div>
      </Form>
    </div>
  );
}
