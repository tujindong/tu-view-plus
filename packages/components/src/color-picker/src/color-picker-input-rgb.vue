<script lang="tsx">
import { defineComponent, toRefs } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { rgbToHsv } from '@tu-view-plus/utils';
import { colorPickerInputRgbProps } from './color-picker-input-rgb';
import TuInputNumber from '../../input-number';
import TuColorPickerInputAlpha from './color-picker-input-alpha.vue';
import '../style/color-picker.scss';

import type { RGB } from './interface';

export default defineComponent({
  name: 'TuColorPickerInputRgb',

  props: colorPickerInputRgbProps,

  setup(props, { slots }) {
    const { color } = toRefs(props);

    const nsColorPicker = useNamespace('color-picker');

    const handleChange = (value: Partial<RGB>) => {
      const newRGB = { ...color.value.rgb, ...value };
      const hsv = rgbToHsv(newRGB.r, newRGB.g, newRGB.b);
      props.onHsvChange?.(hsv);
    };

    return () => (
      <div class={nsColorPicker.e('input-group')}>
        {(['r', 'g', 'b'] as Array<keyof RGB>).map((channel) => (
          <TuInputNumber
            key={channel}
            size="mini"
            min={0}
            max={255}
            controls-position="right"
            disabled={props.disabled}
            modelValue={color.value.rgb[channel]}
            onChange={(val = 0) => handleChange({ [channel]: val })}
          />
        ))}
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
