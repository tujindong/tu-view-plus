import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, it } from 'vitest'
import { Loading, Search } from '@tu-view-plus/icons-vue'
import Button from '../src/button.vue'

const AXIOM = 'Tu view is good'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type='primary'></Button>)
    expect(wrapper.classes()).toContain('tu-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(() => <Button icon={markRaw(Search)} />)
    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })
})


