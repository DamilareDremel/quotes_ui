import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams
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

// app/routes/login.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1750262798083.6128";
}
function Login() {
  _s();
  const actionData = useActionData();
  const loaderData = useLoaderData();
  const [searchParams] = useSearchParams();
  const urlMessage = searchParams.get("message");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-xl mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Login" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    loaderData.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mb-4 p-3 rounded ${loaderData.message.toLowerCase().includes("logged out") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`, children: loaderData.message }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 30
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 p-3 bg-red-100 text-red-700 rounded", children: actionData.error }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 87,
      columnNumber: 29
    }, this),
    urlMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 p-3 bg-green-100 text-green-700 rounded", children: urlMessage }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 91,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Email" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", required: true, className: "w-full border p-2 rounded" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Password" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "password", type: "password", required: true, className: "w-full border p-2 rounded" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 text-white px-4 py-2 rounded", children: "Login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/register", className: "text-blue-600", children: "Register" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/forgot-password", className: "text-blue-600", children: "Forgot password?" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_s(Login, "/Uyo/o64d1xJjXnuKzzT1WuUeRM=", false, function() {
  return [useActionData, useLoaderData, useSearchParams];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-WBN3JL6Q.js.map
