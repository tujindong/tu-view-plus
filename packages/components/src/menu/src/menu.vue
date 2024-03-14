<script lang="tsx">
import { defineComponent, computed, inject, toRefs, provide } from 'vue';
import { menuProps } from './menu';
import { SiderInjectionKey } from '../../layout/src/context';
import { LevelInjectionKey, MenuInjectionKey } from './context';
import TuBaseMenu from './base-menu.vue';
import TuOverflowWrap from './overflow-wrap.vue';
import '../style/menu.scss';

export default defineComponent({
  name: 'TuMenu',

  inheritAttrs: false,

  components: {
    TuBaseMenu,
    TuOverflowWrap
  },

  props: menuProps,

  setup(props, { attrs, slots }) {
    const { mode } = toRefs(props);

    const siderContext = inject(SiderInjectionKey, undefined);
    const siderCollapsed = computed(() => siderContext?.collapsed || false);

    // 截断上下文
    provide(MenuInjectionKey, undefined as any);
    provide(LevelInjectionKey, undefined as any);

    return () => (
      <TuBaseMenu
        inTrigger={false}
        siderCollapsed={siderCollapsed.value}
        isRoot
        v-slots={{
          ...slots,
          default:
            mode.value === 'horizontal' && slots.default
              ? () => <TuOverflowWrap>{slots.default?.()}</TuOverflowWrap>
              : slots.default
        }}
        {...props}
        {...attrs}
      />
    );
  }
});
</script>
