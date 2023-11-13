<script lang="tsx">
import { provide, toRef, reactive, ref, defineComponent } from 'vue';
import { avatarGroupProps } from './avatar-group';
import { avatarGroupInjectionKey } from './constants';
import { useNamespace } from '@tu-view-plus/hooks';
import { getAllElements } from '@tu-view-plus/utils';
import TuPopover from '../../popover';
import '../style/avatar-group.scss';

export default defineComponent({
  name: 'TuAvatarGroup',

  props: avatarGroupProps,

  setup(props, { slots }) {
    const nsAvatarGroup = useNamespace('avatar-group');

    const total = ref(0);

    provide(
      avatarGroupInjectionKey,
      reactive({
        shape: toRef(props, 'shape'),
        size: toRef(props, 'size'),
        autoFixFontSize: toRef(props, 'autoFixFontSize'),
        zIndexAscend: toRef(props, 'zIndexAscend'),
        total
      })
    );

    return () => {
      const children = getAllElements(slots.default?.() ?? []);
      const avatarsToRender =
        props.maxCount > 0 ? children.slice(0, props.maxCount) : children;
      const avatarsInPopover =
        props.maxCount > 0 ? children.slice(props.maxCount) : [];
      if (total.value !== avatarsToRender.length)
        total.value = avatarsToRender.length;

      return (
        <div class={nsAvatarGroup.b()}>
          {avatarsToRender}
          {avatarsInPopover.length > 0 && (
            <TuPopover
              v-slots={{
                title: () => <div>{avatarsInPopover}</div>
              }}
            >
              <tu-avatar
                class={nsAvatarGroup.e('max-count-avatar')}
                style={props.maxStyle}
              >
                {avatarsInPopover.length}..
              </tu-avatar>
            </TuPopover>
          )}
        </div>
      );
    };
  }
});
</script>
