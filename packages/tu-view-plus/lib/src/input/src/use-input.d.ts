import { SetupContext } from 'vue';
import { InputProps, InputEmits } from './input';
export default function useInput(props: InputProps, emit: SetupContext<InputEmits>['emit']): {
    isHovering: import("vue").Ref<boolean>;
    isFocused: import("vue").Ref<boolean>;
    isPasswordVisible: import("vue").Ref<boolean>;
    focus: () => Promise<void>;
    handleMouseEnter: (evt: MouseEvent) => void;
    handleMouseLeave: (evt: MouseEvent) => void;
    handleCompositionStart: () => void;
    handleCompositionUpdate: () => void;
    handleCompositionEnd: () => void;
    handleInput: () => void;
    handleFocus: (evt: FocusEvent) => void;
    handleBlur: (evt: FocusEvent) => void;
    handleChange: () => void;
    handleKeydown: () => void;
};
