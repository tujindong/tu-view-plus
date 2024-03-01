<script lang="tsx">
import { defineComponent, ref, computed, toRefs } from 'vue';
import {
  treeSelectDropdownProps,
  treeSelectDropdownEmits
} from './tree-select-dropdown';
import { useNamespace } from '@tu-view-plus/hooks';
import TuTree from '../../tree';
import TuScrollbar from '../../scrollbar';

import '../style/tree-select.scss';

import type { TreeNodeKey } from '../../tree/src/interface';

export default defineComponent({
  name: 'TuTabs',

  props: treeSelectDropdownProps,

  emits: treeSelectDropdownEmits,

  setup(props, { emit, slots }) {
    const { showCheckable, selectedKeys, treeProps } = toRefs(props);

    const nsTreeSelect = useNamespace('tree-select');

    const treeRef = ref();

    const computedTreeProps = computed(() => {
      return {
        ...treeProps.value,
        disableSelectActionOnly: true,
        checkedKeys: showCheckable.value ? selectedKeys.value : [],
        selectedKeys: showCheckable.value ? [] : selectedKeys.value
      };
    });

    const onSelect = (newVal: TreeNodeKey[], e: Event) => {
      if (showCheckable.value) {
        treeRef.value?.toggleCheck?.(newVal[0], e);
      } else {
        emit('change', newVal);
      }
    };

    const onCheck = (newVal: TreeNodeKey[]) => {
      emit('change', newVal);
    };

    return () => {
      return (
        <TuScrollbar
          wrap-class={nsTreeSelect.e('dropdown-wrap')}
          view-class={nsTreeSelect.e('dropdown-list')}
        >
          <TuTree
            ref={treeRef}
            // @ts-ignore
            onSelect={onSelect}
            onCheck={onCheck}
            v-slots={props.treeSlots}
            {...computedTreeProps.value}
          ></TuTree>
        </TuScrollbar>
      );
    };
  }
});
</script>
