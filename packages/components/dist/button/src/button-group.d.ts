import type { ExtractPropTypes } from 'vue';
export declare const buttonGroupProps: {
    /**
     * @zh 按钮的尺寸
     * @en Button size
     * @values 'mini','small','medium','large'
     * @defaultValue 'medium'
     */
    readonly size: {
        default: string;
        type: import("vue").PropType<import("@tu-view-plus/utils").EpPropMergeType<StringConstructor, "" | "small" | "medium" | "large" | "mini", never>>;
        required: false;
        validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    /**
     * @zh 按钮的类型
     * @en Button type
     * @values 'default','primary','success','warning', 'info', 'danger', 'text', ''
     * @defaultValue 'default'
     */
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "success" | "warning" | "danger" | "info" | "primary", unknown, string, boolean>;
};
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
