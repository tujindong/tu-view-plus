<script lang="tsx">
import { defineComponent } from 'vue';
import { useNodeKey } from './hooks';
import { treeBaseNodeProps } from './tree-base-node';
import TuTreeBaseNode from './tree-base-node.vue';
import TuTreeTransitionNodeList from './tree-transition-node-list.vue';

export default defineComponent({
  name: 'TuTreeNode',

  inheritAttrs: false,

  props: treeBaseNodeProps,

  setup(props, { slots, attrs }) {
    const key = useNodeKey();

    return () => {
      return (
        <>
          <TuTreeBaseNode
            {...props}
            {...attrs}
            key={key.value}
            v-slots={slots}
          />
          <TuTreeTransitionNodeList key={key.value} nodeKey={key.value} />
        </>
      );
    };
  }
});
</script>
