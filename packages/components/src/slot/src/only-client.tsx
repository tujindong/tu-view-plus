import { defineComponent, onMounted, ref } from 'vue'

export const OnlyClient = defineComponent({
  name: 'TuOnlyClient',
  setup(_, { slots }) {
    const mounted = ref(false)
    onMounted(() => mounted.value = true)

    return () => {
      if (mounted.value) return slots.default?.()
      return null
    }
  }
})