<script lang="tsx">
import { ref, defineComponent, computed, inject, toRefs, provide } from 'vue';
import { menuProps } from './menu';
import '../style/menu.scss';

export default defineComponent({
  name: 'TuMenu',

  inheritAttrs: false,

  props: menuProps,

  setup(props, { emit, slots }) {
    const { mode } = toRefs(props);
  }
});
</script>
