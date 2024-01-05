import { ref as o } from "vue";
function n(t) {
  const e = o(t);
  return [e, (u) => {
    e.value = u;
  }];
}
export {
  n as useState
};
