import { InjectionKey } from 'vue';

export const componentSizes = ['', 'default', 'small', 'large'] as const;
export const directionTypes = ['horizontal', 'vertical'] as const;

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

export const descriptionsInjectionKey: InjectionKey<IDescriptionsInject> =
  Symbol('TuDescriptions');
