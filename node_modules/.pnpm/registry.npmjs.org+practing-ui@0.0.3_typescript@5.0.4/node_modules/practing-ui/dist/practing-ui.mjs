import { defineComponent as m, ref as b, computed as g, openBlock as c, createElementBlock as s, normalizeStyle as y, createElementVNode as d, normalizeClass as x, createCommentVNode as z, renderSlot as V } from "vue";
const B = ["type", "value", "disabled", "placeholder", "autofocus"], C = /* @__PURE__ */ m({
  name: "PInput",
  __name: "index",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "default"
    },
    disabled: Boolean,
    clearable: Boolean,
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    //当页面加载时 <input> 元素自动获得焦点
    autofocus: Boolean
  },
  emits: ["update:modelValue", "clear", "focus", "blur", "input", "change"],
  setup(e, { emit: l }) {
    const a = e;
    console.log(a);
    const n = b(!1), u = (t) => {
      let { value: o } = t.target;
      console.log(o, "valuevalue"), l("update:modelValue", o), l("input", o);
    }, i = () => {
      l("update:modelValue", ""), l("change", ""), l("clear"), l("input", "");
    }, p = (t) => {
      n.value = !0, l("focus", t);
    }, f = (t) => {
      n.value = !1, l("blur", t);
    }, v = (t) => {
      l("change", t.target.value);
    }, h = g(() => [
      a.clearable ? "p-input-clearable" : a.size == "default" ? "p-input-default" : `p-input-${a.size}`,
      a.disabled ? "p-input-disabled" : ""
    ]);
    return (t, o) => (c(), s("div", {
      class: "p-input-default",
      style: y({ width: e.size && e.size !== "" ? `${e.size}px` : "" })
    }, [
      d("div", {
        class: x(h.value)
      }, [
        d("input", {
          ref: "input",
          type: e.type,
          value: e.modelValue,
          disabled: e.disabled,
          placeholder: e.placeholder,
          autofocus: e.autofocus,
          onInput: u,
          onFocus: p,
          onBlur: f,
          onChange: v
        }, null, 40, B),
        e.clearable && e.modelValue != "" ? (c(), s("i", {
          key: 0,
          class: "clearable-icon",
          onClick: i
        }, "x")) : z("", !0)
      ], 2),
      V(t.$slots, "btn", {}, void 0, !0)
    ], 4));
  }
});
const I = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [n, u] of l)
    a[n] = u;
  return a;
}, r = /* @__PURE__ */ I(C, [["__scopeId", "data-v-8ec2f7fc"]]), S = {
  install: (e) => {
    e.component(r.name, r);
  }
}, k = [S], $ = (e) => {
  k.forEach((l) => {
    e.use(l);
  });
}, N = {
  version: "0.0.1",
  install: $
};
export {
  S as PInput,
  N as default,
  $ as install
};
