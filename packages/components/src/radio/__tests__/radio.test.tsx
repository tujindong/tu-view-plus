import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Radio from '../src/radio.vue'
import RadioGroup from '../src/radio-group.vue'

describe('Radio', () => {
  test('create', async () => {
    const radio = ref('')
    const wrapper = mount(() => <Radio v-model={radio.value} label="a" />)
    // expect(wrapper.classes()).toContain('tu-radio')
    console.log('wrapper before', wrapper.classes(), 'test', wrapper.attributes('test'), 'text', wrapper.text())
    await wrapper.trigger('click')
    console.log('wrapper after', wrapper.classes(), 'test', wrapper.attributes('test'))
    // expect(wrapper.classes()).toContain('is-checked')
  })
})

