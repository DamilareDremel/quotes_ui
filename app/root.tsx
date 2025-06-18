import { json, LoaderFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { getToken } from "~/utils/session.server";
import type { LinksFunction } from "@remix-run/node";
import NavBar from "~/components/NavBar";
import stylesheet from "~/tailwind.css";
import Nav from "~/components/Nav";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  // ... your other links
];

// 👇 Root loader to fetch login status
export const loader: LoaderFunction = async ({ request }) => {
  const token = await getToken(request);
  return json({ isLoggedIn: Boolean(token) });
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-white text-gray-900 dark:bg-gray-950">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  const { isLoggedIn } = useLoaderData<typeof loader>(); // 👈 get login status from loader

  return (
    <Layout>
      <div>
        <NavBar isLoggedIn={isLoggedIn} /> {/* 👈 pass to NavBar */}
        <Nav isLoggedIn={isLoggedIn} />
        <Outlet />
        <footer className="text-center p-4 bg-gray-200 dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Quotes App. A Project By Damilare Fagbenro. All rights reserved.
          </p>
        </footer>
      </div>
    </Layout>
  );
}
