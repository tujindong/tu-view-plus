import { defineComponent, inject, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Popper from '../src/popper.vue'
import { POPPER_INJECTION_KEY } from '@tu-view-plus/components/src/popper'


const AXIOM = 'Tu view is good'

const TestChild = defineComponent({
  setup() {
    const { contentRef } = inject(POPPER_INJECTION_KEY, undefined)!
    return () => <div ref={contentRef}>{AXIOM}</div>
  }
})

describe('Popper', () => {
  it('should be able to provide instance to its children', async () => {
    const wrapper = mount(
      //@ts-ignore
      <Popper>
        <TestChild />
      </Popper>
    )

    await nextTick()

    //@ts-ignore
    expect(wrapper.vm.contentRef).not.toBe(null)
    //@ts-ignore
    expect(wrapper.vm.contentRef!.innerHTML).toBe(AXIOM)
  })
})
