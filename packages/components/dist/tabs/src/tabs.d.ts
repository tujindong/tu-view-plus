import type { ExtractPropTypes, PropType } from 'vue';
export declare const tabsProps: {
    readonly modelValue: {
        readonly type: PropType<import("@tu-view-plus/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly activeKey: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly defaultActiveKey: import("@tu-view-plus/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, undefined, boolean>;
    readonly position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top") | (() => "bottom" | "left" | "right" | "top"))[], unknown, unknown, "top", boolean>;
    readonly type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "default" | "flat" | "button" | "text" | "card-inset" | "card-outset" | "slider-inset" | "slider-outset" | "button-round") | (() => "default" | "flat" | "button" | "text" | "card-inset" | "card-outset" | "slider-inset" | "slider-outset" | "button-round") | ((new (...args: any[]) => "default" | "flat" | "button" | "text" | "card-inset" | "card-outset" | "slider-inset" | "slider-outset" | "button-round") | (() => "default" | "flat" | "button" | "text" | "card-inset" | "card-outset" | "slider-inset" | "slider-outset" | "button-round"))[], unknown, unknown, "default", boolean>;
    readonly direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, "horizontal", boolean>;
    readonly editable: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly showAddButton: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly destroyOnHide: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly lazyLoad: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly justify: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly animation: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly headerPadding: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    readonly autoSwitch: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly hideContent: import("@tu-view-plus/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
    readonly trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, "click", boolean>;
};
export declare const tabsEmits: {
    "update:modelValue": (key: string | number) => boolean;
    'update:activeKey': (key: string | number) => boolean;
    /**
     * @zh 当前标签值改变时触发
     * @en Triggered when the current tag value changes
     * @property { string | number } key
     */
    change: (key: string | number) => boolean;
    /**
     * @zh 用户点击标签时触发
     * @en Triggered when the user clicks on the tab
     * @property { string | number } key
     */
    tabClick: (key: string | number, ev: Event) => boolean;
    /**
     * @zh 用户点击增加按钮时触发
     * @en Triggered when the user clicks the add button
     */
    add: (ev: Event) => boolean;
    /**
     * @zh 用户点击删除按钮时触发
     * @en Triggered when the user clicks the delete button
     * @property { string | number } key
     */
    delete: (key: string | number, ev: Event) => boolean;
};
export type TabsProps = ExtractPropTypes<typeof tabsProps>;
