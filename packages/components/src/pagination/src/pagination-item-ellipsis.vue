<template>
  <li
    :class="[nsPagination.e('item'), nsPagination.em('item', 'ellipsis')]"
    @click="handleClick"
  >
    <slot>
      <tu-icon>
        <MoreFilled />
      </tu-icon>
    </slot>
  </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {
  paginationItemEllipsisProps,
  paginationItemEllipsisEmits
} from './pagination-item-ellipsis';
import { useNamespace } from '@tu-view-plus/hooks';
import { MoreFilled } from '@tu-view-plus/icons-vue';
import { getLegalPage } from './utils';
import TuIcon from '../../icon';
import '../style/pagination.scss';

defineOptions({
  name: 'TuPaginationItemEllipsis'
});

const props = defineProps(paginationItemEllipsisProps);
const emit = defineEmits(paginationItemEllipsisEmits);

const nsPagination = useNamespace('pagination');

const nextPage = computed(() =>
  getLegalPage(props.current + props.step, {
    min: 1,
    max: props.pages
  })
);

const handleClick = (e: MouseEvent) => {
  emit('click', nextPage.value);
};
</script>
