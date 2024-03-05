<script lang="tsx">
import { defineComponent, ref, computed } from 'vue';
import { paginationProps, paginationEmits } from './pagination';
import { useNamespace } from '@tu-view-plus/hooks';
import '../style/pagination.scss';

export default defineComponent({
  name: 'TuPagination',

  props: paginationProps,

  emits: paginationEmits,

  setup(props, { emit, slots }) {
    const nsPagination = useNamespace('pagination');

    const classes = computed(() => ({
      [nsPagination.b()]: true
    }));

    return () => {
      return <div class={classes.value}>123</div>;
    };
  }
});
</script>
