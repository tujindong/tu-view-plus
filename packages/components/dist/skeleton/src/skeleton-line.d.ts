import type { ExtractPropTypes } from 'vue';
export declare const skeletonLineProps: {
    readonly rows: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 1, boolean>;
    readonly widths: import("@tu-view-plus/utils").EpPropFinalized<{
        (arrayLength: number): (string | number)[];
        (...items: (string | number)[]): (string | number)[];
        new (arrayLength: number): (string | number)[];
        new (...items: (string | number)[]): (string | number)[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    }, unknown, unknown, readonly [], boolean>;
    readonly lineHeight: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
    readonly lineSpacing: import("@tu-view-plus/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 15, boolean>;
};
export type SkeletonLineProps = ExtractPropTypes<typeof skeletonLineProps>;
