<script lang='tsx'>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'TuOnlyClient',

  setup(_, { slots }) {
    const mounted = ref(false);
    onMounted(() => (mounted.value = true));

    return () => {
      if (mounted.value) return slots.default?.();
      return null;
    };
  }
});
</script>

