<script lang="tsx">
import {
  defineComponent,
  computed,
  toRefs,
  ref,
  watchEffect,
  onBeforeUnmount,
  provide,
  reactive
} from 'vue';
import { carouselProps, carouselEmits } from './carousel';
import { useNamespace, useChildrenComponents } from '@tu-view-plus/hooks';
import { isNumber, isObject } from '@tu-view-plus/utils';
import CarouselIndicator from './carousel-indicator.vue';
import CarouselArrow from './carousel-arrow.vue';
import {
  carouselInjectionKey,
  SlideDirection,
  CarouselAutoPlayConfig
} from './constants';
import '../style/carousel.scss';

export default defineComponent({
  name: 'TuCarousel',

  props: carouselProps,

  emits: carouselEmits,

  setup(props, { emit, slots }) {
    const nsCarousel = useNamespace('carousel');

    const { current, animationName, moveSpeed, transitionTimingFunction } =
      toRefs(props);

    const DEFAULT_AUTO_PLAY = {
      interval: 3000,
      hoverToPause: true
    };

    const isPause = ref(false);
    const previousIndex = ref<number>();
    const slideDirection = ref<SlideDirection>();
    const computedAutoPlay = computed<CarouselAutoPlayConfig>(() => {
      if (isObject(props.autoPlay)) {
        return {
          ...DEFAULT_AUTO_PLAY,
          ...props.autoPlay
        };
      }
      return props.autoPlay ? DEFAULT_AUTO_PLAY : {};
    });
    let intervalTimer = 0;
    let animationTimer = 0;

    const { children, components } = useChildrenComponents('TuCarouselItem');
    const _index = ref(props.defaultCurrent - 1);

    const mergedIndexes = computed(() => {
      const childrenLength = components.value.length;
      const mergedIndex = isNumber(current.value)
        ? getValidIndex(current.value - 1, childrenLength)
        : _index.value;
      const prevIndex = getValidIndex(mergedIndex - 1, childrenLength);
      const nextIndex = getValidIndex(mergedIndex + 1, childrenLength);
      return {
        mergedIndex,
        mergedPrevIndex: prevIndex,
        mergedNextIndex: nextIndex
      };
    });

    const slideTo = ({
      targetIndex,
      isNegative = false,
      isManual = false
    }: {
      targetIndex: number;
      isNegative?: boolean;
      isManual?: boolean;
    }) => {
      if (!animationTimer && targetIndex !== mergedIndexes.value.mergedIndex) {
        previousIndex.value = _index.value;
        _index.value = targetIndex;
        slideDirection.value = isNegative ? 'negative' : 'positive';
        animationTimer = window.setTimeout(() => {
          animationTimer = 0;
        }, moveSpeed.value);
        emit('updateCurrent', _index.value + 1);
        emit('change', _index.value + 1, previousIndex.value + 1, isManual);
      }
    };

    const carouselContext = reactive({
      items: components,
      slideTo,
      mergedIndexes,
      previousIndex,
      animationName,
      slideDirection,
      transitionTimingFunction,
      moveSpeed
    });

    provide(carouselInjectionKey, carouselContext);

    const clearTimer = () => {
      if (intervalTimer) {
        window.clearInterval(intervalTimer);
      }
    };

    function getValidIndex(i: number, length: number): number {
      const indexNumber = +i;
      return typeof indexNumber === 'number' && !Number.isNaN(indexNumber)
        ? (indexNumber + length) % length
        : i;
    }

    const handlePreviousClick = () => {
      slideTo({
        targetIndex: mergedIndexes.value.mergedPrevIndex,
        isNegative: true,
        isManual: true
      });
    };

    const handleNextClick = () => {
      slideTo({
        targetIndex: mergedIndexes.value.mergedNextIndex,
        isManual: true
      });
    };

    const handleSelect = (index: number) => {
      slideTo({
        targetIndex: index,
        isNegative: index < mergedIndexes.value.mergedIndex,
        isManual: true
      });
    };

    const eventHandlers = computed(() => {
      return computedAutoPlay.value.hoverToPause
        ? {
            onMouseenter: () => {
              isPause.value = true;
            },
            onMouseleave: () => {
              isPause.value = false;
            }
          }
        : {};
    });

    const hasIndicator = computed(() => {
      return props.indicatorType !== 'never' && components.value.length > 1;
    });

    const hasArrow = computed(() => {
      return props.showArrow !== 'never' && components.value.length > 1;
    });
    
    const carouselClasses = computed(() => ({
      [nsCarousel.b()]: true,
      [nsCarousel.m(`indicator-position-${props.indicatorPosition}`)]:
        props.indicatorPosition
    }));

    const contentClasses = computed(() => ({
      [nsCarousel.m(`${props.animationName}`)]: props.animationName,
      [nsCarousel.m(`${props.direction}`)]: props.direction,
      [nsCarousel.m('negative')]: slideDirection.value === 'negative'
    }));

    const indicatorClasses = computed(() => ({
      [nsCarousel.e('indicator-wrapper')]: true,
      [nsCarousel.em('indicator-wrapper', props.indicatorPosition)]:
        props.indicatorPosition
    }));

    watchEffect(() => {
      const { interval } = computedAutoPlay.value || {};
      const { mergedNextIndex } = mergedIndexes.value;
      const shouldInterval =
        components.value?.length > 1 && !isPause.value && Boolean(interval);
      clearTimer();
      if (shouldInterval) {
        intervalTimer = window.setInterval(() => {
          slideTo({
            targetIndex: mergedNextIndex
          });
        }, interval);
      }
    });

    onBeforeUnmount(() => {
      clearTimer();
    });

    return () => {
      children.value = slots.default?.();
      return (
        <div class={carouselClasses.value} {...eventHandlers.value}>
          <div class={contentClasses.value}>{children.value}</div>
          {hasIndicator.value && (
            <div class={indicatorClasses.value}>
              <CarouselIndicator
                class={props.indicatorClasses}
                type={props.indicatorType}
                count={components.value.length}
                activeIndex={mergedIndexes.value.mergedIndex}
                position={props.indicatorPosition}
                trigger={props.trigger}
                onSelect={handleSelect}
              />
            </div>
          )}
          {hasArrow.value && (
            <CarouselArrow
              class={props.arrowClass}
              direction={props.direction}
              showArrow={props.showArrow}
              onPreviousClick={handlePreviousClick}
              onNextClick={handleNextClick}
            />
          )}
        </div>
      );
    };
  }
});
</script>
