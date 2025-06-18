import {
  Form,
  Link,
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

// app/routes/quotes.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\quotes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\quotes.tsx"
  );
  import.meta.hot.lastModified = "1750286903139.233";
}
function Quotes() {
  _s();
  const {
    quotes,
    userEmail,
    userId,
    message
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-4 text-black dark:text-gray-100", children: "Quotes" }, void 0, false, {
      fileName: "app/routes/quotes.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mb-4 p-3 rounded ${(() => {
      const msg = message.trim().toLowerCase();
      return msg.includes("deleted") || msg.includes("logged out") ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100" : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100";
    })()}`, children: message }, void 0, false, {
      fileName: "app/routes/quotes.tsx",
      lineNumber: 66,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-300", children: [
        "Welcome, ",
        userEmail
      ] }, void 0, true, {
        fileName: "app/routes/quotes.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/create-quote", className: "bg-green-600 text-white px-4 py-2 rounded", children: "Add New Quote" }, void 0, false, {
        fileName: "app/routes/quotes.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/quotes.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    quotes.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 dark:text-gray-400", children: "No quotes available." }, void 0, false, {
      fileName: "app/routes/quotes.tsx",
      lineNumber: 78,
      columnNumber: 31
    }, this),
    quotes.map((quote) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border p-4 mb-2 rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-black dark:text-gray-100", children: quote.text }, void 0, false, {
        fileName: "app/routes/quotes.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-gray-600 dark:text-gray-400", children: [
        "by ",
        quote.author ?? "Anonymous"
      ] }, void 0, true, {
        fileName: "app/routes/quotes.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      quote.tags?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 dark:text-gray-400 mt-2", children: [
        "Tags: ",
        quote.tags.join(", ")
      ] }, void 0, true, {
        fileName: "app/routes/quotes.tsx",
        lineNumber: 84,
        columnNumber: 38
      }, this),
      quote.userId === userId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3 mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/edit-quote/${quote.id}`, className: "text-blue-600 dark:text-blue-400 hover:underline", children: "Edit" }, void 0, false, {
          fileName: "app/routes/quotes.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/delete-quote", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: quote.id }, void 0, false, {
            fileName: "app/routes/quotes.tsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-red-600 dark:text-red-400 hover:underline", children: "Delete" }, void 0, false, {
            fileName: "app/routes/quotes.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/quotes.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/quotes.tsx",
        lineNumber: 88,
        columnNumber: 39
      }, this)
    ] }, quote.id, true, {
      fileName: "app/routes/quotes.tsx",
      lineNumber: 80,
      columnNumber: 28
    }, this))
  ] }, void 0, true, {
    fileName: "app/routes/quotes.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(Quotes, "OcMVZ5UtuesIOuE0GrX4yIO6TbY=", false, function() {
  return [useLoaderData];
});
_c = Quotes;
var _c;
$RefreshReg$(_c, "Quotes");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Quotes as default
};
//# sourceMappingURL=/build/routes/quotes-LBT3AUTC.js.map
