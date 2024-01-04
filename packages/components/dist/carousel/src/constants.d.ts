import { InjectionKey } from 'vue';
export declare const carouselTriggerEvent: readonly ["click", "hover"];
export declare const carouselArrowType: readonly ["always", "hover", "never"];
export declare const carouselIndicatorType: readonly ["line", "dot", "slider", "never"];
export declare const carouselIndicatorPosition: readonly ["bottom", "top", "left", "right", "outer"];
export declare const carouselAnimationName: readonly ["slide", "fade", "card"];
export declare const slideDirection: readonly ["positive", "negative"];
export declare const carouselSlideDirection: readonly ["horizontal", "vertical"];
export type CarouselTriggerEvent = (typeof carouselTriggerEvent)[number];
export type CarouselArrowType = (typeof carouselArrowType)[number];
export type CarouselIndicatorType = (typeof carouselIndicatorType)[number];
export type CarouselIndicatorPosition = (typeof carouselIndicatorPosition)[number];
export type CarouselAnimationName = (typeof carouselAnimationName)[number];
export type SlideDirection = (typeof slideDirection)[number];
export type CarouselSlideDirection = (typeof carouselSlideDirection)[number];
export type CarouselAutoPlayConfig = {
    interval?: number;
    hoverToPause?: boolean;
};
export interface CarouselContext {
    items: number[];
    slideTo: (info: {
        targetIndex: number;
        isNegative: boolean;
        isManual: boolean;
    }) => void;
    mergedIndexes: {
        mergedIndex: number;
        mergedPrevIndex: number;
        mergedNextIndex: number;
    };
    previousIndex: number | undefined;
    animationName: string;
    slideDirection: string | undefined;
    transitionTimingFunction: string;
    moveSpeed: number;
}
export declare const carouselInjectionKey: InjectionKey<CarouselContext>;
