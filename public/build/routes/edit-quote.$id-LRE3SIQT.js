import {
  Form,
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

// app/routes/edit-quote.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\edit-quote.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\edit-quote.$id.tsx"
  );
  import.meta.hot.lastModified = "1750240183110.2764";
}
function EditQuote() {
  _s();
  const {
    quote
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-xl mx-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "Edit Quote" }, void 0, false, {
      fileName: "app/routes/edit-quote.$id.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-1 font-medium", children: "Quote Text" }, void 0, false, {
          fileName: "app/routes/edit-quote.$id.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "text", defaultValue: quote.text, className: "w-full border rounded p-2", required: true }, void 0, false, {
          fileName: "app/routes/edit-quote.$id.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/edit-quote.$id.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block mb-1 font-medium", children: "Tags (comma-separated)" }, void 0, false, {
          fileName: "app/routes/edit-quote.$id.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "tags", defaultValue: quote.tags?.join(", "), className: "w-full border rounded p-2" }, void 0, false, {
          fileName: "app/routes/edit-quote.$id.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/edit-quote.$id.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-blue-600 text-white px-4 py-2 rounded", children: "Update Quote" }, void 0, false, {
        fileName: "app/routes/edit-quote.$id.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/edit-quote.$id.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/edit-quote.$id.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_s(EditQuote, "0osv/lUOAdbtIyyrpLqKMfFEN8M=", false, function() {
  return [useLoaderData];
});
_c = EditQuote;
var _c;
$RefreshReg$(_c, "EditQuote");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditQuote as default
};
//# sourceMappingURL=/build/routes/edit-quote.$id-LRE3SIQT.js.map
