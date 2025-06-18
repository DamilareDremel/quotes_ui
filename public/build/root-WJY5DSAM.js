import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-XSRPBCP7.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  createHotContext
} from "/build/_shared/chunk-D4FCDWUC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);

// app/components/NavBar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\NavBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\NavBar.tsx"
  );
  import.meta.hot.lastModified = "1750209116956.0256";
}
function NavBar({
  isLoggedIn
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex items-center justify-between bg-gray-800 text-white p-4 mb-6 rounded", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "text-xl font-bold hover:text-blue-600", children: "Quotes App" }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-red-600 hover:bg-red-500 px-3 py-1 rounded", children: "Logout" }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 30,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "bg-green-600 hover:bg-green-500 px-3 py-1 rounded", children: "Login" }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 34,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = NavBar;
var _c;
$RefreshReg$(_c, "NavBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-RVNOZTEA.css";

// app/components/Nav.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Nav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Nav.tsx"
  );
  import.meta.hot.lastModified = "1750208056158.2722";
}
function Nav({
  isLoggedIn
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex space-x-4 p-4 bg-gray-200", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/quotes", className: "text-blue-600 font-semibold", children: "All Quotes" }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    isLoggedIn && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/create-quote", className: "text-blue-600 font-semibold", children: "Add Quote" }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 28,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/random", className: "text-blue-600 font-semibold", children: "Random Quote" }, void 0, false, {
      fileName: "app/components/Nav.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Nav.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = Nav;
var _c2;
$RefreshReg$(_c2, "Nav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
  // ... your other links
];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "font-sans bg-white text-gray-900 dark:bg-gray-950", children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_c3 = Layout;
function App() {
  _s();
  const {
    isLoggedIn
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBar, { isLoggedIn }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav, { isLoggedIn }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "text-center p-4 bg-gray-200 dark:bg-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Quotes App. A Project By Damilare Fagbenro. All rights reserved."
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(App, "D61kinSYsKMKCXcFuF7zeJ5ZpUI=", false, function() {
  return [useLoaderData];
});
_c22 = App;
var _c3;
var _c22;
$RefreshReg$(_c3, "Layout");
$RefreshReg$(_c22, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links
};
//# sourceMappingURL=/build/root-WJY5DSAM.js.map
