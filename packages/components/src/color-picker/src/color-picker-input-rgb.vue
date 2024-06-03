<script lang="tsx">
import { defineComponent } from 'vue';
import { colorPickerInputRgbProps } from './color-picker-input-rgb';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerInputRgb',

  props: colorPickerInputRgbProps,

  setup(props, { slots }) {}
});
</script>
