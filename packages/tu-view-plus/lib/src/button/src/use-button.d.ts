import { SetupContext } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
export default function useButton(props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']): {
    buttonRef: import("vue").Ref<HTMLButtonElement | undefined>;
    buttonAttrs: import("vue").ComputedRef<{
        ariaDisabled: boolean;
        disabled: boolean;
        autofocus: boolean;
        type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
    }>;
    handleClick: (evt: MouseEvent) => void;
};
