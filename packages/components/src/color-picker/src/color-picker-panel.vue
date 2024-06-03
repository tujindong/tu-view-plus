<script lang="tsx">
import { defineComponent, computed } from 'vue';
import { colorPickerPanelProps } from './color-picker-panel';
import { useNamespace, useLocale, useState } from '@tu-view-plus/hooks';
import { hexToRgb, rgbToHsv } from '@tu-view-plus/utils';
import TuColorPickerPalette from './color-picker-palette.vue';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerPanel',

  props: colorPickerPanelProps,

  setup(props) {
    const { t } = useLocale();

    const nsColorPicker = useNamespace('color-picker');

    const hsv = computed(() => props.color.hsv);

    const [format, setFormat] = useState<'hex' | 'rgb'>(props.format || 'hex');

    const onChange = (value: any) => setFormat(value);

    const onHexInputChange = (value: string) => {
      const _rgb = hexToRgb(value) || { r: 255, g: 0, b: 0 };
      const _hsv = rgbToHsv(_rgb.r, _rgb.g, _rgb.b);
      props.onHsvChange?.(_hsv);
    };

    return () => {
      return (
        <div
          class={{
            [nsColorPicker.e('panel')]: true,
            [nsColorPicker.is('disabled')]: props.disabled
          }}
        >
          <TuColorPickerPalette
            color={props.color}
            onChange={(s, v) => props.onHsvChange?.({ h: hsv.value.h, s, v })}
          />
          <div class={nsColorPicker.e('panel-control')}>
            <div class={nsColorPicker.e('control-wrapper')}>
              <div></div>
            </div>
          </div>
        </div>
      );
    };
  }
});
</script>
