<script lang="tsx">
import { defineComponent, computed } from 'vue';
import { colorPickerPanelProps } from './color-picker-panel';
import { useNamespace, useLocale, useState } from '@tu-view-plus/hooks';
import { hexToRgb, rgbToHsv } from '@tu-view-plus/utils';
import TuColorPickerPalette from './color-picker-palette.vue';
import TuColorPickerControlBar from './color-picker-control-bar.vue';
import TuSelect from '../../select';
import TuColorPickerInputRgb from './color-picker-input-rgb.vue';
import TuColorPickerInputHex from './color-picker-input-hex.vue';
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

    const renderInput = () => {
      const commonProps = {
        color: props.color,
        alpha: props.alpha,
        disabled: props.disabled,
        disabledAlpha: props.disabledAlpha,
        onHsvChange: props.onHsvChange,
        onAlphaChange: props.onAlphaChange
      };
      if (format.value === 'rgb') {
        return <TuColorPickerInputRgb {...commonProps} />;
      }
      return <TuColorPickerInputHex {...commonProps} />;
    };

    const renderColorBlock = (color: string) => {
      return (
        <div
          key={color}
          class={nsColorPicker.e('color-block')}
          style={{ backgroundColor: color }}
          onClick={() => onHexInputChange(color)}
        >
          <div
            class={nsColorPicker.e('block')}
            style={{ backgroundColor: color }}
          />
        </div>
      );
    };

    const renderColorSection = (text: string, colors: string[] | undefined) => {
      <div class={nsColorPicker.e('colors-section')}>
        <div class={nsColorPicker.e('colors-text')}>{text}</div>
        <div class={nsColorPicker.e('colors-wrapper')}>
          {colors?.length ? (
            <div class={nsColorPicker.e('colors-list')}>
              {colors.map(renderColorBlock)}
            </div>
          ) : (
            <span class={nsColorPicker.e('colors-empty')}>
              {t('colorPicker.empty')}
            </span>
          )}
        </div>
      </div>;
    };

    const renderColorSec = () => {
      if (props.showHistory || props.showPreset) {
        return (
          <div class={nsColorPicker.e('panel-colors')}>
            {props.showHistory &&
              renderColorSection(t('colorPicker.history'), props.historyColors)}
            {props.showPreset &&
              renderColorSection(t('colorPicker.preset'), props.presetColors)}
          </div>
        );
      }
      return null;
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
              <div>
                <TuColorPickerControlBar
                  type="hue"
                  x={hsv.value.h}
                  color={props.color}
                  colorString={props.colorString}
                  onChange={(h) =>
                    props.onHsvChange?.({ h, s: hsv.value.s, v: hsv.value.v })
                  }
                />
                {!props.disabledAlpha && (
                  <TuColorPickerControlBar
                    type="alpha"
                    x={props.alpha}
                    color={props.color}
                    colorString={props.colorString}
                    onChange={props.onAlphaChange}
                  />
                )}
              </div>
              <div
                class={nsColorPicker.e('cotrol-preview')}
                style={{ backgroundColor: props.colorString }}
              />
            </div>
            <div class={nsColorPicker.e('input-wrapper')}>
              <TuSelect
                class={nsColorPicker.e('select')}
                size="mini"
                trigger-props={{ class: nsColorPicker.e('select-popup') }}
                options={[
                  {
                    value: 'hex',
                    label: 'Hex'
                  },
                  {
                    value: 'rgb',
                    label: 'RGB'
                  }
                ]}
                modelValue={format.value}
                onChange={onChange}
              />
              {renderInput()}
            </div>
            {renderColorSec()}
          </div>
        </div>
      );
    };
  }
});
</script>
