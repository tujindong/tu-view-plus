import type { ExtractPropTypes } from 'vue';
import type CarouselIndicator from './carousel-indicator.vue';
export declare const carouselIndicatorProps: {
    count: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    activeIndex: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    type: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "never" | "dot" | "line" | "slider") | (() => "never" | "dot" | "line" | "slider") | ((new (...args: any[]) => "never" | "dot" | "line" | "slider") | (() => "never" | "dot" | "line" | "slider"))[], unknown, unknown, string, boolean>;
    position: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer"))[], unknown, unknown, string, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, string, boolean>;
};
export declare const carouselIndicatorEmits: {
    select: (cur: number | undefined, prev: number | undefined) => boolean;
};
export type CarouselIndicatorProps = ExtractPropTypes<typeof carouselIndicatorProps>;
export type CarouselIndicatorInstance = InstanceType<typeof CarouselIndicator>;
