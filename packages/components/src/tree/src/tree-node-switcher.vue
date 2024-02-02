<script lang="tsx">
import { defineComponent, h, PropType, toRefs, VNode } from 'vue';
import { treeNodeSwitcherProps } from './tree-node-switcher';
import { RenderFunction } from '@tu-view-plus/constants';
import { usePickSlots } from '@tu-view-plus/hooks';
// import IconLoading from '../icon/icon-loading';
// import IconHover from '../_components/icon-hover.vue';
// import IconCaretDown from '../icon/icon-caret-down';
// import IconFile from '../icon/icon-file';
import { useTreeContext } from './hooks';
import { TreeNodeData } from './interface';

export default defineComponent({
  name: 'TuTreeNodeSwitcher',

  components: {
    // IconLoading,
    RenderFunction
  },

  props: treeNodeSwitcherProps,

  emits: ['click'],

  setup(props, { slots, emit }) {
    const { icons, nodeStatus, treeNodeData } = toRefs(props);
    const treeContext = useTreeContext();

    const nodeSwitcherIcon = usePickSlots(slots, 'switcher-icon');
    const nodeLoadingIcon = usePickSlots(slots, 'loading-icon');

    return {
      getSwitcherIcon: () => {
        const icon = icons?.value?.switcherIcon ?? nodeSwitcherIcon.value;
        return icon
          ? icon(nodeStatus.value)
          : treeContext.switcherIcon?.(treeNodeData.value, nodeStatus.value);
      },
      getLoadingIcon: () => {
        const icon = icons?.value?.loadingIcon ?? nodeLoadingIcon.value;
        return icon
          ? icon(nodeStatus.value)
          : treeContext.loadingIcon?.(treeNodeData.value, nodeStatus.value);
      },
      onClick(e: Event) {
        emit('click', e);
      }
    };
  },
  render() {
    const {
      // prefixCls,
      getSwitcherIcon,
      getLoadingIcon,
      onClick,
      nodeStatus = {},
      loading,
      showLine
    } = this;

    const { expanded, isLeaf } = nodeStatus;

    if (loading) {
      return getLoadingIcon() ?? h(IconLoading);
    }

    let icon = null;
    let needIconHover = false;

    if (!isLeaf) {
      const defaultIcon = showLine
        ? h('span', {
            class: `${prefixCls}-${expanded ? 'minus' : 'plus'}-icon`
          })
        : h(IconCaretDown);
      icon = getSwitcherIcon() ?? defaultIcon;
      needIconHover = !showLine;
    } else if (showLine) {
      icon = getSwitcherIcon() ?? h(IconFile);
    }

    if (!icon) return null;

    const content = h(
      'span',
      { class: `${prefixCls}-switcher-icon`, onClick },
      icon
    );
    return needIconHover
      ? h(
          IconHover,
          {
            class: `${prefixCls}-icon-hover`
          },
          () => content
        )
      : content;
  }
});
</script>
