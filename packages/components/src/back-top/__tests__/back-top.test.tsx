import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Top } from '@tu-view-plus/icons-vue'
import BackTop from '../src/back-top.vue'

import type { VNode } from 'vue'

const _mount = (render: () => VNode) =>
  mount(render, { attachTo: document.body })

describe('BackTop', () => {
  test('render', async () => {
    const wrapper = _mount(() => (
      <div class="target" style="height: 100px; overflow: auto">
        <div style="height: 10000px; width: 100%">
          <BackTop
            target=".target"
            visibleHeight={2000}
            right={100}
            bottom={200}
          />
        </div>
      </div>
    ))
    await nextTick()

    expect(wrapper.find('.tu-back-top').exists()).toBe(false)
    wrapper.element.scrollTop = 3000
    await wrapper.trigger('scroll')
    expect(wrapper.find('.tu-back-top').exists()).toBe(true)

    expect(wrapper.find('.tu-back-top').attributes('style')).toBe(
      'right: 100px; bottom: 200px;'
    )
    expect(wrapper.findComponent(Top).exists()).toBe(true)

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('render when visibilityHeight is zero', async () => {
    const wrapper = _mount(() => (
      <BackTop visibleHeight={0} right={100} bottom={200} />
    ))
    await nextTick()

    expect(wrapper.find('.tu-back-top').exists()).toBe(true)
  })
})
