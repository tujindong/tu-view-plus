import { ref as i, computed as u } from "vue";
function c(t, e) {
  const a = i(), n = u(() => ({
    ariaDisabled: t.disabled || t.loading,
    disabled: t.disabled || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  }));
  return { buttonRef: a, buttonAttrs: n, handleClick: (d) => {
    e("click", d);
  } };
}
export {
  c as default
};
