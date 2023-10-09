import { nextTick } from 'vue';
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tabs from '../src/tabs.vue'
import TabPane from '../src/tab-pane.vue'

describe('Tabs', () => {
  test('should emit change event', async () => {
    const wrapper = mount(Tabs, {
      global: {
        components: {
          TabPane,
        },
      },
      slots: {
        default:
          '<tab-pane key="1" title="Tab 1">Panel 1</tab-pane>' +
          '<tab-pane key="2" title="Tab 2">Panel 2</tab-pane>',
      },
    });

    await nextTick();

    await wrapper.findAll('.tu-tabs__tab')[1].trigger('click');

    expect(wrapper.emitted('change')?.[0]).toEqual(['2']);
  })

  test('should emit add/delete event', async () => {
    const wrapper = mount(Tabs, {
      global: {
        components: {
          TabPane,
        },
      },
      slots: {
        default:
          '<tab-pane key="1" title="Tab 1">Panel 1</tab-pane>' +
          '<tab-pane key="2" title="Tab 2">Panel 2</tab-pane>',
      },
      props: {
        editable: true,
        showAddButton: true,
      },
    });

    await nextTick();

    await wrapper.find('.tu-tabs__button-add').trigger('click');
    expect(wrapper.emitted('add')).toHaveLength(1);
    await wrapper.find('.tu-tabs__button-close').trigger('click');
    expect(wrapper.emitted('delete')).toHaveLength(1);
  });
})
