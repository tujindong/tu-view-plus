import {
  Comment,
  Fragment,
  Text,
  createBlock,
  createCommentVNode,
  isVNode,
  openBlock
} from 'vue';
import { camelize, isArray } from '@vue/shared';
import { hasOwn } from '../objects';
import { debugWarn } from '../error';
import {
  isComponent,
  isArrayChildren,
  isElement,
  isTextChildren,
  isSlotsChildren
} from '../types';
import type {
  VNode,
  VNodeArrayChildren,
  VNodeChild,
  VNodeNormalizedChildren
} from 'vue';

const SCOPE = 'utils/vue/vnode';

export enum PatchFlags {
  TEXT = 1,
  CLASS = 2,
  STYLE = 4,
  PROPS = 8,
  FULL_PROPS = 16,
  HYDRATE_EVENTS = 32,
  STABLE_FRAGMENT = 64,
  KEYED_FRAGMENT = 128,
  UNKEYED_FRAGMENT = 256,
  NEED_PATCH = 512,
  DYNAMIC_SLOTS = 1024,
  HOISTED = -1,
  BAIL = -2
}

export type VNodeChildAtom = Exclude<VNodeChild, Array<any>>;
export type RawSlots = Exclude<
  VNodeNormalizedChildren,
  Array<any> | null | string
>;

export function isFragment(node: VNode): boolean;
export function isFragment(node: unknown): node is VNode;
export function isFragment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Fragment;
}

export function isText(node: VNode): boolean;
export function isText(node: unknown): node is VNode;
export function isText(node: unknown): node is VNode {
  return isVNode(node) && node.type === Text;
}

export function isComment(node: VNode): boolean;
export function isComment(node: unknown): node is VNode;
export function isComment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Comment;
}

const TEMPLATE = 'template';
export function isTemplate(node: VNode): boolean;
export function isTemplate(node: unknown): node is VNode;
export function isTemplate(node: unknown): node is VNode {
  return isVNode(node) && node.type === TEMPLATE;
}

/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export function isValidElementNode(node: VNode): boolean;
export function isValidElementNode(node: unknown): node is VNode;
export function isValidElementNode(node: unknown): node is VNode {
  return isVNode(node) && !isFragment(node) && !isComment(node);
}

/**
 * get a valid child node (not fragment nor comment)
 * @param node {VNode} node to be searched
 * @param depth {number} depth to be searched
 */
function getChildren(
  node: VNodeNormalizedChildren | VNodeChild,
  depth: number
): VNodeNormalizedChildren | VNodeChild {
  if (isComment(node)) return;
  if (isFragment(node) || isTemplate(node)) {
    return depth > 0 ? getFirstValidNode(node.children, depth - 1) : undefined;
  }
  return node;
}

export const getFirstValidNode = (
  nodes: VNodeNormalizedChildren,
  maxDepth = 3
) => {
  if (Array.isArray(nodes)) {
    return getChildren(nodes[0], maxDepth);
  } else {
    return getChildren(nodes, maxDepth);
  }
};

export function renderIf(
  condition: boolean,
  ...args: Parameters<typeof createBlock>
) {
  return condition ? renderBlock(...args) : createCommentVNode('v-if', true);
}

export function renderBlock(...args: Parameters<typeof createBlock>) {
  return openBlock(), createBlock(...args);
}

export const getNormalizedProps = (node: VNode) => {
  if (!isVNode(node)) {
    debugWarn(SCOPE, '[getNormalizedProps] must be a VNode');
    return {};
  }

  const raw = node.props || {};
  const type = (isVNode(node.type) ? node.type.props : undefined) || {};
  const props: Record<string, any> = {};

  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], 'default')) {
      props[key] = type[key].default;
    }
  });

  Object.keys(raw).forEach((key) => {
    props[camelize(key)] = raw[key];
  });

  return props;
};

export const ensureOnlyChild = (children: VNodeArrayChildren | undefined) => {
  if (!isArray(children) || children.length > 1) {
    throw new Error('expect to receive a single Vue element child');
  }
  return children[0];
};

export type FlattenVNodes = Array<VNodeChildAtom | RawSlots>;

export const flattedChildren = (
  children: FlattenVNodes | VNode | VNodeNormalizedChildren
): FlattenVNodes => {
  const vNodes = isArray(children) ? children : [children];
  const result: FlattenVNodes = [];

  vNodes.forEach((child) => {
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else {
      result.push(child);
      if (isVNode(child) && child.component?.subTree) {
        result.push(...flattedChildren(child.component.subTree));
      }
    }
  });
  return result;
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

export const getComponentsFromVNode = (vn: VNode, name: string) => {
  const components: number[] = [];

  if (isComponent(vn, vn.type)) {
    if (vn.type.name === name) {
      if (vn.component) {
        components.push(vn.component.uid);
      }
    } else if (vn.component?.subTree) {
      components.push(...getComponentsFromVNode(vn.component.subTree, name));
    }
  } else {
    const children = getChildrenArray(vn);
    if (children) {
      components.push(...getComponentsFromChildren(children, name));
    }
  }

  return components;
};

export const getComponentsFromChildren = (
  children: VNode[] | undefined,
  name: string
) => {
  const components: number[] = [];

  if (children && children.length > 0) {
    for (const child of children) {
      components.push(...getComponentsFromVNode(child, name));
    }
  }

  return components;
};

export const getAllElements = (
  children: VNode[] | undefined,
  includeText = false
) => {
  const results: VNode[] = [];
  for (const item of children ?? []) {
    if (
      isElement(item) ||
      isComponent(item) ||
      (includeText && isTextChildren(item, item.children))
    ) {
      results.push(item);
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText));
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements(item.children.default?.(), includeText));
    } else if (isArray(item)) {
      results.push(...getAllElements(item, includeText));
    }
  }
  return results;
};
