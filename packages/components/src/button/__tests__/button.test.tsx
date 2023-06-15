import { markRaw, ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, it } from 'vitest'
import { Loading, Search } from '@tu-view-plus/icons-vue'
import { Size } from '@tu-view-plus/constants';
import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'

const AXIOM = 'Tu view is good'

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type='primary'></Button>)
    expect(wrapper.classes()).toContain('tu-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(() => <Button icon={markRaw(Search)} />)
    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('nativeType', () => {
    const wrapper = mount(() => <Button nativeType="submit" />)
    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('loading', () => {
    const wrapper = mount(() => <Button loading />)
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
  })

  it('size', () => {
    const wrapper = mount(() => <Button size="large" />)
    expect(wrapper.classes()).toContain('tu-button--large')
  })

  it('round', () => {
    const wrapper = mount(() => <Button round />)
    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount(() => <Button circle />)
    expect(wrapper.classes()).toContain('is-circle')
  })

  test('render text', () => {
    const wrapper = mount(() => (<Button>{AXIOM}</Button>))
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const wrapper = mount(() => (<Button>{AXIOM}</Button>))
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('handle click inside', async () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => <span class="inner-slot"></span>,
        }}
      />
    ))
    wrapper.find('.inner-slot').trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const wrapper = mount(() => (<Button loading>{AXIOM}</Button>))
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount(() => <Button disabled />)
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('loading icon', () => {
    const wrapper = mount(() => (
      <Button loadingIcon={markRaw(Search)} loading />
    ))
    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('loading slot', () => {
    const wrapper = mount({
      setup: () => () =>
      (
        <Button
          v-slots={{ loading: () => <span class="custom-loading">111</span> }}
          loading={true}
        >
          Loading
        </Button>
      ),
    })
    expect(wrapper.find('.custom-loading').exists()).toBeTruthy()
  })
})

describe('Button Group', () => {
  it('create', () => {
    const wrapper = mount({
      setup: () => () =>
      (
        <ButtonGroup>
          <Button type="primary">Prev</Button>
          <Button type="primary">Next</Button>
        </ButtonGroup>
      ),
    })
    expect(wrapper.classes()).toContain('tu-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('button group reactive size', async () => {
    const size = ref<Size>('small')
    const wrapper = mount({
      setup: () => () =>
      (
        <ButtonGroup size={size.value}>
          <Button type="primary">Prev</Button>
          <Button type="primary">Next</Button>
        </ButtonGroup>
      ),
    })
    expect(wrapper.classes()).toContain('tu-button-group')
    expect(
      wrapper.findAll('.tu-button-group button.tu-button--small').length
    ).toBe(2)
    size.value = 'large'
    await nextTick()
    expect(
      wrapper.findAll('.tu-button-group button.tu-button--large').length
    ).toBe(2)
  })

  it('button group type', async () => {
    const wrapper = mount({
      setup: () => () =>
      (
        <ButtonGroup type="primary">
          <Button>Prev</Button>
          <Button>Next</Button>
        </ButtonGroup>
      ),
    })
    expect(wrapper.classes()).toContain('tu-button-group')
    expect(
      wrapper.findAll('.tu-button-group button.tu-button--primary').length
    ).toBe(2)
  })
})


