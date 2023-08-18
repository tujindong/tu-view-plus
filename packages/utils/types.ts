import { Component, VNode, VNodeTypes } from 'vue';
import { isArray, isObject, isString } from '@vue/shared';
// @ts-ignore
import { isNil } from 'lodash-unified';

export {
  isArray,
  isFunction,
  isObject,
  isString,
  isDate,
  isPromise,
  isSymbol
} from '@vue/shared';
export { isVNode } from 'vue';

export enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9
}

export type Data = Record<string, any>;

export type ClassName =
  | string
  | Record<string, boolean>
  | (string | Record<string, boolean>)[];

export type FieldString<T> = {
  [K in keyof T]?: string;
};

export const isUndefined = (val: any): val is undefined => val === undefined;

export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

export const isNumber = (val: any): val is number => typeof val === 'number';

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) ||
  (isArray(val) && val.length === 0) ||
  (isObject(val) && !Object.keys(val).length);

export const isPropAbsent = (prop: unknown): prop is null | undefined => {
  return isNil(prop);
};

export const isStringNumber = (val: string): boolean => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

export const isHTMLElement = (e: unknown): e is Element => {
  if (typeof Element === 'undefined') return false;
  return e instanceof Element;
};

export const isElement = (vn: VNode) => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ELEMENT);
};

export const isComponent = (
  vn: VNode,
  type?: VNodeTypes
): type is Component => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.COMPONENT);
};

export const isArrayChildren = (
  vn: VNode,
  children: VNode['children']
): children is VNode[] => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ARRAY_CHILDREN);
};
