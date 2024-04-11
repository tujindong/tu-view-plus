import { Dayjs } from 'dayjs';
import { HeaderIcons, Mode } from '../interface';
import type { ExtractPropTypes, PropType } from 'vue';
type ClickCallbackFunc = (payload: MouseEvent) => void;
export type HeaderLabelClickFunc = (label: 'year' | 'month') => void;
export declare const headerProps: {
    readonly title: {
        readonly type: PropType<string>;
        readonly required: true;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly mode: import("@tu-view-plus/utils").EpPropFinalized<(new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => Mode) | ((new (...args: any[]) => "month" | "year" | "date" | "week" | "quarter") | (() => Mode))[], unknown, unknown, "date", boolean>;
    readonly value: {
        readonly type: PropType<Dayjs>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly icons: {
        readonly type: PropType<HeaderIcons>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onPrev: {
        readonly type: PropType<ClickCallbackFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSuperPrev: {
        readonly type: PropType<ClickCallbackFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onNext: {
        readonly type: PropType<ClickCallbackFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onSuperNext: {
        readonly type: PropType<ClickCallbackFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly onLabelClick: {
        readonly type: PropType<HeaderLabelClickFunc>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
};
export type HeaderProps = ExtractPropTypes<typeof headerProps>;
export {};
