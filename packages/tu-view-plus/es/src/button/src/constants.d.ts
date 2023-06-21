import type { InjectionKey } from 'vue';
import type { ButtonProps } from './button';
export interface ButtonGroupContext {
    size?: ButtonProps['size'];
    type?: ButtonProps['type'];
}
export declare const buttonGroupInjectionKey: InjectionKey<ButtonGroupContext>;
export declare const buttonTypes: readonly ["default", "primary", "success", "warning", "info", "danger", "text", ""];
export declare const buttonNativeTypes: readonly ["button", "submit", "reset"];
