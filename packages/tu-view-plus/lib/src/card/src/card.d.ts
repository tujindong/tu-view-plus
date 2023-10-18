import type { ExtractPropTypes, PropType, CSSProperties } from 'vue';
import type Card from './card.vue';
export declare const cardProps: {
    readonly title: {
        readonly type: PropType<string>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly bodyStyle: {
        readonly type: PropType<CSSProperties>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly size: {
        readonly default: "medium";
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "mini" | "medium" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __epPropKey: true;
    };
    readonly effect: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("line" | "up" | "down") & {}) | (() => "line" | "up" | "down") | ((new (...args: any[]) => ("line" | "up" | "down") & {}) | (() => "line" | "up" | "down"))[], "line" | "up" | "down", unknown, "line", boolean>;
};
export declare type CardProps = ExtractPropTypes<typeof cardProps>;
export declare type CardInstance = InstanceType<typeof Card>;
