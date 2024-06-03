<script lang="tsx">
import { defineComponent, computed } from 'vue';
import { colorPickerControlBarProps } from './color-picker-control-bar';
import { useNamespace } from '@tu-view-plus/hooks';
import { useControlBlock } from './hooks/use-control-block';
import '../style/color-picker.scss';

export default defineComponent({
  name: 'TuColorPickerControlBar',

  props: colorPickerControlBarProps,

  setup(props) {
    const nsColorPicker = useNamespace('color-picker');

    const rgb = computed(() => props.color.rgb);

    const { blockRef, handlerRef, onMouseDown } = useControlBlock({
      value: [props.x, 0],
      onChange: (pos) => props.onChange?.(pos[0])
    });

    const renderHandler = () => {
      return (
        <div
          ref={handlerRef}
          class={nsColorPicker.e('handler')}
          style={{
            left: `${props.x * 100}%`,
            color: props.colorString
          }}
        />
      );
    };

    return () => {
      if (props.type === 'alpha') {
        return (
          <div
            ref={blockRef}
            class={[
              nsColorPicker.e('control-bar'),
              nsColorPicker.em('control-bar', 'alpha')
            ]}
            style={{
              background: `linear-gradient(to right, rgba(0, 0, 0, 0), rgb(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b}))`
            }}
            onMousedown={onMouseDown}
          >
            {renderHandler()}
          </div>
        );
      }

      return (
        <div
          ref={blockRef}
          class={[
            nsColorPicker.e('control-bar'),
            nsColorPicker.em('control-bar', 'hue')
          ]}
          onMousedown={onMouseDown}
        >
          {renderHandler()}
        </div>
      );
    };
  }
});
</script>
