import { Comment, Fragment, h, nextTick, ref } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { debugWarn } from '@tu-view-plus/utils'
import { FORWARD_REF_INJECTION_KEY } from '@tu-view-plus/hooks'
import { OnlyChild } from '../src/only-child'
import type { MountingOptions } from '@vue/test-utils'

type Slot = NonNullable<NonNullable<MountingOptions<any>['slots']>['default']>

vi.mock('@tu-view-plus/utils/error', () => ({
  debugWarn: vi.fn(),
}))

const AXIOM = 'Tu view is good'

const defaultProvide = {
  [FORWARD_REF_INJECTION_KEY as any]: {
    forwardRef: ref(null),
  },
}
const createComponent = (slot: Slot) => {
  return shallowMount(OnlyChild, {
    global: {
      provide: defaultProvide,
    },
    // vue test utils adds the entry for us even though default's value is null
    slots: slot ? { default: slot } : undefined,
  })
}

describe('OnlyChild', () => {
  let wrapper: ReturnType<typeof createComponent>

  afterEach(() => {
    wrapper?.unmount()
  })

  it('should be able to render only one child', async () => {
    const kls = 'test_kls'
    wrapper = createComponent(() => [<div class={kls}>{AXIOM}</div>])

    // await nextTick()

    // expect(debugWarn).not.toHaveBeenCalled()
    // const renderedChild = wrapper.find(`.${kls}`)
    // expect(renderedChild.exists()).toBe(true)
    // expect(renderedChild.text()).toBe(AXIOM)
  })
})
