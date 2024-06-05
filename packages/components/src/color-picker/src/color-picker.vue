<script lang="tsx">
import { defineComponent, computed, watch } from 'vue';
import { colorPickerProps, colorPickerEmits } from './color-picker';
import { useNamespace, useState } from '@tu-view-plus/hooks';
import {
  formatInputToHSVA,
  hsvToRgb,
  rgbToHex,
  rgbaToHex
} from '@tu-view-plus/utils';
import { useFormDisabled, useFormSize } from '../../form';
import { TuTrigger } from '../../trigger';
import TuColorPickerPanel from './color-picker-panel.vue';
import '../style/color-picker.scss';

import type { HSV } from './interface';

export default defineComponent({
  name: 'TuColorPicker',

  props: colorPickerProps,

  emits: colorPickerEmits,

  setup(props, { emit, slots }) {
    const nsColorPicker = useNamespace('color-picker');

    const colorPickerSize = useFormSize();
    const colorPickerDisabled = useFormDisabled();

    const mergeValue = computed(() => {
      return props.modelValue ?? props.defaultValue;
    });

    const formatInput = computed(() => {
      return formatInputToHSVA(mergeValue.value || '');
    });

    const [alpha, setAlpha] = useState(formatInput.value.a);

    const [hsv, setHsv] = useState({
      h: formatInput.value.h,
      s: formatInput.value.s,
      v: formatInput.value.v
    });

    watch(
      () => formatInput.value,
      (value) => {
        setAlpha(value.a);
        setHsv({
          h: value.h,
          s: value.s,
          v: value.v
        });
      }
    );

    const color = computed(() => {
      const rgb = hsvToRgb(hsv.value.h, hsv.value.s, hsv.value.v);
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      return {
        hsv: hsv.value,
        rgb,
        hex
      };
    });

    const colorString = computed(() => {
      const { r, g, b } = color.value.rgb;
      return `rgba(${r}, ${g}, ${b}, ${alpha.value.toFixed(2)})`;
    });

    const formatValue = computed(() => {
      const { r, g, b } = color.value.rgb;
      if (props.format === 'rgb') {
        return alpha.value < 1 && !props.disabledAlpha
          ? `rgba(${r}, ${g}, ${b}, ${alpha.value.toFixed(2)})`
          : `rgb(${r}, ${g}, ${b})`;
      }
      return alpha.value < 1 && !props.disabledAlpha
        ? `#${rgbaToHex(r, g, b, alpha.value)}`
        : `#${rgbToHex(r, g, b)}`;
    });

    const inputClasses = computed(() => ({
      [nsColorPicker.b()]: true,
      [nsColorPicker.m(colorPickerSize.value)]: colorPickerSize.value,
      [nsColorPicker.is('disabled')]: colorPickerDisabled.value
    }));

    watch(formatValue, (value) => {
      emit('update:modelValue', value);
      emit('change', value);
    });

    const onHsvChange = (_value: HSV) => {
      !colorPickerDisabled.value && setHsv(_value);
    };

    const onAlphaChange = (_value: number) => {
      !colorPickerDisabled.value && setAlpha(_value);
    };

    const onPopupVisibleChange = (visible: boolean) => {
      emit('popup-visible-change', visible, formatValue.value);
    };

    const renderInput = () => {
      return (
        <div class={inputClasses.value}>
          <div
            class={nsColorPicker.e('preview')}
            style={{ backgroundColor: formatValue.value }}
          />
          {props.showText && (
            <div class={nsColorPicker.e('value')}>{formatValue.value}</div>
          )}
          <input
            class={nsColorPicker.e('input')}
            value={formatValue.value}
            disabled={colorPickerDisabled.value}
          />
        </div>
      );
    };

    const renderPanel = () => {
      return (
        <TuColorPickerPanel
          color={color.value}
          alpha={alpha.value}
          colorString={colorString.value}
          historyColors={props.historyColors}
          presetColors={props.presetColors}
          showHistory={props.showHistory}
          showPreset={props.showPreset}
          disabled={colorPickerDisabled.value}
          disabledAlpha={props.disabledAlpha}
          format={props.format}
          onHsvChange={onHsvChange}
          onAlphaChange={onAlphaChange}
        />
      );
    };

    return () => {
      return props.hideTrigger ? (
        renderPanel()
      ) : (
        <TuTrigger
          v-slots={{ content: renderPanel }}
          trigger="click"
          position="bl"
          animationName="slide-dynamic-origin"
          popupOffset={10}
          disabled={colorPickerDisabled.value}
          {...props.triggerProps}
          onPopupVisibleChange={onPopupVisibleChange}
        >
          {slots.default ? slots.default() : renderInput()}
        </TuTrigger>
      );
    };
  }
});
</script>
