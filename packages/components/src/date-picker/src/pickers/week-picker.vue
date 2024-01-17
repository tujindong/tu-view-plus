<script lang="tsx">
import { defineComponent } from 'vue';
import { weekPickerProps } from './week-picker';
import TuPicker from '../picker.vue';

export default defineComponent({
  name: 'TuWeekPicker',

  props: weekPickerProps,

  setup(props, { attrs, slots }) {
    return () => <TuPicker {...props} {...attrs} mode="week" v-slots={slots} />;
  }
});
</script>
