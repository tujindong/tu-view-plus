import { defineComponent, ref, nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { useLocale } from '@tu-view-plus/hooks'
import { describe, beforeEach, afterEach, expect, test, it } from 'vitest'
import Chinese from '@tu-view-plus/locale/lang/zh-cn'
import English from '@tu-view-plus/locale/lang/en'
import ConfigProvider from '../src/config-provider'
import { TuButton, TuMessage } from '@tu-view-plus/components'

import type { VueWrapper } from '@vue/test-utils'
import type { Language } from '@tu-view-plus/locale'
import type { ConfigProviderProps } from '../src/config-provider-props'

const TestComp = defineComponent({
  setup() {
    const { t } = useLocale()
    return () => <div>{t('tu.popconfirm.confirmButtonText')}</div>
  },
})

describe('ConfigProvider', () => {
  describe('locale-provider', () => {
    let wrapper: VueWrapper<any>

    beforeEach(() => {
      const currentLocale = ref<Language>(English)
      const oppositeLocale = ref<Language>(Chinese)
      const toEn = () => {
        currentLocale.value = English
        oppositeLocale.value = Chinese
      }
      const toZh = () => {
        currentLocale.value = Chinese
        oppositeLocale.value = English
      }

      wrapper = mount(() => (
        <>
          <ConfigProvider locale={currentLocale.value}>
            <TestComp class="current-locale" />
            <ConfigProvider locale={oppositeLocale.value}>
              <TestComp class="opposite-locale" />
            </ConfigProvider>
          </ConfigProvider>

          <button onClick={toEn} class="to-en">
            toEn
          </button>
          <button onClick={toZh} class="to-zh">
            toZh
          </button>
        </>
      ))
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should provide locale properly', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.tu.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.tu.popconfirm.confirmButtonText
      )
    })

    it('should reactively update the text on page', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.tu.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.tu.popconfirm.confirmButtonText
      )

      await wrapper.find('.to-zh').trigger('click')

      expect(wrapper.find('.current-locale').text()).toBe(
        Chinese.tu.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        English.tu.popconfirm.confirmButtonText
      )
    })
  })

  describe('namespace-config', () => {
    it('reactive namespace', async () => {
      const wrapper = mount(() => (
        <ConfigProvider namespace={'nb'}>
          <TuButton>Test</TuButton>
        </ConfigProvider>
      ))

      expect(wrapper.find('button').classes()).toContain('nb-button')
    })
  })

  // TODO ..
  // describe('message-config', () => {
  //   afterEach(() => {
  //     TuMessage.closeAll()
  //   })

  //   it('limit the number of messages displayed at the same time', async () => {
  //     const config = reactive({
  //       max: 3,
  //     })
  //     const open = () => {
  //       TuMessage('this is a message.')
  //     }

  //     const wrapper = mount(() => (
  //       <ConfigProvider message={config}>
  //         <TuMessage onClick={open}>open</TuMessage>
  //       </ConfigProvider>
  //     ))

  //     await nextTick()
  //     wrapper.find('.tu-button').trigger('click')
  //     wrapper.find('.tu-button').trigger('click')
  //     wrapper.find('.tu-button').trigger('click')
  //     wrapper.find('.tu-button').trigger('click')
  //     await nextTick()
  //     expect(document.querySelectorAll('.el-message').length).toBe(3)

  //     config.max = 10
  //     await nextTick()
  //     wrapper.find('.tu-button').trigger('click')
  //     wrapper.find('.tu-button').trigger('click')
  //     wrapper.find('.tu-button').trigger('click')
  //     wrapper.find('.tu-button').trigger('click')
  //     await nextTick()
  //     expect(document.querySelectorAll('.el-message').length).toBe(7)
  //   })
  // })
})
