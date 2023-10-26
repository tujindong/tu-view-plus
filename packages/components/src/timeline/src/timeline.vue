<script lang="tsx">
import { defineComponent, computed, toRefs, reactive, provide } from 'vue';
import { timelineProps } from './timeline';
import { useNamespace, useChildrenComponents } from '@tu-view-plus/hooks';
import Item from './timeline-item.vue';
import { Loading } from '@tu-view-plus/icons-vue';
import { timelineInjectionKey } from './constants';
import TuIcon from '../../icon';
import '../style/timeline.scss';

export default defineComponent({
  name: 'TuTimeline',

  props: timelineProps,

  setup(props, { slots }) {
    const nsTimeline = useNamespace('timeline');

    const isPending = computed(() => {
      return props.pending || slots.pending;
    });

    const { children, components } = useChildrenComponents('TuTimelineItem');

    const {
      reverse: reverseRef,
      direction: directionRef,
      labelPosition: labelPositionRef,
      mode: modeRef
    } = toRefs(props);

    const timelineContext = reactive({
      items: components,
      direction: directionRef,
      reverse: reverseRef,
      labelPosition: labelPositionRef,
      mode: modeRef
    });

    const timelineClasses = computed(() => ({
      [nsTimeline.b()]: true,
      [nsTimeline.em('direction', props.direction)]: props.direction,
      [nsTimeline.m(props.mode)]: props.mode,
      [nsTimeline.m('reverse')]: props.reverse
    }));

    provide(timelineInjectionKey, timelineContext);

    return () => {
      if (isPending.value) {
        children.value = slots.default?.().concat(
          <Item
            v-slots={{
              dot: () =>
                slots.dot?.() ?? (
                  <TuIcon size={18} class="is-loading">
                    <Loading />
                  </TuIcon>
                )
            }}
            lineType="dashed"
          >
            {props.pending !== true && <div>{props.pending}</div>}
          </Item>
        );
      } else {
        children.value = slots.default?.();
      }

      return (
        <div role="list" class={timelineClasses.value}>
          {children.value}
        </div>
      );
    };
  }
});
</script>
