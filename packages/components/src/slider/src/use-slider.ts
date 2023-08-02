import type { SliderProps } from './slider';

export function useSlider(props: SliderProps) {
  const onSliderWrapperPrevent = () => {};

  const handleSliderDown = () => {};

  return {
    onSliderWrapperPrevent,
    handleSliderDown
  };
}
