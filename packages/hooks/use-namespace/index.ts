import { computed, inject, ref, unref } from 'vue';
import type { InjectionKey, Ref } from 'vue';

export const defaultNamespace = 'tu';

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('namespaceContextKey');

export type UseNamespace = {
  b: () => string;
  e: (el: string) => string;
  m: (mo: string) => string;
  em: (el: string, mo: string) => string;
};

function createBem(
  namespace: string,
  element?: string,
  modifier?: string
): string {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

export const useGetDerivedNamespace = (
  namespaceOverrides?: Ref<string | undefined>
) => {
  const derivedNamespace =
    namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};

export function useNamespace(
  block: string,
  namespaceOverrides?: Ref<string | undefined>
): UseNamespace {
  const namespace = `${
    useGetDerivedNamespace(namespaceOverrides).value
  }-${block}`;

  const b = () => createBem(namespace);
  const e = (element: string) => (element ? createBem(namespace, element) : '');
  const m = (modifier: string) =>
    modifier ? createBem(namespace, '', modifier) : '';
  const em = (element: string, modifier: string) =>
    element && modifier ? createBem(namespace, element, modifier) : '';
  return {
    b,
    e,
    m,
    em
  };
}
