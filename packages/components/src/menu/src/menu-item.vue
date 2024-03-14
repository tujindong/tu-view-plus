<script lang="tsx">
import {
  computed,
  defineComponent,
  ref,
  watch,
  onMounted,
  onUnmounted
} from 'vue';
import { menuItemProps, menuItemEmits } from './menu-item';
import {
  useMenu,
  useLevel,
  useMenuContext,
  useMenuDataCollectorContext
} from './hooks';
import { useNamespace } from '@tu-view-plus/hooks';
import { omit } from '@tu-view-plus/utils';
import scrollIntoView from 'scroll-into-view-if-needed';
import TuMenuIndent from './menu-indent.vue';
import TuTooltip from '../../tooltip';
import '../style/menu.scss';

export default defineComponent({
  name: 'TuMenuItem',

  inheritAttrs: false,

  props: menuItemProps,

  emits: menuItemEmits,

  setup(props, { emit }) {
    const { key } = useMenu();
    const { level } = useLevel();
    const menuContext = useMenuContext();
    const refItemElement = ref<HTMLDivElement>();
    const isSelected = computed(
      () => (menuContext.selectedKeys || []).indexOf(key.value) > -1
    );

    const menuDataCollector = useMenuDataCollectorContext();

    onMounted(() => {
      menuDataCollector?.collectMenuItem(key.value);
    });

    onUnmounted(() => {
      menuDataCollector?.removeMenuItem(key.value);
    });

    function scrollTo() {
      if (
        menuContext.autoScrollIntoView &&
        refItemElement.value &&
        isSelected.value
      ) {
        scrollIntoView(refItemElement.value as HTMLDivElement, {
          behavior: 'smooth',
          block: 'nearest',
          scrollMode: 'if-needed',
          boundary: document.documentElement,
          ...(menuContext.scrollConfig || {})
        });
      }
    }

    let timer: NodeJS.Timeout;

    onMounted(() => {
      timer = setTimeout(() => {
        scrollTo();
      }, 500);
    });

    onUnmounted(() => {
      clearTimeout(timer);
    });

    watch([isSelected], () => {
      scrollTo();
    });

    return {
      menuContext,
      level,
      isSelected,
      refItemElement,
      onClick(e: MouseEvent) {
        if (props.disabled) return;
        menuContext.onMenuItemClick && menuContext.onMenuItemClick(key.value);
        emit('click', e);
      }
    };
  },

  render() {
    const nsMenu = useNamespace('menu');
    const { level, menuContext, disabled, isSelected, onClick } = this;
    const { collapsed, inTrigger, mode, tooltipProps } = menuContext;

    const needTooltip = collapsed && !inTrigger && level === 1;
    const needTextIndent = mode === 'vertical' && level > 1;
    const children = this.$slots.default?.() || [];
    const showIndent = needTextIndent && !inTrigger && !collapsed;
    const iconElement = this.$slots.icon && this.$slots.icon();

    const content = [
      showIndent && <TuMenuIndent level={level} />,
      iconElement && <span class={nsMenu.e('icon')}>{iconElement}</span>,
      showIndent || iconElement ? (
        <span
          class={[
            nsMenu.e('item-inner'),
            nsMenu.is('title', Boolean(iconElement))
          ]}
        >
          {children}
        </span>
      ) : (
        children
      )
    ].filter(Boolean);

    const itemElement = (
      <div
        ref="refItemElement"
        class={[
          nsMenu.e('item'),
          nsMenu.is('disabled', disabled),
          nsMenu.is('selected', isSelected),
          nsMenu.is('has-icon', Boolean(iconElement))
        ]}
        {...this.$attrs}
        onClick={onClick}
      >
        {/* 内容 */}
        {content}
        {/* 选中的下横线 */}
        {isSelected && mode === 'horizontal' && (
          <div class={nsMenu.e('selected-label')} />
        )}
      </div>
    );

    if (needTooltip) {
      const tooltipClassNames = [nsMenu.e('item-tooltip'), tooltipProps?.class];
      return (
        <TuTooltip
          trigger="hover"
          position="right"
          class={tooltipClassNames}
          {...omit(tooltipProps || {}, ['class'])}
          v-slots={{
            default: () => itemElement,
            content: () => children
          }}
        />
      );
    }

    return itemElement;
  }
});
</script>
