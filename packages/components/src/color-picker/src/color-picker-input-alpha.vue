<script lang="tsx">
import { defineComponent } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { colorPickerInputAlphaProps } from './color-picker-input-alpha';
import TuInputNumber from '../../input-number';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerInputAlpha',

  props: colorPickerInputAlphaProps,

  setup(props) {
    const nsColorPicker = useNamespace('color-picker');

    return () => (
      <TuInputNumber
        class={nsColorPicker.e('input-alpha')}
        size="mini"
        v-slots={{ suffix: () => '%' }}
        min={0}
        max={100}
        controls-position="right"
        disabled={props.disabled}
        modelValue={Math.round(props.value * 100)}
        onChange={(a = 100) => props.onChange?.(a / 100)}
      />
    );
  }
});
</script>
