import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Tooltip from '../index';

describe('Tooltip', () => {
  test('render', async () => {
    const positions = ['top', 'tl', 'tr', 'bottom', 'bl', 'br', 'left', 'lt', 'lb', 'right', 'rt', 'rb'];
    const wrapper = mount(
      {
        template: positions.map(item => `
        <tu-tooltip
          position="${item}"
          content="content"
          :default-popup-visible="true"
          :render-to-body="false"
        >
          <button>Button</button>
        </tu-tooltip>
      `).join('/n'),
      },
      {
        global: {
          plugins: [Tooltip],
        },
      }
    );

    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should emit popupVisibleChange event', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0,
      },
      slots: {
        default: '<button>Button</button>',
        content: 'Content',
      },
    });

    await wrapper.find('button').trigger('mouseenter');
    await wrapper.find('button').trigger('mouseleave');

    expect(wrapper.emitted('popupVisibleChange')).toHaveLength(2);
  });
});
