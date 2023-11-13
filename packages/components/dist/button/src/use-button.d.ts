import { SetupContext } from 'vue';
import { ButtonEmits, ButtonProps } from './button';
export declare function useButtonRender(props: ButtonProps): {
    buttonRef: import("vue").Ref<HTMLButtonElement | undefined>;
    nsButton: {
        derivedNamespace: import("vue").ComputedRef<string>;
        namespace: string;
        b: () => string;
        e: (element: string) => string;
        m: (modifier: string) => string;
        em: (element: string, modifier: string) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    buttonSize: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "large" | "medium" | "mini", never>>;
    buttonType: import("vue").ComputedRef<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown>>;
    classes: import("vue").ComputedRef<{
        [x: string]: import("@tu-view-plus/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    }>;
    buttonAttrs: import("vue").ComputedRef<{
        ariaDisabled: boolean;
        disabled: boolean;
        autofocus: boolean;
        type: import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "button" | "reset" | "submit", unknown>;
    }>;
};
export declare function useButtonEvent(emit: SetupContext<ButtonEmits>['emit']): {
    handleClick: (evt: MouseEvent) => void;
};
