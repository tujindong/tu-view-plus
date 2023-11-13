import { inject, h, defineComponent } from 'vue';
import { isNil } from 'lodash-unified';
import { addUnit, getNormalizedProps } from '@tu-view-plus/utils';
import { useNamespace } from '@tu-view-plus/hooks';
import type { VNode } from 'vue';
import {
  descriptionsInjectionKey,
  IDescriptionsInject,
  IDescriptionsItemInject
} from './constants';

export default defineComponent({
  name: 'TuDescriptionsCell',
  props: {
    cell: {
      type: Object
    },
    tag: {
      type: String
    },
    type: {
      type: String
    }
  },
  setup() {
    const descriptions = inject(
      descriptionsInjectionKey,
      {} as IDescriptionsInject
    );

    return {
      descriptions
    };
  },
  render() {
    const nsDescriptions = useNamespace('descriptions');

    const item = getNormalizedProps(
      this.cell as VNode
    ) as IDescriptionsItemInject;
    const { border, direction } = this.descriptions;
    const isVertical = direction === 'vertical';
    const label = this.cell?.children?.label?.() || item.label;
    const content = this.cell?.children?.default?.();
    const span = item.span;
    const align = item.align ? `is-${item.align}` : '';
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : '' || align;
    const className = item.className;
    const labelClassName = item.labelClassName;
    const style = {
      width: addUnit(item.width),
      minWidth: addUnit(item.minWidth)
    };

    switch (this.type) {
        case 'label':
          return h(
            String(this.tag),
            {
              style,
              class: [
                nsDescriptions.e('cell'),
                nsDescriptions.e('label'),
                nsDescriptions.is('bordered-label', border),
                nsDescriptions.is('vertical-label', isVertical),
                labelAlign,
                labelClassName,
              ],
              colSpan: isVertical ? span : 1,
            },
            label
          )
        case 'content':
          return h(
            String(this.tag),
            {
              style,
              class: [
                nsDescriptions.e('cell'),
                nsDescriptions.e('content'),
                nsDescriptions.is('bordered-content', border),
                nsDescriptions.is('vertical-content', isVertical),
                align,
                className,
              ],
              colSpan: isVertical ? span : span * 2 - 1,
            },
            content
          )
        default:
          return h(
            'td',
            {
              style,
              class: [nsDescriptions.e('cell'), align],
              colSpan: span,
            },
            [
              !isNil(label)
                ? h(
                    'span',
                    {
                      class: [nsDescriptions.e('label'), labelClassName],
                    },
                    label
                  )
                : undefined,
              h(
                'span',
                {
                  class: [nsDescriptions.e('content'), className],
                },
                content
              ),
            ]
          )
      }
  }
});
