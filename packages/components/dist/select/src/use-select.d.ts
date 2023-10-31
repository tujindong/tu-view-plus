import { SelectProps, SelectEmits } from './select';
import type { SetupContext } from 'vue';
export declare function useSelect(props: SelectProps, emit: SetupContext<SelectEmits>['emit']): {
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    toggleMenu: () => void;
};
