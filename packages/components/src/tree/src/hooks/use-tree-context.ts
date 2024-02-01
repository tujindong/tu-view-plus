import { inject } from 'vue';
import { TreeContext, TreeInjectionKey } from '../context';

export function useTreeContext(): Partial<TreeContext> {
  const treeContext = inject<TreeContext>(TreeInjectionKey);
  return treeContext || {};
}
