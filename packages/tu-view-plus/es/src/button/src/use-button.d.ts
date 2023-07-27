import { SetupContext } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
export default function useButton(props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']): {
    buttonRef: import("vue").Ref<HTMLButtonElement | undefined>;
    buttonSize: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
    buttonType: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>>;
    buttonGroupInjection: import("./constants").ButtonGroupContext | undefined;
    handleClick: (evt: MouseEvent) => void;
};
