import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Timeline from '../src/timeline.vue';
import TimelineItem from '../src/timeline-item.vue';

describe('Timeline.vue', () => {
  test('reverse should work', () => {
    const wrapper = mount(Timeline, {
      props: {
        reverse: true
      }
    });
    expect(wrapper.classes()).toContain('tu-timeline--reverse');
  });

  test('Should work with timeline item', () => {
    const wrapper = mount(Timeline, {
      global: {
        components: {
          TimelineItem
        }
      },
      slots: {
        default: `
          <timeline-item>1</timeline-item>
          <timeline-item>2</timeline-item>
        `
      }
    });
    expect(wrapper.findAll('.tu-timeline-item').length).toBe(2);
  });

  test('dot type and dot color should work for timeline item', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        label: 'hello world',
        dotColor: 'rgb(10, 180, 42)'
      }
    });
    const dot = wrapper.find('.tu-timeline-item__dot');
    expect(dot.attributes('style')).toContain(
      'background-color: rgb(10, 180, 42)'
    );
  });
});
