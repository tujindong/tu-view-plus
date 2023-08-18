import { SelectProps, SelectEmits } from './select';

import type { SetupContext } from 'vue';

export default function useSelect(
  props: SelectProps,
  emit: SetupContext<SelectEmits>['emit']
) {
  const handleClose = () => {
    console.log('handleClose');
  };

  return { handleClose };
}
