import { CarouselAutoPlayConfig } from './constants';
declare const _default: import("vue").DefineComponent<{
    current: {
        readonly type: import("vue").PropType<number>;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    updateCurrent: (index: number) => boolean;
    change: (index: number, prevIndex: number, isManual: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    current: {
        readonly type: import("vue").PropType<number>;
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
}>> & {
    onChange?: ((index: number, prevIndex: number, isManual: boolean) => any) | undefined;
    onUpdateCurrent?: ((index: number) => any) | undefined;
}, {
    animationName: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "card" | "slide" | "fade") | (() => "card" | "slide" | "fade") | ((new (...args: any[]) => "card" | "slide" | "fade") | (() => "card" | "slide" | "fade"))[], unknown, unknown>;
    direction: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical") | ((new (...args: any[]) => "horizontal" | "vertical") | (() => "horizontal" | "vertical"))[], unknown, unknown>;
    transitionTimingFunction: string;
    trigger: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "click" | "hover") | (() => "click" | "hover") | ((new (...args: any[]) => "click" | "hover") | (() => "click" | "hover"))[], unknown, unknown>;
    arrowClass: string;
    showArrow: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "always" | "never" | "hover") | (() => "always" | "never" | "hover") | ((new (...args: any[]) => "always" | "never" | "hover") | (() => "always" | "never" | "hover"))[], unknown, unknown>;
    moveSpeed: number;
    defaultCurrent: number;
    autoPlay: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => boolean | CarouselAutoPlayConfig) | (() => boolean | CarouselAutoPlayConfig) | ((new (...args: any[]) => boolean | CarouselAutoPlayConfig) | (() => boolean | CarouselAutoPlayConfig))[], unknown, unknown>;
    indicatorType: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "never" | "dot" | "line" | "slider") | (() => "never" | "dot" | "line" | "slider") | ((new (...args: any[]) => "never" | "dot" | "line" | "slider") | (() => "never" | "dot" | "line" | "slider"))[], unknown, unknown>;
    indicatorPosition: import("@tu-view-plus/utils").EpPropMergeType<(new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer") | ((new (...args: any[]) => "bottom" | "left" | "right" | "top" | "outer") | (() => "bottom" | "left" | "right" | "top" | "outer"))[], unknown, unknown>;
    indicatorClass: string;
}, {}>;
export default _default;
