import { SetupContext } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
export declare function useButtonRender(props: ButtonProps): {
    buttonRef: import("vue").Ref<HTMLButtonElement | undefined>;
    nsButton: {
        b: () => string;
        e: (element: string) => string;
        m: (modifier: string) => string;
        em: (element: string, modifier: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    buttonSize: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
    buttonType: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown>>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    buttonAttrs: import("vue").ComputedRef<{
        ariaDisabled: boolean;
        disabled: boolean;
        autofocus: boolean;
        type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "reset" | "submit" | "button", unknown>;
    }>;
};
export declare function useButtonEvent(emit: SetupContext<ButtonEmits>['emit']): {
    handleClick: (evt: MouseEvent) => void;
};
