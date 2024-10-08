declare const _default: import("vue").DefineComponent<{
    count: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    activeIndex: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider") | ((new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider"))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer"))[], unknown, unknown, string, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, string, boolean>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (cur: number | undefined, prev: number | undefined) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    count: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    activeIndex: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider") | ((new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider"))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer"))[], unknown, unknown, string, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, string, boolean>;
}>> & {
    onSelect?: ((cur: number | undefined, prev: number | undefined) => any) | undefined;
}, {
    trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown>;
    type: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider") | ((new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider"))[], unknown, unknown>;
    position: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer"))[], unknown, unknown>;
    count: number;
    activeIndex: number;
}, {}>;
export default _default;
