<script lang="tsx">
import { defineComponent } from 'vue';
import { yearPickerProps } from './year-picker';
import TuPicker from '../picker.vue';

export default defineComponent({
  name: 'TuYearPicker',

  props: yearPickerProps,

  setup(props, { attrs, slots }) {
    return () => <TuPicker {...props} {...attrs} mode="year" v-slots={slots} />;
  }
});
</script>
