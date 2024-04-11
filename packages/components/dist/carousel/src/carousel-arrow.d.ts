import type { ExtractPropTypes } from 'vue';
export declare const carouselArrowProps: {
    direction: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
    showArrow: import("@tu-view-plus/utils").EpPropFinalized<StringConstructor, unknown, unknown, string, boolean>;
};
export declare const carouselArrowEmits: {
    previousClick: (evt: MouseEvent) => boolean;
    nextClick: (evt: MouseEvent) => boolean;
};
export type CarouselArrowProps = ExtractPropTypes<typeof carouselArrowProps>;
