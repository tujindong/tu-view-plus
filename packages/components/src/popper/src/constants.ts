import type { Ref, ComputedRef, InjectionKey, CSSProperties } from 'vue';
import type { Instance } from '@popperjs/core';

export type Measurable = {
  getBoundingClientRect: () => DOMRect;
};

export const effects = ['light', 'dark'] as const;

export const triggers = ['click', 'contextmenu', 'hover', 'focus'] as const;

export const Effect = { LIGHT: 'light', DARK: 'dark' } as const;

export const roleTypes = [
  'dialog',
  'grid',
  'group',
  'listbox',
  'menu',
  'navigation',
  'tooltip',
  'tree'
] as const;

export type PopperEffect = (typeof effects)[number];
export type PopperTrigger = (typeof triggers)[number];

/**
 * @zh
 * triggerRef: 表示触发 popper 的元素
 * contentRef: 表示 popper 内容的元素
 * referenceRef: 表示 popper 内容相关的元素
 * @en
 * triggerRef indicates the element that triggers popper
 * contentRef indicates the element of popper content
 * referenceRef indicates the element that popper content relative with
 */
export type TuPopperInjectionContext = {
  triggerRef: Ref<Measurable | undefined>;
  contentRef: Ref<HTMLElement | undefined>;
  popperInstanceRef: Ref<Instance | undefined>;
  referenceRef: Ref<Measurable | undefined>;
  role: ComputedRef<string>;
};

export type TuPopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>;
  arrowOffset: Ref<number | undefined>;
  arrowStyle: ComputedRef<CSSProperties>;
};

export const POPPER_INJECTION_KEY: InjectionKey<TuPopperInjectionContext> =
  Symbol('popper');

export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<TuPopperContentInjectionContext> =
  Symbol('popperContent');
