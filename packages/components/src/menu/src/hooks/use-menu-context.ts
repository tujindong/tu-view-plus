import { inject } from 'vue';
import { MenuContext, MenuInjectionKey } from '../context';

export function useMenuContext(): Partial<MenuContext> {
  const menuContext = inject(MenuInjectionKey);
  return menuContext || {};
}
