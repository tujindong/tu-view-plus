import type { ExtractPropTypes } from 'vue';
export declare const carouselIndicatorProps: {
    count: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    activeIndex: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider") | ((new (...args: any[]) => "line" | "never" | "dot" | "slider") | (() => "line" | "never" | "dot" | "slider"))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer"))[], unknown, unknown, string, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, string, boolean>;
};
export declare const carouselIndicatorEmits: {
    select: (cur: number | undefined, prev: number | undefined) => boolean;
};
export type CarouselIndicatorProps = ExtractPropTypes<typeof carouselIndicatorProps>;
