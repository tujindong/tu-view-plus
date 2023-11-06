<script lang="tsx">
import { computed, defineComponent, Comment, Fragment } from 'vue';
import { spaceProps } from './space';
import { useNamespace } from '@tu-view-plus/hooks';
import {
  getAllElements,
  isNumber,
  isString,
  isArray,
  addUnit
} from '@tu-view-plus/utils';
import { spaceSizeMaps } from './constants';
import '../style/space.scss';

import type { SpaceSize } from './constants';
import type { CSSProperties } from 'vue';

export default defineComponent({
  name: 'TuSpace',

  props: spaceProps,

  setup(props, { slots }) {
    const nsSpace = useNamespace('space');

    const alignComputed = computed(
      () => props.align ?? (props.direction === 'horizontal' ? 'center' : '')
    );

    const classes = computed(() => ({
      [nsSpace.b()]: true,
      [nsSpace.m(props.direction)]: props.direction,
      [nsSpace.m(`align-${alignComputed.value}`)]: alignComputed.value,
      [nsSpace.e('wrap')]: props.wrap,
      [nsSpace.e('fill')]: props.fill
    }));

    const getMargin = (size: SpaceSize) => {
      if (isNumber(size)) return size;
      if (isString(size)) return spaceSizeMaps[size];
      return 8;
    };

    const getMarginStyle = (isLast: boolean): CSSProperties => {
      const style: CSSProperties = {};
      const marginRight = addUnit(
        getMargin(isArray(props.size) ? props.size[0] : props.size)
      );
      const marginBottom = addUnit(
        getMargin(isArray(props.size) ? props.size[1] : props.size)
      );

      if (isLast) return props.wrap ? { marginBottom } : {};

      if (props.direction === 'horizontal') style.marginRight = marginRight;

      if (props.direction === 'vertical' || props.wrap)
        style.marginBottom = marginBottom;

      return style;
    };

    return () => {
      const children = getAllElements(slots.default?.(), true).filter(
        (i) => i.type !== Comment
      );

      return (
        <div class={classes.value}>
          {children.map((child, index) => {
            const shouldRenderDivider = slots.divider && index > 0;
            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {shouldRenderDivider && (
                  <div
                    class={nsSpace.e('item-divider')}
                    style={getMarginStyle(false)}
                  >
                    {slots.divider?.()}
                  </div>
                )}
                <div
                  class={nsSpace.e('item')}
                  style={getMarginStyle(index === children.length - 1)}
                >
                  {child}
                </div>
              </Fragment>
            );
          })}
        </div>
      );
    };
  }
});
</script>
