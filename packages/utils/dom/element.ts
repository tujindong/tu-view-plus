import { VNode, cloneVNode, Slots } from 'vue';
import { isArray, isFunction, isString } from '@vue/shared';
import { Data, isElement, isComponent, isArrayChildren } from '../types';
import { ShapeFlags } from '../types';

export interface SlotChildren {
  value?: VNode[];
}

export const NOOP = () => {
  return undefined;
};

export const isServerRendering = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined);
  } catch (e) {
    return true;
  }
})();

export const on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return <K extends keyof HTMLElementEventMap>(
    element: HTMLElement | Window,
    event: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
    options: boolean | AddEventListenerOptions = false
  ) => {
    element.addEventListener(
      event,
      handler as EventListenerOrEventListenerObject,
      options
    );
  };
})();

export const off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return <K extends keyof HTMLElementEventMap>(
    element: HTMLElement | Window,
    type: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
    options: boolean | EventListenerOptions = false
  ) => {
    element.removeEventListener(
      type,
      handler as EventListenerOrEventListenerObject,
      options
    );
  };
})();

export const querySelector = (
  selectors: string,
  container?: Document | HTMLElement
) => {
  if (isServerRendering) {
    return NOOP();
  }
  return (
    (container ?? document).querySelector<HTMLElement>(selectors) ?? undefined
  );
};

export const getElement = (
  target: string | HTMLElement | undefined,
  container?: Document | HTMLElement
): HTMLElement | undefined => {
  if (isString(target)) {
    const selector = target[0] === '#' ? `[id='${target.slice(1)}']` : target;
    return querySelector(selector, container);
  }
  return target;
};

export const getFirstElementFromChildren = (
  children: VNode[] | undefined
): HTMLElement | undefined => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element) return element;
    }
  }
  return undefined;
};

export const getFirstElementFromVNode = (
  vn: VNode
): HTMLElement | undefined => {
  if (isElement(vn)) {
    return vn.el as HTMLElement;
  }
  if (isComponent(vn)) {
    if ((vn.el as Node)?.nodeType === 1) {
      return vn.el as HTMLElement;
    }
    if (vn.component?.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele) return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return undefined;
};

export const getChildrenArray = (vn: VNode): VNode[] | undefined => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (isArray(vn)) {
    return vn;
  }
  return undefined;
};

export const mergeFirstChild = (
  children: VNode[] | undefined,
  extraProps: Data | ((vn: VNode) => Data)
): boolean => {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isElement(child) || isComponent(child)) {
        const props = isFunction(extraProps) ? extraProps(child) : extraProps;
        children[i] = cloneVNode(child, props, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result) return true;
      }
    }
  }
  return false;
};

export const isEmptyChildren = (children?: VNode[]) => {
  if (!children) {
    return true;
  }

  for (const item of children) {
    if (item.children) {
      return false;
    }
  }

  return true;
};

export const isSlotsChildren = (
  vn: VNode,
  children: VNode['children']
): children is Slots => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.SLOTS_CHILDREN);
};

export const getFirstComponent = (
  children: VNode[] | undefined
): VNode | undefined => {
  if (!children) {
    return undefined;
  }

  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child;
    }
    // If the current node is not a component, continue to find subcomponents
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children);
      if (result) return result;
    } else if (isSlotsChildren(child, child.children)) {
      const children = child.children.default?.();
      if (children) {
        const result = getFirstComponent(children);
        if (result) return result;
      }
    } else if (isArray(child)) {
      const result = getFirstComponent(child);
      if (result) return result;
    }
  }

  return undefined;
};
