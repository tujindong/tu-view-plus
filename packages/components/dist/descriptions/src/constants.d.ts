import { InjectionKey } from 'vue';
export declare const componentSizes: readonly ["", "default", "small", "large"];
export declare const directionTypes: readonly ["horizontal", "vertical"];
export type ComponentSize = (typeof componentSizes)[number];
export type DirectionTypes = (typeof directionTypes)[number];
export interface IDescriptionsInject {
    border: boolean;
    column: number;
    direction: DirectionTypes;
    size: ComponentSize;
    title: string;
    extra: string;
}
export interface IDescriptionsItemInject {
    label: string;
    span: number;
    width: string | number;
    minWidth: string | number;
    align: string;
    labelAlign: string;
    className: string;
    labelClassName: string;
}
export declare const descriptionsInjectionKey: InjectionKey<IDescriptionsInject>;
