import type { InjectionKey } from 'vue';
import type { AvatarGroupProps } from './avatar-group';
export interface AvatarGroupContext {
    shape?: AvatarGroupProps['shape'];
    size?: AvatarGroupProps['size'];
    autoFixFontSize?: AvatarGroupProps['autoFixFontSize'];
    zIndexAscend?: AvatarGroupProps['zIndexAscend'];
    total: number;
}
export declare const avatarGroupInjectionKey: InjectionKey<AvatarGroupContext>;
export declare const shape: readonly ["square", "circle"];
export declare const triggerType: readonly ["mask", "button"];
export declare const avartEffects: readonly ["outset", "inset", "bordered", "outlined", "flat"];
export type Shape = (typeof shape)[number];
export type TriggerType = (typeof triggerType)[number];
