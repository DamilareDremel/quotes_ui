import {
  Form,
  useActionData
} from "/build/_shared/chunk-XSRPBCP7.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
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

// app/routes/forgot-password.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\forgot-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\forgot-password.tsx"
  );
  import.meta.hot.lastModified = "1750262789087.1113";
}
function ResetPassword() {
  _s();
  const actionData = useActionData();
  (0, import_react2.useEffect)(() => {
    if (typeof window !== "undefined" && actionData?.success) {
      const timer = setTimeout(() => {
        window.location.href = "/login";
      }, 3e3);
      return () => clearTimeout(timer);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-xl mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Reset Password" }, void 0, false, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 mb-4", children: actionData.error }, void 0, false, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 63,
      columnNumber: 29
    }, this),
    actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-600 mb-4", children: [
      actionData.success,
      " Redirecting to login..."
    ] }, void 0, true, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 65,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Email" }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", required: true, className: "w-full border p-2 rounded" }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "New Password" }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "newPassword", type: "password", required: true, className: "w-full border p-2 rounded" }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 text-white px-4 py-2 rounded w-full", children: "Update Password" }, void 0, false, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/forgot-password.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(ResetPassword, "PRDjjkJaMryQ6wxX5PsbqQjqVos=", false, function() {
  return [useActionData];
});
_c = ResetPassword;
var _c;
$RefreshReg$(_c, "ResetPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ResetPassword as default
};
//# sourceMappingURL=/build/routes/forgot-password-CBTHR66E.js.map
