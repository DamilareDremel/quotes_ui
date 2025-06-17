import { Form, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  const res = await fetch("http://localhost:4000/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, username }),
  });

  const data = await res.json();

  if (!res.ok) {
    return json({ error: data.message });
  }

  return redirect("/login");
};

type ActionData = { error?: string };

export default function Register() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      {actionData?.error && (
        <p className="text-red-600 mb-4">{actionData.error}</p>
      )}
      <Form method="post" className="space-y-4">
        <div>
  <label>Email</label>
  <input name="email" type="email" required className="w-full border p-2 rounded" />
</div>
<div>
  <label>Username</label>
  <input name="username" type="text" required placeholder="Username" className="w-full border p-2 rounded" />
</div>
<div>
  <label>Password</label>
  <input name="password" type="password" required className="w-full border p-2 rounded" />
</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </Form>
    </div>
  );
}
