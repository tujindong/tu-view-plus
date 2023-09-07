import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, afterEach } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import Popover from '../src/popover.vue'
import type { PopoverProps } from '../src/popover'

const AXIOM = 'Tu view is good'

const _mount = (props?: Partial<PopoverProps>) =>
  mount(
    {
      setup() {
        const slots = {
          default: () => AXIOM,
          reference: () => <button>click me</button>,
        }
        return () => <Popover {...props} v-slots={slots} />
      },
    },
    {
      attachTo: document.body,
    }
  )

describe('Popover', () => {
  let wrapper: VueWrapper<any>
  const findContentComp = () =>
    wrapper.findComponent({
      name: 'TuTrigger',
    })

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  test('render test', () => {
    wrapper = _mount()
    expect(findContentComp().text()).toEqual(AXIOM)
  })
})
