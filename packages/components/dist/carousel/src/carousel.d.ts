import type { ExtractPropTypes, PropType } from 'vue';
import type Carousel from './carousel.vue';
import { CarouselAutoPlayConfig } from './constants';
export declare const carouselProps: {
    current: {
        readonly type: PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    defaultCurrent: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    autoPlay: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => boolean | CarouselAutoPlayConfig) | (() => boolean | CarouselAutoPlayConfig) | ((new (...args: any[]) => boolean | CarouselAutoPlayConfig) | (() => boolean | CarouselAutoPlayConfig))[], unknown, unknown, boolean, boolean>;
    moveSpeed: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    animationName: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "card" | "slide" | "fade") | (() => "card" | "slide" | "fade") | ((new (...args: any[]) => "card" | "slide" | "fade") | (() => "card" | "slide" | "fade"))[], unknown, unknown, string, boolean>;
    trigger: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown, string, boolean>;
    direction: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown, string, boolean>;
    showArrow: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "always" | "never" | "hover") | (() => "always" | "never" | "hover") | ((new (...args: any[]) => "always" | "never" | "hover") | (() => "always" | "never" | "hover"))[], unknown, unknown, string, boolean>;
    arrowClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    indicatorType: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "never" | "dot" | "line" | "slider") | (() => "never" | "dot" | "line" | "slider") | ((new (...args: any[]) => "never" | "dot" | "line" | "slider") | (() => "never" | "dot" | "line" | "slider"))[], unknown, unknown, string, boolean>;
    indicatorPosition: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer"))[], unknown, unknown, string, boolean>;
    indicatorClass: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    transitionTimingFunction: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
};
export declare const carouselEmits: {
    updateCurrent: (index: number) => boolean;
    change: (index: number, prevIndex: number, isManual: boolean) => boolean;
};
export type CarouselProps = ExtractPropTypes<typeof carouselProps>;
export type CarouselInstance = InstanceType<typeof Carousel>;
