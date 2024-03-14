import { computed, getCurrentInstance, ComputedRef } from 'vue';

const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

export function useMenu(): {
  key: ComputedRef<string>;
} {
  const instance = getCurrentInstance();
  const key = computed(
    () => (instance?.vnode.key as string) || generateId('__tu_menu')
  );

  return {
    key
  };
}
