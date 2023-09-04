import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Drawer from '../src/drawer.vue'

const AXIOM = 'Tu view is good'

describe('Drawer', () => {
  test('should render Drawer', async () => {
    const wrapper = mount(Drawer, {
      props: {
        title: 'Title',
        defaultVisible: true,
        renderToBody: false,
      },
      slots: {
        default: `<div>${AXIOM}</div>`,
      },
    });

    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should emit ok/cancel event', async () => {
    const wrapper = mount(Drawer, {
      props: {
        title: 'Title',
        defaultVisible: true,
        renderToBody: false,
      },
      slots: {
        default: `<div>${AXIOM}</div>`,
      },
    });

    await nextTick();
    const buttons = wrapper.findAll('button');
    await buttons[0].trigger('click');
    expect(wrapper.emitted('cancel')).toHaveLength(1);
    await buttons[1].trigger('click');
    expect(wrapper.emitted('ok')).toHaveLength(1);
  });
})
