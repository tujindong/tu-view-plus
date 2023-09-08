import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, afterEach } from 'vitest'
import Popconfirm from '../src/popconfirm.vue'

import type { VueWrapper } from '@vue/test-utils'
import type { PopconfirmProps } from '../src/popconfirm'

const AXIOM = 'Tu view is good'

const _mount = (props?: Partial<PopconfirmProps>) =>
  mount(
    {
      setup() {
        const slots = {
          default: () => AXIOM,
          reference: () => <button>click me</button>,
        }
        return () => <Popconfirm {...props} v-slots={slots} />
      },
    },
    {
      attachTo: document.body,
    }
  )

describe('Popconfirm', () => {
  let wrapper: VueWrapper<any>
  const findContentComp = () =>
    wrapper.findComponent({ name: 'TuTrigger' })

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  test('render test', () => {
    wrapper = _mount()
    expect(findContentComp().text()).toEqual(AXIOM)
  })
})

