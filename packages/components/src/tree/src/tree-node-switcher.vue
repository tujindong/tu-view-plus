<script lang="tsx">
import { defineComponent, toRefs } from 'vue';
import { treeNodeSwitcherProps } from './tree-node-switcher';
import { RenderFunction } from '@tu-view-plus/constants';
import { usePickSlots, useNamespace } from '@tu-view-plus/hooks';
import {
  CaretBottom,
  Document,
  CirclePlus,
  Remove,
  Loading
} from '@tu-view-plus/icons-vue';
import { useTreeContext } from './hooks';
import TuIcon from '../../icon';

export default defineComponent({
  name: 'TuTreeNodeSwitcher',

  components: {
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
      getSwitcherIcon,
      getLoadingIcon,
      onClick,
      nodeStatus = {},
      loading,
      showLine
    } = this;

    const nsTree = useNamespace('tree');

    const { expanded, isLeaf } = nodeStatus;

    if (loading) {
      return (
        getLoadingIcon() ?? (
          <TuIcon class={'is-loading'}>
            <Loading />
          </TuIcon>
        )
      );
    }

    let icon = null;
    let needIconHover = false;

    if (!isLeaf) {
      const defaultIcon = showLine ? (
        expanded ? (
          <Remove />
        ) : (
          <CirclePlus />
        )
      ) : (
        <CaretBottom />
      );
      icon = getSwitcherIcon() ?? <TuIcon> {defaultIcon} </TuIcon>;

      console.log('icon~~', icon);

      needIconHover = !showLine;
    } else if (showLine) {
      icon = getSwitcherIcon() ?? (
        <TuIcon>
          <Document />
        </TuIcon>
      );
    }

    if (!icon) return null;

    const content = (
      <div class={nsTree.e('switcher-icon')} onClick={onClick}>
        {icon}
      </div>
    );

    return needIconHover ? (
      <TuIcon class={nsTree.e('icon-hover')}>{content}</TuIcon>
    ) : (
      content
    );
  }
});
</script>
