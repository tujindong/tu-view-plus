<script lang='tsx'>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'TuOnlyClient',

  setup(_, { slots }) {
    const mounted = ref(false);
    onMounted(() => (mounted.value = true));

    return () => {
      return mounted.value ? slots.default?.() : null;
    };
  }
});
</script>

