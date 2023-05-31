import type { ExtractPropTypes } from 'vue';
export declare const buttonGroupProps: {
    /**
     * @zh 按钮的尺寸
     * @en Button size
     * @values 'mini','small','medium','large'
     * @defaultValue 'medium'
     */
    readonly size: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => ("mini" | "small" | "medium" | "large") & {}) | (() => "mini" | "small" | "medium" | "large") | ((new (...args: any[]) => ("mini" | "small" | "medium" | "large") & {}) | (() => "mini" | "small" | "medium" | "large"))[], "mini" | "small" | "medium" | "large", unknown, string, boolean>;
    /**
     * @zh 按钮的类型
     * @en Button type
     * @values 'default','primary','success','warning', 'info', 'danger', 'text', ''
     * @defaultValue 'default'
     */
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, "" | "default" | "text" | "primary" | "success" | "warning" | "info" | "danger", unknown, string, boolean>;
};
export declare type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
