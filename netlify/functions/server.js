import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
  getLoadContext(event, context) {
    // You can pass any context here if needed
  },
});

var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";

// app/utils/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
var storage = createCookieSessionStorage({
  cookie: {
    name: "my_session",
    secrets: ["super_secret"],
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secure: !0
  }
});
async function getToken(request) {
  return (await storage.getSession(request.headers.get("Cookie"))).get("token");
}
async function getFlashSession(request) {
  let session = await storage.getSession(request.headers.get("Cookie")), message = session.get("flash");
  return { session, message };
}
async function commitFlashSession(session) {
  return storage.commitSession(session);
}
function setFlash(session, message) {
  session.flash("flash", message);
}

// app/components/NavBar.tsx
import { Link, Form } from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function NavBar({ isLoggedIn }) {
  return /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between bg-gray-800 text-white p-4 mb-6 rounded", children: [
    /* @__PURE__ */ jsx2(Link, { to: "/", className: "text-xl font-bold hover:text-blue-600", children: "Quotes App" }),
    isLoggedIn ? /* @__PURE__ */ jsx2(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ jsx2("button", { type: "submit", className: "bg-red-600 hover:bg-red-500 px-3 py-1 rounded", children: "Logout" }) }) : /* @__PURE__ */ jsx2(Link, { to: "/login", className: "bg-green-600 hover:bg-green-500 px-3 py-1 rounded", children: "Login" })
  ] });
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VEOZILZX.css";

// app/components/Nav.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Nav({ isLoggedIn }) {
  return /* @__PURE__ */ jsxs2("nav", { className: "flex space-x-4 p-4 bg-gray-200", children: [
    /* @__PURE__ */ jsx3(Link2, { to: "/quotes", className: "text-blue-600 font-semibold", children: "All Quotes" }),
    isLoggedIn && /* @__PURE__ */ jsx3(Link2, { to: "/create-quote", className: "text-blue-600 font-semibold", children: "Add Quote" }),
    /* @__PURE__ */ jsx3(Link2, { to: "/random", className: "text-blue-600 font-semibold", children: "Random Quote" })
  ] });
}

// app/root.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
  // ... your other links
], loader = async ({ request }) => {
  let token = await getToken(request);
  return json({ isLoggedIn: Boolean(token) });
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxs3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs3("head", { children: [
      /* @__PURE__ */ jsx4("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx4(Meta, {}),
      /* @__PURE__ */ jsx4(Links, {})
    ] }),
    /* @__PURE__ */ jsxs3("body", { className: "font-sans bg-white text-gray-900 dark:bg-gray-950", children: [
      children,
      /* @__PURE__ */ jsx4(ScrollRestoration, {}),
      /* @__PURE__ */ jsx4(Scripts, {}),
      /* @__PURE__ */ jsx4(LiveReload, {})
    ] })
  ] });
}
function App() {
  let { isLoggedIn } = useLoaderData();
  return /* @__PURE__ */ jsx4(Layout, { children: /* @__PURE__ */ jsxs3("div", { children: [
    /* @__PURE__ */ jsx4(NavBar, { isLoggedIn }),
    " ",
    /* @__PURE__ */ jsx4(Nav, { isLoggedIn }),
    /* @__PURE__ */ jsx4(Outlet, {}),
    /* @__PURE__ */ jsx4("footer", { className: "text-center p-4 bg-gray-200 dark:bg-gray-800", children: /* @__PURE__ */ jsxs3("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Quotes App. A Project By Damilare Fagbenro. All rights reserved."
    ] }) })
  ] }) });
}

// app/routes/forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action,
  default: () => ResetPassword
});
import { Form as Form2, useActionData } from "@remix-run/react";
import { json as json2, redirect } from "@remix-run/node";
import { useEffect } from "react";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var action = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), newPassword = formData.get("newPassword"), res = await fetch("https://quotes-auth.onrender.com/auth/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, newPassword })
  }), data = await res.json();
  return res.ok ? redirect("/login?message=Password successfully updated") : json2({ error: data.message });
};
function ResetPassword() {
  let actionData = useActionData();
  return useEffect(() => {
    if (typeof window < "u" && actionData?.success) {
      let timer = setTimeout(() => {
        window.location.href = "/login";
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, [actionData]), /* @__PURE__ */ jsxs4("div", { className: "max-w-xl mx-auto p-4", children: [
    /* @__PURE__ */ jsx5("h1", { className: "text-3xl font-bold mb-6", children: "Reset Password" }),
    actionData?.error && /* @__PURE__ */ jsx5("p", { className: "text-red-600 mb-4", children: actionData.error }),
    actionData?.success && /* @__PURE__ */ jsxs4("p", { className: "text-green-600 mb-4", children: [
      actionData.success,
      " Redirecting to login..."
    ] }),
    /* @__PURE__ */ jsxs4(Form2, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx5("label", { children: "Email" }),
        /* @__PURE__ */ jsx5(
          "input",
          {
            name: "email",
            type: "email",
            required: !0,
            className: "w-full border p-2 rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx5("label", { children: "New Password" }),
        /* @__PURE__ */ jsx5(
          "input",
          {
            name: "newPassword",
            type: "password",
            required: !0,
            className: "w-full border p-2 rounded"
          }
        )
      ] }),
      /* @__PURE__ */ jsx5("button", { className: "bg-blue-600 text-white px-4 py-2 rounded w-full", children: "Update Password" })
    ] })
  ] });
}

// app/routes/edit-quote.$id.tsx
var edit_quote_id_exports = {};
__export(edit_quote_id_exports, {
  action: () => action2,
  default: () => EditQuote,
  loader: () => loader2
});
import { json as json3, redirect as redirect2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Form as Form3 } from "@remix-run/react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var loader2 = async ({ params, request }) => {
  let token = await getToken(request);
  if (!token)
    return redirect2("/login");
  let res = await fetch(`https://quotes-auth.onrender.com/quotes/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok)
    throw new Response("Quote not found", { status: 404 });
  let quote = await res.json();
  return json3({ quote, token });
}, action2 = async ({ request, params }) => {
  let formData = await request.formData(), text = formData.get("text"), tags = formData.get("tags"), token = await getToken(request);
  if (!(await fetch(`https://quotes-auth.onrender.com/quotes/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      text,
      tags: tags?.toString().split(",").map((tag) => tag.trim())
    })
  })).ok)
    throw new Error("Failed to update quote");
  let session = await storage.getSession(request.headers.get("Cookie"));
  return setFlash(session, "Quote updated successfully!"), redirect2("/quotes", {
    headers: { "Set-Cookie": await storage.commitSession(session) }
  });
  return redirect2("/quotes");
};
function EditQuote() {
  let { quote } = useLoaderData2();
  return /* @__PURE__ */ jsxs5("div", { className: "max-w-xl mx-auto p-6", children: [
    /* @__PURE__ */ jsx6("h1", { className: "text-2xl font-bold mb-4", children: "Edit Quote" }),
    /* @__PURE__ */ jsxs5(Form3, { method: "post", children: [
      /* @__PURE__ */ jsxs5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx6("label", { className: "block mb-1 font-medium", children: "Quote Text" }),
        /* @__PURE__ */ jsx6(
          "textarea",
          {
            name: "text",
            defaultValue: quote.text,
            className: "w-full border rounded p-2",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx6("label", { className: "block mb-1 font-medium", children: "Tags (comma-separated)" }),
        /* @__PURE__ */ jsx6(
          "input",
          {
            type: "text",
            name: "tags",
            defaultValue: quote.tags?.join(", "),
            className: "w-full border rounded p-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx6(
        "button",
        {
          type: "submit",
          className: "bg-blue-600 text-white px-4 py-2 rounded",
          children: "Update Quote"
        }
      )
    ] })
  ] });
}

// app/routes/create-quote.tsx
var create_quote_exports = {};
__export(create_quote_exports, {
  action: () => action3,
  default: () => CreateQuote
});
import { Form as Form4, useActionData as useActionData2 } from "@remix-run/react";
import { json as json4, redirect as redirect3 } from "@remix-run/node";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var action3 = async ({ request }) => {
  let formData = await request.formData(), content = formData.get("content"), author = formData.get("author"), tag = formData.get("tag");
  if (!content || !author || !tag)
    return json4({ error: "All fields are required" }, { status: 400 });
  let session = await storage.getSession(request.headers.get("Cookie")), token = session.get("token");
  if (!token)
    return redirect3("/login");
  let res = await fetch("https://quotes-auth.onrender.com/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      text: content,
      author,
      tags: [tag]
    })
  });
  if (res.ok)
    return setFlash(session, "Quote added successfully!"), redirect3("/quotes", {
      headers: {
        "Set-Cookie": await storage.commitSession(session)
      }
    });
  let errorMsg = (await res.json().catch(() => null))?.message || "Failed to add quote";
  return json4({ error: errorMsg }, { status: 400 });
};
function CreateQuote() {
  let actionData = useActionData2();
  return /* @__PURE__ */ jsxs6("div", { className: "max-w-xl mx-auto p-4", children: [
    /* @__PURE__ */ jsx7("h1", { className: "text-3xl font-bold mb-6", children: "Add New Quote" }),
    actionData?.error && /* @__PURE__ */ jsx7("p", { className: "text-red-600 mb-4", children: actionData.error }),
    /* @__PURE__ */ jsxs6(Form4, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx7("label", { children: "Content" }),
        /* @__PURE__ */ jsx7("input", { name: "content", type: "text", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx7("label", { children: "Author" }),
        /* @__PURE__ */ jsx7("input", { name: "author", type: "text", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx7("label", { children: "Tag" }),
        /* @__PURE__ */ jsx7("input", { name: "tag", type: "text", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsx7("button", { className: "bg-blue-600 text-white px-4 py-2 rounded", children: "Save" })
    ] })
  ] });
}

// app/routes/delete-quote.tsx
var delete_quote_exports = {};
__export(delete_quote_exports, {
  action: () => action4
});
import { json as json5, redirect as redirect4 } from "@remix-run/node";
var action4 = async ({ request }) => {
  let id = (await request.formData()).get("id"), session = await storage.getSession(request.headers.get("Cookie")), token = session.get("token");
  return token ? (await fetch(`https://quotes-auth.onrender.com/quotes/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  })).ok ? (setFlash(session, "Quote deleted successfully!"), redirect4("/quotes", {
    headers: { "Set-Cookie": await storage.commitSession(session) }
  })) : json5({ error: "Not authorized or quote not found" }, { status: 403 }) : redirect4("/login");
};

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action5,
  default: () => Register
});
import { Form as Form5, useActionData as useActionData3 } from "@remix-run/react";
import { json as json6, redirect as redirect5 } from "@remix-run/node";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var action5 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), username = formData.get("username"), res = await fetch("https://quotes-auth.onrender.com/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, username })
  }), data = await res.json();
  if (!res.ok)
    return json6({ error: data.message });
  let session = await storage.getSession();
  return setFlash(session, "Account created successfully. Please log in."), redirect5("/login", {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
};
function Register() {
  let actionData = useActionData3();
  return /* @__PURE__ */ jsxs7("div", { className: "max-w-xl mx-auto p-4", children: [
    /* @__PURE__ */ jsx8("h1", { className: "text-3xl font-bold mb-6", children: "Register" }),
    actionData?.error && /* @__PURE__ */ jsx8("p", { className: "text-red-600 mb-4", children: actionData.error }),
    /* @__PURE__ */ jsxs7(Form5, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsx8("label", { children: "Email" }),
        /* @__PURE__ */ jsx8("input", { name: "email", type: "email", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsx8("label", { children: "Username" }),
        /* @__PURE__ */ jsx8("input", { name: "username", type: "text", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsxs7("div", { children: [
        /* @__PURE__ */ jsx8("label", { children: "Password" }),
        /* @__PURE__ */ jsx8("input", { name: "password", type: "password", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsx8("button", { className: "bg-blue-600 text-white px-4 py-2 rounded w-full", children: "Register" })
    ] }),
    /* @__PURE__ */ jsxs7("p", { className: "mt-4 text-center", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsx8("a", { href: "/login", className: "text-blue-600 hover:underline", children: "Login here" })
    ] })
  ] });
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action6,
  default: () => Logout
});
import { redirect as redirect6 } from "@remix-run/node";
var action6 = async ({ request }) => {
  let session = await storage.getSession(request.headers.get("Cookie"));
  await storage.destroySession(session);
  let newSession = await storage.getSession();
  return setFlash(newSession, "Logged out successfully!"), redirect6("/login", {
    headers: {
      "Set-Cookie": await storage.commitSession(newSession)
    }
  });
};
function Logout() {
  return null;
}

// app/routes/quotes.tsx
var quotes_exports = {};
__export(quotes_exports, {
  default: () => Quotes,
  loader: () => loader3
});
import { useLoaderData as useLoaderData3, Link as Link3, Form as Form6 } from "@remix-run/react";
import { json as json7, redirect as redirect7 } from "@remix-run/node";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var loader3 = async ({ request }) => {
  let token = await getToken(request);
  if (!token)
    return redirect7("/login");
  let res = await fetch("https://quotes-auth.onrender.com/quotes", {
    headers: { Authorization: `Bearer ${token}` }
  }), quotes = res.ok ? await res.json() : [], decodedPayload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString()), userEmail = decodedPayload.email, userId = decodedPayload.userId, { session, message } = await getFlashSession(request);
  return json7(
    { quotes, token, userEmail, userId, message },
    { headers: { "Set-Cookie": await commitFlashSession(session) } }
  );
};
function Quotes() {
  let { quotes, userEmail, userId, message } = useLoaderData3();
  return /* @__PURE__ */ jsxs8("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsx9("h1", { className: "text-3xl font-bold mb-4", children: "Quotes" }),
    message && /* @__PURE__ */ jsx9(
      "div",
      {
        className: `mb-4 p-3 rounded ${(() => {
          let msg = message.trim().toLowerCase();
          return msg.includes("deleted") || msg.includes("logged out") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700";
        })()}`,
        children: message
      }
    ),
    /* @__PURE__ */ jsxs8("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxs8("p", { className: "text-gray-600", children: [
        "Welcome, ",
        userEmail
      ] }),
      /* @__PURE__ */ jsx9(Link3, { to: "/create-quote", className: "bg-green-600 text-white px-4 py-2 rounded", children: "Add New Quote" })
    ] }),
    quotes.length === 0 && /* @__PURE__ */ jsx9("p", { className: "text-gray-500", children: "No quotes available." }),
    quotes.map((quote) => /* @__PURE__ */ jsxs8("div", { className: "border p-4 mb-2 rounded", children: [
      /* @__PURE__ */ jsx9("p", { children: quote.text }),
      /* @__PURE__ */ jsxs8("small", { children: [
        "by ",
        quote.author ?? "Anonymous"
      ] }),
      quote.tags?.length > 0 && /* @__PURE__ */ jsxs8("p", { className: "text-sm text-gray-500 mt-2", children: [
        "Tags: ",
        quote.tags.join(", ")
      ] }),
      quote.userId === userId && /* @__PURE__ */ jsxs8("div", { className: "flex space-x-3 mt-3", children: [
        /* @__PURE__ */ jsx9(Link3, { to: `/edit-quote/${quote.id}`, className: "text-blue-600 hover:underline", children: "Edit" }),
        /* @__PURE__ */ jsxs8(Form6, { method: "post", action: "/delete-quote", children: [
          /* @__PURE__ */ jsx9("input", { type: "hidden", name: "id", value: quote.id }),
          /* @__PURE__ */ jsx9("button", { type: "submit", className: "text-red-600 hover:underline", children: "Delete" })
        ] })
      ] })
    ] }, quote.id))
  ] });
}

// app/routes/random.tsx
var random_exports = {};
__export(random_exports, {
  default: () => RandomQuote,
  loader: () => loader4
});
import { useLoaderData as useLoaderData4, Link as Link4 } from "@remix-run/react";
import { json as json8 } from "@remix-run/node";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var loader4 = async () => {
  try {
    let res = await fetch("https://quotes-auth.onrender.com/quotes/random");
    if (!res.ok)
      throw new Error("Failed to fetch random quote");
    let data = await res.json();
    return json8(data);
  } catch {
    return json8({
      id: "",
      text: "No quote available.",
      author: "",
      tags: [],
      userId: ""
    });
  }
};
function RandomQuote() {
  let quote = useLoaderData4();
  return /* @__PURE__ */ jsxs9("div", { className: "max-w-2xl mx-auto text-center p-8", children: [
    /* @__PURE__ */ jsx10("h1", { className: "text-3xl font-bold mb-6", children: "Random Quote" }),
    /* @__PURE__ */ jsxs9("p", { className: "italic text-lg mb-4", children: [
      '"',
      quote.text,
      '"'
    ] }),
    quote.author && /* @__PURE__ */ jsxs9("p", { className: "text-right", children: [
      "\u2014 ",
      quote.author
    ] }),
    quote.tags && quote.tags.length > 0 && /* @__PURE__ */ jsxs9("p", { className: "text-sm text-gray-500 mt-2", children: [
      "Tags: ",
      quote.tags.join(", ")
    ] }),
    /* @__PURE__ */ jsx10("div", { className: "mt-6", children: /* @__PURE__ */ jsx10(Link4, { to: "/random", reloadDocument: !0, children: /* @__PURE__ */ jsx10("button", { className: "bg-blue-600 text-white px-4 py-2 rounded", children: "Get Another Quote" }) }) })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxs10("div", { className: "min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-4", children: [
    /* @__PURE__ */ jsx11("h1", { className: "text-4xl font-bold mb-4", children: "Welcome to the Quotes App" }),
    /* @__PURE__ */ jsx11("p", { className: "text-lg mb-8", children: "A simple app to manage inspirational quotes." }),
    /* @__PURE__ */ jsxs10("div", { className: "space-x-4", children: [
      /* @__PURE__ */ jsx11(
        "a",
        {
          href: "/register",
          className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
          children: "Register"
        }
      ),
      /* @__PURE__ */ jsx11(
        "a",
        {
          href: "/login",
          className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
          children: "Login"
        }
      ),
      /* @__PURE__ */ jsx11(
        "a",
        {
          href: "/quotes",
          className: "bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900",
          children: "Quotes"
        }
      )
    ] })
  ] });
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => Login,
  loader: () => loader5
});
import { Form as Form7, useActionData as useActionData4, useLoaderData as useLoaderData5, useSearchParams } from "@remix-run/react";
import { redirect as redirect8, json as json9 } from "@remix-run/node";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var loader5 = async ({ request }) => {
  let { session, message } = await getFlashSession(request);
  return json9(
    { message },
    {
      headers: {
        "Set-Cookie": await commitFlashSession(session)
      }
    }
  );
}, action7 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), res = await fetch("https://quotes-auth.onrender.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok)
    return json9({ error: "Invalid email or password. Please try again." }, { status: 400 });
  let data = await res.json(), session = await storage.getSession();
  return session.set("token", data.token), session.flash("flash", "Login successful!"), redirect8("/quotes", {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
};
function Login() {
  let actionData = useActionData4(), loaderData = useLoaderData5(), [searchParams] = useSearchParams(), urlMessage = searchParams.get("message");
  return /* @__PURE__ */ jsxs11("div", { className: "max-w-xl mx-auto p-4", children: [
    /* @__PURE__ */ jsx12("h1", { className: "text-3xl font-bold mb-6", children: "Login" }),
    loaderData.message && /* @__PURE__ */ jsx12(
      "div",
      {
        className: `mb-4 p-3 rounded ${loaderData.message.toLowerCase().includes("logged out") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`,
        children: loaderData.message
      }
    ),
    actionData?.error && /* @__PURE__ */ jsx12("div", { className: "mb-4 p-3 bg-red-100 text-red-700 rounded", children: actionData.error }),
    urlMessage && /* @__PURE__ */ jsx12("div", { className: "mb-4 p-3 bg-green-100 text-green-700 rounded", children: urlMessage }),
    /* @__PURE__ */ jsxs11(Form7, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxs11("div", { children: [
        /* @__PURE__ */ jsx12("label", { children: "Email" }),
        /* @__PURE__ */ jsx12("input", { name: "email", type: "email", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsxs11("div", { children: [
        /* @__PURE__ */ jsx12("label", { children: "Password" }),
        /* @__PURE__ */ jsx12("input", { name: "password", type: "password", required: !0, className: "w-full border p-2 rounded" })
      ] }),
      /* @__PURE__ */ jsx12("button", { className: "bg-blue-600 text-white px-4 py-2 rounded", children: "Login" }),
      /* @__PURE__ */ jsxs11("div", { className: "mt-4 space-y-2", children: [
        /* @__PURE__ */ jsxs11("p", { children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsx12("a", { href: "/register", className: "text-blue-600", children: "Register" })
        ] }),
        /* @__PURE__ */ jsx12("p", { children: /* @__PURE__ */ jsx12("a", { href: "/forgot-password", className: "text-blue-600", children: "Forgot password?" }) })
      ] })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-F7N7Z4CP.js", imports: ["/build/_shared/chunk-3XPYNX75.js", "/build/_shared/chunk-4HXKWYDW.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BQZ6ZSQB.js", imports: ["/build/_shared/chunk-QVTEGN3F.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OMJXG2OO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/create-quote": { id: "routes/create-quote", parentId: "root", path: "create-quote", index: void 0, caseSensitive: void 0, module: "/build/routes/create-quote-CDWU5M6U.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/delete-quote": { id: "routes/delete-quote", parentId: "root", path: "delete-quote", index: void 0, caseSensitive: void 0, module: "/build/routes/delete-quote-DYU2JQAW.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/edit-quote.$id": { id: "routes/edit-quote.$id", parentId: "root", path: "edit-quote/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/edit-quote.$id-C4N4ZZDR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/forgot-password": { id: "routes/forgot-password", parentId: "root", path: "forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-password-77LJTEBW.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-E2JTUS5Y.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-DZHFSNPX.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/quotes": { id: "routes/quotes", parentId: "root", path: "quotes", index: void 0, caseSensitive: void 0, module: "/build/routes/quotes-HANLJH2Z.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/random": { id: "routes/random", parentId: "root", path: "random", index: void 0, caseSensitive: void 0, module: "/build/routes/random-WZJACGFU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-C27BUB66.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d9805282", hmr: void 0, url: "/build/manifest-D9805282.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/forgot-password": {
    id: "routes/forgot-password",
    parentId: "root",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_password_exports
  },
  "routes/edit-quote.$id": {
    id: "routes/edit-quote.$id",
    parentId: "root",
    path: "edit-quote/:id",
    index: void 0,
    caseSensitive: void 0,
    module: edit_quote_id_exports
  },
  "routes/create-quote": {
    id: "routes/create-quote",
    parentId: "root",
    path: "create-quote",
    index: void 0,
    caseSensitive: void 0,
    module: create_quote_exports
  },
  "routes/delete-quote": {
    id: "routes/delete-quote",
    parentId: "root",
    path: "delete-quote",
    index: void 0,
    caseSensitive: void 0,
    module: delete_quote_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/quotes": {
    id: "routes/quotes",
    parentId: "root",
    path: "quotes",
    index: void 0,
    caseSensitive: void 0,
    module: quotes_exports
  },
  "routes/random": {
    id: "routes/random",
    parentId: "root",
    path: "random",
    index: void 0,
    caseSensitive: void 0,
    module: random_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
