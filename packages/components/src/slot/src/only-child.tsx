import {
  Comment,
  Fragment,
  Text,
  cloneVNode,
  defineComponent,
  inject,
  withDirectives,
} from 'vue'
import { NOOP, isObject } from '@vue/shared'
import { FORWARD_REF_INJECTION_KEY, useForwardRefDirective, useNamespace } from '@tu-view-plus/hooks'
import { debugWarn } from '@tu-view-plus/utils'

import type { Ref, VNode } from 'vue'

const NAME = "TuOnlyChild"

export default defineComponent({
  name: NAME,

  setup(_, { slots, attrs }) {
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY, undefined)
    const forwardRefDirective = useForwardRefDirective(
      forwardRefInjection?.setForwardRef ?? NOOP
    )
    return () => {
      const defaultSlot = slots.default?.(attrs)

      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        debugWarn(NAME, 'requires exact only one valid child.')
        return null
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot)

      if (!firstLegitNode) {
        debugWarn(NAME, 'no valid child node found')
        return null
      }

      return withDirectives(cloneVNode(firstLegitNode!, attrs), [[forwardRefDirective]])
    }
  },
})

function findFirstLegitChild(node: VNode[] | undefined): VNode | null {
  if (!node) return null
  const children = node as VNode[]
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue
        case Text:
        case 'svg':
          return wrapTextContent(child)
        case Fragment:
          return findFirstLegitChild(child.children as VNode[])
        default:
          return child
      }
    }
    return wrapTextContent(child)
  }
  return null
}

function wrapTextContent(s: string | VNode) {
  const ns = useNamespace('only-child')
  return <span class={ns.e('content')}>{s}</span>
}

export type OnlyChildExpose = {
  forwardRef: Ref<HTMLElement>
}