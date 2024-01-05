import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import Carousel from '../src/carousel.vue';
import CarouselItem from '../src/carousel-item.vue';
const AXIOM = 'Tu view is good';

const assertActiveAtIndex = (wrapper: any, index: number) => {
  const items = wrapper.findAll('.tu-carousel__indicator-item');
  const isActiveAtIndex = items[index]
    ?.classes()
    .includes('tu-carousel__indicator-item--active');
  expect(isActiveAtIndex).toBe(true);
};

describe('Carousel.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('Current prop should work properly', async () => {
    const wrapper = mount(Carousel, {
      global: {
        components: {
          CarouselItem
        }
      },
      slots: {
        default: `<CarouselItem v-for="it in 5" :key="it"><img/></CarouselItem>`
      },
      props: {
        current: 3,
        autoPlay: false
      }
    });
    await nextTick();
    assertActiveAtIndex(wrapper, 2);
    await wrapper.setProps({ current: 2 });
    assertActiveAtIndex(wrapper, 1);
  });

  test('AutoPlay should work', async () => {
    const wrapper = mount(Carousel, {
      global: {
        components: {
          CarouselItem
        }
      },
      slots: {
        default: `<CarouselItem v-for="it in 5" :key="it"><img/></CarouselItem>`
      },
      props: {
        autoPlay: {
          interval: 50
        }
      }
    });
    vi.advanceTimersByTime(10);
    await nextTick();
    assertActiveAtIndex(wrapper, 0);
    vi.advanceTimersByTime(60);
    await nextTick();
    assertActiveAtIndex(wrapper, 1);
  });

  test('Clicking arrow should be able to switch carousel', async () => {
    const wrapper = mount(Carousel, {
      global: {
        components: {
          CarouselItem
        }
      },
      slots: {
        default: `<CarouselItem v-for="it in 5" :key="it"><img/></CarouselItem>`
      },
      props: {
        autoPlay: false
      }
    });
    await nextTick();
    const nextIndicator = wrapper.find('.tu-carousel__arrow--right');
    assertActiveAtIndex(wrapper, 0);
    nextIndicator.trigger('click');
    await nextTick();
    assertActiveAtIndex(wrapper, 1);
  });

  test('Should be responsive to children change', async () => {
    const WrapperComponent = {
      components: {
        CarouselItem,
        Carousel
      },
      props: {
        childrenCount: {
          type: Number
        }
      },
      template: `
        <carousel>
          <CarouselItem v-for="item in childrenCount" :key="item">
            <img class="tu-item-image"/>
          </CarouselItem>
        </carousel>
      `
    };
    const wrapper = mount(WrapperComponent, {
      props: {
        childrenCount: 5
      }
    });
    await nextTick();
    expect(wrapper.findAll('.tu-item-image').length).toBe(5);
    await wrapper.setProps({ childrenCount: 1 });
    expect(wrapper.findAll('.tu-item-image').length).toBe(1);
  });

  test('Hover to pause should work', async () => {
    const wrapper = mount(Carousel, {
      global: {
        components: {
          CarouselItem
        }
      },
      slots: {
        default: `<CarouselItem v-for="it in 5" :key="it"><img/></CarouselItem>`
      },
      props: {
        autoPlay: {
          hoverToPause: true,
          interval: 50
        }
      }
    });
    await nextTick();
    wrapper.trigger('mouseenter');
    vi.advanceTimersByTime(100);
    assertActiveAtIndex(wrapper, 0);
  });

  test('Slider indicator type should work', async () => {
    const wrapper = mount(Carousel, {
      global: {
        components: {
          CarouselItem
        }
      },
      slots: {
        default: `<CarouselItem v-for="item in 5" :key="item"><img/></CarouselItem>`
      },
      props: {
        indicatorType: 'slider'
      }
    });
    await nextTick();
    expect(wrapper.find('.tu-carousel__indicator--slider').exists()).toBe(true);
    wrapper.find('.tu-carousel__indicator--slider').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
