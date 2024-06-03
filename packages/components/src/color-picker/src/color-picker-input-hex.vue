<script lang="tsx">
import { defineComponent } from 'vue';
import { colorPickerInputHexProps } from './color-picker-input-hex';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerInputHex',

  props: colorPickerInputHexProps,

  setup(props, { slots }) {}
});
</script>
