import { mount } from '@vue/test-utils';
import { describe, expect, test, it } from 'vitest';
import Avatar from '../src/avatar.vue';
import AvatarGroup from '../src/avatar-group.vue';

describe('Avatar', () => {
  test('Should have prefix', () => {
    const wrapper = mount(() => <Avatar />);
    expect(wrapper.classes()).toContain('tu-avatar');
  });

  test('Size should work', () => {
    const wrapper = mount(<Avatar />, {
      props: {
        size: 100,
      },
    });
    const avatar = wrapper.find('.tu-avatar');
    expect(avatar.attributes('style')).toContain('width: 100px');
  });

  test('Click callback should work', () => {
    const wrapper = mount(<Avatar />);
    wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  test('Trigger-icon should be present if set', () => {
    const wrapper = mount(<Avatar />, {
      slots: {
        'trigger-icon': `<div id='icon'>this is icon</div>`,
      },
    });
    const icon = wrapper.find('#icon');
    expect(icon.exists()).toBe(true);
  });

  test('Trigger-type should work', async () => {
    const wrapper = mount(<Avatar />, {
      slots: {
        'trigger-icon': '<div/>',
      },
      props: {
        triggerType: 'mask',
      },
    });
    let triggerElement = wrapper.find('.tu-avatar__trigger-icon-mask');
    expect(triggerElement.exists()).toBe(true);
    await wrapper.setProps({ triggerType: 'button' });
    triggerElement = wrapper.find('.tu-avatar__trigger-icon-button');
    expect(triggerElement.exists()).toBe(true);
  });

  test('Avatar group should work', () => {
    const group = mount(<AvatarGroup />, {
      slots: {
        default: [Avatar, Avatar],
      },
    });
    expect(group.classes()).toContain('tu-avatar-group');
    const avatars = group.findAll('.tu-avatar');
    expect(avatars.length).toBe(2);
  });

  test('Avatar group maxCount should work', () => {
    const group = mount(<AvatarGroup />, {
      slots: {
        default: [Avatar, Avatar, Avatar],
      },
      props: {
        maxCount: 1,
      },
    });
    const avatars = group.findAll('.tu-avatar');
    expect(avatars.length).toBe(1 + 1);
  });
});
