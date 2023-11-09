import type Avatar from './avatar.vue';
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
export declare const avatarProps: {
    shape: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "circle" | "square") | (() => "circle" | "square") | ((new (...args: any[]) => "circle" | "square") | (() => "circle" | "square"))[], "circle" | "square", unknown, string, boolean>;
    imageUrl: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    size: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    autoFixFontSize: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, boolean, boolean>;
    triggerType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "button" | "mask") | (() => "button" | "mask") | ((new (...args: any[]) => "button" | "mask") | (() => "button" | "mask"))[], "button" | "mask", unknown, string, boolean>;
    triggerIconStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "line" | "up" | "down", unknown, string, boolean>;
};
export declare const avatarEmits: {
    click: (e: Event) => boolean;
    error: () => boolean;
    load: () => boolean;
};
export type AvatarProps = ExtractPropTypes<typeof avatarProps>;
export type AvatarInstance = InstanceType<typeof Avatar>;
