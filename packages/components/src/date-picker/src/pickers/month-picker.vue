<script lang="tsx">
import { defineComponent } from 'vue';
import { monthPickerProps } from './month-picker';
import TuPicker from '../picker.vue';

export default defineComponent({
  name: 'TuMonthPicker',

  props: monthPickerProps,

  setup(props, { attrs, slots }) {
    return () => (
      <TuPicker {...props} {...attrs} mode="month" v-slots={slots} />
    );
  }
});
</script>
