<script lang="tsx">
import { defineComponent, computed } from 'vue';
import { previewActionProps } from './preview-action';
import { useNamespace } from '@tu-view-plus/hooks';
import TuTooltip from '../../tooltip';

export default defineComponent({
  name: 'TuPreviewAction',

  props: previewActionProps,

  inheritAttrs: false,

  setup(props, { slots, attrs }) {
    const nsImage = useNamespace('image');

    const classes = computed(() => ({
      [nsImage.e('preview-toolbar-action')]: true,
      [nsImage.em('preview-toolbar-action', 'disabled')]: props.disabled
    }));

    return () => {
      const { name } = props;
      const children = slots.default?.();
      if (!children || !children.length) return null;

      const content = (
        <div
          class={classes.value}
          onMousedown={(e) => e.preventDefault()}
          {...attrs}
        >
          <span class={nsImage.e('preview-toolbar-action-content')}>
            {children}
          </span>
        </div>
      );

      return name ? (
        <TuTooltip
          class={nsImage.e('preview-toolbar-action-tooltip')}
          content={name}
        >
          {content}
        </TuTooltip>
      ) : (
        content
      );
    };
  }
});
</script>
