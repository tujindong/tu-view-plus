<script lang="tsx">
import { defineComponent, computed, ref } from 'vue';
import { colorPickerPaletteProps } from './color-picker-palette';
import { useNamespace } from '@tu-view-plus/hooks';
import { useControlBlock } from './hooks/use-control-block';
import { hsvToRgb } from '@tu-view-plus/utils';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerPalette',

  props: colorPickerPaletteProps,

  setup(props) {
    const nsColorPicker = useNamespace('color-picker');

    const hsv = computed(() => props.color.hsv);

    const top = ref(1 - hsv.value.v);
    const left = ref(hsv.value.s);

    const { blockRef, handlerRef, onMouseDown } = useControlBlock({
      value: [hsv.value.s, 1 - hsv.value.v],
      onChange: (value) => {
        if (!props.disabled) {
          top.value = value[1];
          left.value = value[0];
        }
        props.onChange?.(value[0], 1 - value[1]);
      }
    });

    const hueColor = computed(() => {
      const rgb = hsvToRgb(hsv.value.h, 1, 1);
      return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    });

    return () => {
      return (
        <div
          ref={blockRef}
          class={nsColorPicker.e('palette')}
          style={{ backgroundColor: hueColor.value }}
          onMousedown={onMouseDown}
        >
          <div
            ref={handlerRef}
            class={nsColorPicker.e('handler')}
            style={{
              top: `${top.value * 100}%`,
              left: `${left.value * 100}%`
            }}
          ></div>
        </div>
      );
    };
  }
});
</script>
