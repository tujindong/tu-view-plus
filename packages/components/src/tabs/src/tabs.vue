<template>
  <div :class="tabsClasses">
    <template v-if="tabPosition !== 'bottom'">
      <tu-tabs-header
        ref="tabsHeaderRef"
        :tabPosition="tabPosition"
        :editable="editable"
        :addable="addable"
        :type="type"
        :stretch="stretch"
      />
      <div :class="nsTabs.e('content')"><slot /></div>
    </template>
    <!-- <template v-else>
      <div :class="nsTabs.e('content')"><slot /></div>
      <tu-tabs-header />
    </template> -->
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { tabsProps, tabsEmits } from './tabs';
import { useNamespace } from '@tu-view-plus/hooks';
import TuTabsHeader from './tabs-header.vue';
import '../style/tabs.scss';

defineOptions({
  name: 'TuTabs'
});

const props = defineProps(tabsProps);
const emit = defineEmits(tabsEmits);

const nsTabs = useNamespace('tabs');

const tabsClasses = computed(() => ({
  [nsTabs.b()]: true,
  [nsTabs.m(props.tabPosition)]: props.tabPosition,
  [nsTabs.m(props.type)]: props.type
}));
</script>
