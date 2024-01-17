<script lang="tsx">
import { defineComponent } from 'vue';
import { datePickerProps } from './date-picker';
import TuPicker from '../picker.vue';

export default defineComponent({
  name: 'TuDatePicker',

  props: datePickerProps,

  setup(props, { attrs, slots }) {
    return () => <TuPicker {...props} {...attrs} mode="date" v-slots={slots} />;
  }
});
</script>
