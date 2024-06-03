<script lang="tsx">
import { defineComponent } from 'vue';
import { colorPickerInputAlphaProps } from './color-picker-input-alpha';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerInputAlpha',

  props: colorPickerInputAlphaProps,

  setup(props, { slots }) {}
});
</script>
