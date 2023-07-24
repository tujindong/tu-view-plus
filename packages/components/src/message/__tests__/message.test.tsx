import { h, nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import makeMount from '@tu-view-plus/test-utils/make-mount'
import { rAF } from '@tu-view-plus/test-utils/tick'
import { EVENT_CODE } from '@tu-view-plus/constants'
import Message from '../src/message.vue'

import type { CSSProperties, Component, ComponentPublicInstance } from 'vue'

const AXIOM = 'Tu view is good'

type MessageInstance = ComponentPublicInstance<{
  visible: boolean
  iconComponent: string | Component
  customStyle: CSSProperties
}>

const onClose = vi.fn()

const Mount = makeMount(Message, {
  props: {
    onClose,
  },
})

describe('Message', () => {

  describe('render', () => {

    test('basic render test', () => {
      const wrapper = Mount({
        slots: {
          default: AXIOM
        }
      })
      const vm = wrapper.vm as MessageInstance

      expect(wrapper.text()).toEqual(AXIOM)
      expect(vm.visible).toBe(true)
      expect(vm.iconComponent).toBe(undefined)
      expect(vm.customStyle).toEqual({ top: '16px', zIndex: 2001 })
    })

    test('should be able to render VNode', () => {
      const wrapper = Mount({
        slots: {
          default: h('span', { class: 'text-node' }, AXIOM),
        },
      })

      expect(wrapper.find('.text-node').exists()).toBe(true)
    })

    test('should be able to render raw HTML with dangerouslyUseHTMLString prop', () => {
      const tagClass = 'test-class'
      const wrapper = Mount({
        props: {
          dangerouslyUseHTMLString: true,
          message: `<string class="${tagClass}"'>${AXIOM}</strong>`,
        },
      })

      expect(wrapper.find(`.${tagClass}`).exists()).toBe(true)
    })

    test('should not be able to render raw HTML without dangerouslyUseHTMLString prop', () => {
      const tagClass = 'test-class'
      const wrapper = Mount({
        props: {
          dangerouslyUseHTMLString: false,
          message: `<string class="${tagClass}"'>${AXIOM}</strong>`,
        },
      })

      expect(wrapper.find(`.${tagClass}`).exists()).toBe(false)
    })
  })

  describe('Message.type', () => {

    test('should be able to render typed messages', () => {
      for (const type of ['success', 'info', 'warning', 'error'] as const) {
        const wrapper = Mount({ props: { type } })
        expect(wrapper.classes()).toContain(`tu-message--${type}`)
      }
    })
  })

  describe('event handlers', () => {
    test('it should be able to close the message by clicking close button', async () => {
      const onClose = vi.fn()
      const wrapper = Mount({
        slots: { default: AXIOM },
        props: {
          onClose,
          showClose: true,
        },
      })

      const closeBtn = wrapper.find('.tu-message__icon--close')
      expect(closeBtn.exists()).toBe(true)
      await closeBtn.trigger('click')
      expect((wrapper.vm as MessageInstance).visible).toBe(false)
    })

    test('it should close after duration', async () => {
      vi.useFakeTimers()
      const duration = 1000
      const wrapper = Mount({ props: { duration } })
      const vm = wrapper.vm as MessageInstance
      await nextTick()
      expect(vm.visible).toBe(true)
      vi.runAllTimers()
      await nextTick()
      expect(vm.visible).toBe(false)
      vi.useRealTimers()
    })

    test('it should prevent close when hovered', async () => {
      vi.useFakeTimers()
      const duration = 1000
      const wrapper = Mount({ props: { duration } })
      const vm = wrapper.vm as MessageInstance
      vi.advanceTimersByTime(50)
      expect(vm.visible).toBe(true)
      await wrapper.find('[role="alert"]').trigger('mouseenter')
      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      await wrapper.find('[role="alert"]').trigger('mouseleave')
      expect(vm.visible).toBe(true)
      vi.runAllTimers()
      expect(vm.visible).toBe(false)
      vi.useRealTimers()
    })

    test('it should not close when duration is set to 0', () => {
      vi.useFakeTimers()
      const duration = 0
      const wrapper = Mount({ props: { duration } })
      const vm = wrapper.vm as MessageInstance
      expect(vm.visible).toBe(true)
      vi.runAllTimers()
      expect(vm.visible).toBe(true)
      vi.useRealTimers()
    })

    test('it should close when esc is pressed', async () => {
      const wrapper = Mount({ slots: { default: AXIOM } })

      const event = new KeyboardEvent('keydown', {
        code: EVENT_CODE.esc,
      })
      document.dispatchEvent(event)

      expect((wrapper.vm as MessageInstance).visible).toBe(false)
    })

    test('it should call close after transition ends', async () => {
      const onClose = vi.fn()
      const wrapper = Mount({
        slots: { default: AXIOM },
        props: { onClose },
      })
      await rAF()
      const vm = wrapper.vm as MessageInstance
      vm.visible = false
      await rAF()

      expect(onClose).toHaveBeenCalledTimes(1)
    })
  })
})
