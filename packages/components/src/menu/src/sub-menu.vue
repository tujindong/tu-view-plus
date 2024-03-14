<script lang="tsx">
import { computed, defineComponent, toRef, toRefs } from 'vue';
import { subMenuProps, SubMenuProps } from './sub-menu';
import {
  useMenu,
  useLevel,
  useMenuContext,
  useMenuDataCollector
} from './hooks';
import { ArrowDown, ArrowRight } from '@tu-view-plus/icons-vue';
import TuIcon from '../../icon';
import TuSubMenuPop from './sub-menu-pop.vue';
import TuSubMenuInline from './sub-menu-inline.vue';
import '../style/menu.scss';

export default defineComponent({
  name: 'TuSubMenu',

  props: subMenuProps,

  setup(props: SubMenuProps, { attrs }) {
    const { key } = useMenu();
    const { level } = useLevel();
    const { popup } = toRefs(props);
    const menuContext = useMenuContext();
    const computedPopup = computed(() => {
      const { mode, collapsed, inTrigger } = menuContext;
      const forcePopup = !!(typeof popup.value === 'function'
        ? popup.value(level.value)
        : popup.value);
      return forcePopup || collapsed || inTrigger || mode !== 'vertical';
    });

    const { subMenuKeys, menuItemKeys } = useMenuDataCollector({
      key: key.value,
      type: 'subMenu'
    });

    const isChildrenSelected = computed(() => {
      const selectedKeys = menuContext.selectedKeys || [];
      const checkSelected = (menuKeys: string[]) => {
        for (let i = 0; i < selectedKeys.length; i++) {
          const selectedKey = selectedKeys[i];
          if (menuKeys.includes(selectedKey)) {
            return true;
          }
        }
        return false;
      };

      return (
        checkSelected(subMenuKeys.value) || checkSelected(menuItemKeys.value)
      );
    });

    return {
      subMenuKeys,
      menuItemKeys,
      isChildrenSelected,
      props,
      attrs,
      computedKey: key,
      computedPopup,
      expandIconDown: toRef(menuContext, 'expandIconDown'),
      expandIconRight: toRef(menuContext, 'expandIconRight')
    };
  },

  render() {
    const {
      props,
      attrs,
      computedKey,
      computedPopup,
      expandIconDown,
      expandIconRight,
      isChildrenSelected
    } = this;
    const _slots = {
      ...this.$slots,
      'expand-icon-down':
        this.$slots['expand-icon-down'] ||
        expandIconDown ||
        (() => [
          <TuIcon>
            <ArrowDown />
          </TuIcon>
        ]),
      'expand-icon-right':
        this.$slots['expand-icon-right'] ||
        expandIconRight ||
        (() => [
          <TuIcon>
            <ArrowRight />
          </TuIcon>
        ])
    };
    return computedPopup ? (
      <TuSubMenuPop
        key={computedKey}
        title={props.title}
        selectable={props.selectable}
        isChildrenSelected={isChildrenSelected}
        popupMaxHeight={props.popupMaxHeight}
        v-slots={_slots}
        {...attrs}
      />
    ) : (
      <TuSubMenuInline
        key={computedKey}
        title={props.title}
        isChildrenSelected={isChildrenSelected}
        v-slots={_slots}
        {...attrs}
      />
    );
  }
});
</script>
