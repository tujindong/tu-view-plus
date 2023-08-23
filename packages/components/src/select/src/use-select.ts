import { reactive } from 'vue';
import { useLocale } from '@tu-view-plus/hooks';
import { SelectProps, SelectEmits } from './select';

import type { SetupContext } from 'vue';

export function useSelect(
  props: SelectProps,
  emit: SetupContext<SelectEmits>['emit']
) {
  const handleMouseEnter = () => {
    // console.log('handleMouseEnter');
  };

  const handleMouseLeave = () => {
    // console.log('handleMouseLeave');
  };

  const toggleMenu = () => {
    console.log('toggleMenu');
  };

  return { handleMouseEnter, handleMouseLeave, toggleMenu };
}
