import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-XSRPBCP7.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
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

// app/routes/random.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\random.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\random.tsx"
  );
  import.meta.hot.lastModified = "1750262821269.9417";
}
function RandomQuote() {
  _s();
  const quote = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto text-center p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Random Quote" }, void 0, false, {
      fileName: "app/routes/random.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "italic text-lg mb-4", children: [
      '"',
      quote.text,
      '"'
    ] }, void 0, true, {
      fileName: "app/routes/random.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    quote.author && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-right", children: [
      "\u2014 ",
      quote.author
    ] }, void 0, true, {
      fileName: "app/routes/random.tsx",
      lineNumber: 48,
      columnNumber: 24
    }, this),
    quote.tags && quote.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mt-2", children: [
      "Tags: ",
      quote.tags.join(", ")
    ] }, void 0, true, {
      fileName: "app/routes/random.tsx",
      lineNumber: 50,
      columnNumber: 47
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/random", reloadDocument: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 text-white px-4 py-2 rounded", children: "Get Another Quote" }, void 0, false, {
      fileName: "app/routes/random.tsx",
      lineNumber: 56,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/random.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/random.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/random.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(RandomQuote, "GisoTYXLQStvnTSLOkW5LMJ9sm4=", false, function() {
  return [useLoaderData];
});
_c = RandomQuote;
var _c;
$RefreshReg$(_c, "RandomQuote");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RandomQuote as default
};
//# sourceMappingURL=/build/routes/random-K6RO2LLD.js.map
