import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { POPPER_CONTENT_INJECTION_KEY } from '@tu-view-plus/components/src/popper'
import Arrow from '../src/arrow.vue'

import type { VueWrapper } from '@vue/test-utils'
import type { PopperArrowInstance } from '../src/arrow'

const popperContentInjection = {
  arrowRef: ref(null),
  arrowOffset: ref(0),
}

const mountArrow = () =>
  mount(<Arrow />, {
    global: {
      provide: {
        [POPPER_CONTENT_INJECTION_KEY as symbol]: popperContentInjection,
      },
    },
  })

describe('<PopperArrow />', () => {
  let wrapper: VueWrapper<PopperArrowInstance>

  beforeEach(() => {
    wrapper = mountArrow()
    return nextTick()
  })

  afterEach(() => {
    wrapper?.unmount()
    popperContentInjection.arrowRef.value = null
    popperContentInjection.arrowOffset.value = 0
  })

  it('should set the arrowRef after mounted', async () => {
    expect(popperContentInjection.arrowRef.value).toBe(wrapper.vm.arrowRef)
    expect(popperContentInjection.arrowOffset.value).toBe(0)
  })

  it('should update the offset after props changed', async () => {
    expect(popperContentInjection.arrowOffset.value).toBe(0)

    await wrapper.setProps({
      arrowOffset: 10,
    })

    expect(popperContentInjection.arrowOffset.value).toBe(10)
  })

  it('should unset arrowRef before unmount', async () => {
    expect(popperContentInjection.arrowRef.value).toBe(wrapper.vm.arrowRef)

    wrapper.unmount()
    expect(popperContentInjection.arrowRef.value).toBeNull()
  })
})
