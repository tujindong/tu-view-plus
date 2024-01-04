import { InjectionKey } from 'vue';

export const carouselTriggerEvent = ['click', 'hover'] as const;
export const carouselArrowType = ['always', 'hover', 'never'] as const;
export const carouselIndicatorType = [
  'line',
  'dot',
  'slider',
  'never'
] as const;
export const carouselIndicatorPosition = [
  'bottom',
  'top',
  'left',
  'right',
  'outer'
] as const;

export const carouselAnimationName = ['slide', 'fade', 'card'] as const;
export const slideDirection = ['positive', 'negative'] as const;
export const carouselSlideDirection = ['horizontal', 'vertical'] as const;

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

export const carouselInjectionKey: InjectionKey<CarouselContext> =
  Symbol('TuCarousel');
