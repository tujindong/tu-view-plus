import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Space from '../src/space.vue'

const AXIOM = 'Tu view is good'

describe('Space', () => {
  test('render test', () => {
    const wrapper = mount(() => <Space>{AXIOM}</Space>)

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('size', () => {
    const sizes = ['mini', 'small', 'medium', 'large']
    sizes.forEach(size => {
      const wrapper = mount(Space, {
        props: { size },
        slots: {
          default: [`<div>${AXIOM}</div>`, `<div>${AXIOM}</div>`]
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
