import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Trigger from '../src/trigger.vue';

const AXIOM = 'Tu view is good';

describe('Trigger', () => {
  test('click event', async () => {
    const wrapper = mount(() => (
      <Trigger
        trigger="click"
        v-slots={{
          content: () => <div id="popup-content">Popup Content</div>
        }}
      >
        <button>{AXIOM}</button>
      </Trigger>
    ));

    await wrapper.find('button').trigger('click');
    
    expect(document.body.innerHTML).toContain(
      '<div id="popup-content">Popup Content</div>'
    );
  });

  test('default visible', async () => {
    const wrapper = mount(() => (
      <Trigger
        defaultPopupVisible
        v-slots={{
          content: () => <div id="popup-content">Popup Content</div>
        }}
      >
        <button>{AXIOM}</button>
      </Trigger>
    ));

    expect(document.body.innerHTML).toContain(
      '<div id="popup-content">Popup Content</div>'
    );
  });
});
