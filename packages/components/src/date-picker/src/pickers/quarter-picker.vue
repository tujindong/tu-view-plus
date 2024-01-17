<script lang="tsx">
import { defineComponent } from 'vue';
import { quarterPickerProps } from './quarter-picker';
import TuPicker from '../picker.vue';

export default defineComponent({
  name: 'TuQuarterPicker',

  props: quarterPickerProps,

  setup(props, { attrs, slots }) {
    return () => (
      <TuPicker {...props} {...attrs} mode="quarter" v-slots={slots} />
    );
  }
});
</script>
