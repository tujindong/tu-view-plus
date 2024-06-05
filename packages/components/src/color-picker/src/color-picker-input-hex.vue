<script lang="tsx">
import { defineComponent, toRefs, watch } from 'vue';
import { useNamespace, useState } from '@tu-view-plus/hooks';
import { colorPickerInputHexProps } from './color-picker-input-hex';
import { hexToRgb, rgbToHsv } from '@tu-view-plus/utils';
import TuInput from '../../input';
import TuColorPickerInputAlpha from './color-picker-input-alpha.vue';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerInputHex',

  props: colorPickerInputHexProps,

  setup(props) {
    const { color } = toRefs(props);

    const nsColorPicker = useNamespace('color-picker');

    const [hex, setHex] = useState(color.value.hex);

    const handlerChange = (value: string) => {
      const _rgb = hexToRgb(value) || { r: 255, g: 0, b: 0 };
      const hsv = rgbToHsv(_rgb.r, _rgb.g, _rgb.b);
      props.onHsvChange?.(hsv);
    };

    const onInputChange = (value: string) => {
      const matchValue = value.match(/[a-fA-F0-9]*/g)?.join('') ?? '';
      if (matchValue !== color.value.hex) {
        handlerChange(matchValue.toUpperCase());
      }
    };

    const onPaste = (ev: ClipboardEvent) => {
      if (!ev.clipboardData) return;
      let text = ev.clipboardData.getData('Text');
      if (text.startsWith('#')) {
        text = text.slice(1);
      }
      onInputChange(text);
      ev.preventDefault();
    };

    watch(color, () => {
      if (color.value.hex !== hex.value) {
        setHex(color.value.hex);
      }
    });

    return () => (
      <div class={nsColorPicker.e('input-group')}>
        <TuInput
          class={nsColorPicker.e('input-hex')}
          v-slots={{ prefix: () => '#' }}
          size="mini"
          disabled={props.disabled}
          modelValue={hex.value}
          onInput={setHex}
          onChange={onInputChange}
          onBlur={() => handlerChange}
          // @ts-ignore
          onPaste={onPaste}
        />
        {!props.disabledAlpha && (
          <TuColorPickerInputAlpha
            disabled={props.disabled}
            value={props.alpha}
            onChange={props.onAlphaChange}
          />
        )}
      </div>
    );
  }
});
</script>
