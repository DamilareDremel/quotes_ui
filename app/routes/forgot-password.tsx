import { Form, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { useEffect } from "react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const newPassword = formData.get("newPassword");

  const res = await fetch(`${process.env.BACKEND_URL}/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, newPassword }),
  });

  const data = await res.json();

  if (!res.ok) {
    return json({ error: data.message });
  }

  return redirect("/login?message=Password successfully updated");
};

type ActionData = { error?: string; success?: string };

export default function ResetPassword() {
  const actionData = useActionData<ActionData>();

  useEffect(() => {
    if (typeof window !== "undefined" && actionData?.success) {
      const timer = setTimeout(() => {
        window.location.href = "/login";
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [actionData]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Reset Password</h1>

      {actionData?.error && (
        <p className="text-red-600 mb-4">{actionData.error}</p>
      )}

      {actionData?.success && (
        <p className="text-green-600 mb-4">
          {actionData.success} Redirecting to login...
        </p>
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
          <label className="block mb-1 text-gray-800 dark:text-gray-200">New Password</label>
          <input
            name="newPassword"
            type="password"
            required
            className="w-full border p-2 rounded bg-white dark:bg-gray-800 dark:text-gray-200"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Update Password
        </button>
      </Form>
    </div>
  );
}
