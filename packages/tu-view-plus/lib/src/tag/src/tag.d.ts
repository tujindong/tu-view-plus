import type { ExtractPropTypes } from 'vue';
import type Tag from './tag.vue';
export declare const tagProps: {
    readonly closable: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly hit: BooleanConstructor;
    readonly color: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    readonly size: {
        readonly default: "medium";
        readonly type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "dark" | "light" | "plain" | "neumorphic", unknown, "neumorphic", boolean>;
    readonly round: BooleanConstructor;
};
export declare const tagEmits: {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
};
export declare type TagProps = ExtractPropTypes<typeof tagProps>;
export declare type TagInstance = InstanceType<typeof Tag>;
export declare type TagEmits = typeof tagEmits;
