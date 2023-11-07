export declare const spaceSize: readonly ["mini", "small", "medium", "large"];
export declare const spaceAlign: readonly ["start", "end", "center", "baseline"];
export declare const spaceDirection: readonly ["vertical", "horizontal"];
export declare const spaceSizeMaps: {
    mini: number;
    small: number;
    medium: number;
    large: number;
};
export type SpaceSize = (typeof spaceSize)[number] | number;
export type SpaceAlign = (typeof spaceAlign)[number];
export type SpaceDirection = (typeof spaceDirection)[number];
