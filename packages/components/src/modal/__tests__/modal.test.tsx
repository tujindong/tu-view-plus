import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Modal from '../index'
import ModalComponent from '../src/modal.vue'

const AXIOM = 'Tu view is good'

describe('Modal', () => {
  test('should render modal and emit ok/cancel event', async () => {
    const wrapper = mount(ModalComponent, {
      props: {
        defaultVisible: true,
        renderToBody: false,
      },
      slots: {
        default: `<div>${AXIOM}</div>`,
        title: 'Title',
      },
    });

    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    const buttons = wrapper.findAll('button');
    await buttons[0].trigger('click');
    expect(wrapper.emitted('cancel')).toHaveLength(1);
    await buttons[1].trigger('click');
    expect(wrapper.emitted('ok')).toHaveLength(1);
  });

  test('should show modal and call cb', async () => {
    const onOk = vi.fn()
    const onCancel = vi.fn()

    const wrapper = mount({
      template: `<button @click="handleClick">Click</button>`,
      methods: {
        handleClick() {
          Modal.open({
            title: 'title',
            content: 'content',
            onOk,
            onCancel,
          });
        },
      },
    });

    await wrapper.find('button').trigger('click');
    const buttons = document.querySelectorAll('button');
    await buttons[0]?.click();
    expect(onCancel).toBeCalled();
    await buttons[1]?.click();
    expect(onOk).toBeCalled();
  });
})
