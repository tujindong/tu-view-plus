<template>
  <div
    role="slider"
    :id="inputId"
    :class="rateClasses"
    :aria-label="!isLabeledByFormItem ? label || 'rating' : undefined"
    :aria-labelledby="
      isLabeledByFormItem ? formItemContext?.labelId : undefined
    "
    :aria-valuenow="currentValue"
    :aria-valuetext="text || undefined"
    aria-valuemin="0"
    :aria-valuemax="max"
    tabindex="0"
    :style="rateStyles"
    @keydown="handleKey"
  >
    <span
      v-for="(item, key) in max"
      :key="key"
      :class="nsRate.e('item')"
      @mousemove="handleSetCurrentValue(item, $event)"
      @mouseleave="handleResetCurrentValue"
      @click="handleSelectValue(item)"
    >
      <tu-icon
        :class="[
          nsRate.e('icon'),
          { hover: hoverIndex === item },
          nsRate.is('active', item <= currentValue)
        ]"
      >
        <template v-if="!showDecimalIcon(item)">
          <component :is="activeComponent" v-show="item <= currentValue" />
          <component :is="voidComponent" v-show="!(item <= currentValue)" />
        </template>

        <template v-if="showDecimalIcon(item)">
          <component
            :is="voidComponent"
            :class="[nsRate.em('decimal', 'box')]"
          />
          <tu-icon
            :style="decimalStyle"
            :class="[nsRate.e('icon'), nsRate.e('decimal')]"
          >
            <component :is="decimalIconComponent" />
          </tu-icon>
        </template>
      </tu-icon>
    </span>
    <span
      v-if="showText || showScore"
      :class="nsRate.e('text')"
      :style="{ color: textColor }"
    >
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, markRaw, ref, watch } from 'vue';
import { useNamespace } from '@tu-view-plus/hooks';
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@tu-view-plus/constants';
import { hasClass, isArray, isObject, isString } from '@tu-view-plus/utils';
import {
  formItemContextKey,
  useFormDisabled,
  useFormItemInputId,
  useFormSize
} from '../../form';
import { TuIcon } from '../../icon';
import { rateEmits, rateProps } from './rate';
import '../style/rate.scss';

import type { iconPropType } from '@tu-view-plus/utils';
import type { CSSProperties, Component } from 'vue';

defineOptions({
  name: 'TuRate'
});

const props = defineProps(rateProps);
const emit = defineEmits(rateEmits);

const nsRate = useNamespace('rate');

const formItemContext = inject(formItemContextKey, undefined);
const rateSize = useFormSize();
const isDisabledRate = useFormDisabled();
const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext
});

const currentValue = ref(props.modelValue);
const hoverIndex = ref(-1);
const pointerAtLeftHalf = ref(true);

const rateClasses = computed(() => ({
  [nsRate.b()]: true,
  [nsRate.m(rateSize.value)]: true,
  [nsRate.is('disabled')]: isDisabledRate.value
}));

const rateStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  styles['--rate-void-color'] = props.voidColor;
  styles['--rate-disabled-void-color'] = props.disabledVoidColor;
  styles['--rate-fill-color'] = activeColor.value;
  return styles;
});

const getValueFromMap = <T>(
  value: number,
  map: Record<string, T | { excluded?: boolean; value: T }>
) => {
  const isExcludedObject = (
    val: unknown
  ): val is { excluded?: boolean } & Record<any, unknown> => isObject(val);

  const matchedKeys = Object.keys(map)
    .map((key) => +key)
    .filter((key) => {
      const val = map[key];
      const excluded = isExcludedObject(val) ? val.excluded : false;
      return excluded ? value < key : value <= key;
    })
    .sort((a, b) => a - b);
  const matchedValue = map[matchedKeys[0]];
  return (isExcludedObject(matchedValue) && matchedValue.value) || matchedValue;
};

const text = computed(() => {
  let result = '';
  if (props.showScore) {
    result = props.scoreTemplate.replace(
      /\{\s*value\s*\}/,
      isDisabledRate.value ? `${props.modelValue}` : `${currentValue.value}`
    );
  } else if (props.showText) {
    result = props.texts[Math.ceil(currentValue.value) - 1];
  }
  return result;
});

const valueDecimal = computed(
  () => props.modelValue * 100 - Math.floor(props.modelValue) * 100
);

const colorMap = computed(() =>
  isArray(props.colors)
    ? {
        [props.lowThreshold]: props.colors[0],
        [props.highThreshold]: { value: props.colors[1], excluded: true },
        [props.max]: props.colors[2]
      }
    : props.colors
);

const activeColor = computed(() => {
  const color = getValueFromMap(currentValue.value, colorMap.value);
  return isObject(color) ? '' : color;
});

const decimalStyle = computed(() => {
  let width = '';
  if (isDisabledRate.value) {
    width = `${valueDecimal.value}%`;
  } else if (props.allowHalf) {
    width = '50%';
  }
  return {
    color: activeColor.value,
    width
  };
});

const componentMap = computed(() => {
  let icons = isArray(props.icons) ? [...props.icons] : { ...props.icons };
  icons = markRaw(icons) as
    | Array<string | Component>
    | Record<number, string | Component>;
  return isArray(icons)
    ? {
        [props.lowThreshold]: icons[0],
        [props.highThreshold]: {
          value: icons[1],
          excluded: true
        },
        [props.max]: icons[2]
      }
    : icons;
});

const decimalIconComponent = computed(() =>
  getValueFromMap(props.modelValue, componentMap.value)
);

const voidComponent = computed(() =>
  isDisabledRate.value
    ? isString(props.disabledVoidIcon)
      ? props.disabledVoidIcon
      : (markRaw(props.disabledVoidIcon) as typeof iconPropType)
    : isString(props.voidIcon)
    ? props.voidIcon
    : (markRaw(props.voidIcon) as typeof iconPropType)
);

const activeComponent = computed(() =>
  getValueFromMap(currentValue.value, componentMap.value)
);

const showDecimalIcon = (item: number) => {
  const showWhenDisabled =
    isDisabledRate.value &&
    valueDecimal.value > 0 &&
    item - 1 < props.modelValue &&
    item > props.modelValue
  const showWhenAllowHalf =
    props.allowHalf &&
    pointerAtLeftHalf.value &&
    item - 0.5 <= currentValue.value &&
    item > currentValue.value
  return showWhenDisabled || showWhenAllowHalf
};

const emitValue = (value: number) => {
  if (props.clearable && value === props.modelValue) {
    value = 0;
  }

  emit(UPDATE_MODEL_EVENT, value);
  if (props.modelValue !== value) {
    emit('change', value);
  }
};

const handleSelectValue = (value: number) => {
  if (isDisabledRate.value) {
    return;
  }
  if (props.allowHalf && pointerAtLeftHalf.value) {
    emitValue(currentValue.value);
  } else {
    emitValue(value);
  }
};

const handleKey = (e: KeyboardEvent) => {
  if (isDisabledRate.value) {
    return
  }
  let _currentValue = currentValue.value
  const code = e.code
  if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
    if (props.allowHalf) {
      _currentValue += 0.5
    } else {
      _currentValue += 1
    }
    e.stopPropagation()
    e.preventDefault()
  } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
    if (props.allowHalf) {
      _currentValue -= 0.5
    } else {
      _currentValue -= 1
    }
    e.stopPropagation()
    e.preventDefault()
  }
  _currentValue = _currentValue < 0 ? 0 : _currentValue
  _currentValue = _currentValue > props.max ? props.max : _currentValue
  emit(UPDATE_MODEL_EVENT, _currentValue)
  emit('change', _currentValue)
  return _currentValue
};

const handleSetCurrentValue = (value: number, event?: MouseEvent) => {
  if (isDisabledRate.value) {
    return
  }
  if (props.allowHalf && event) {
    // TODO: use cache via computed https://github.com/element-plus/element-plus/pull/5456#discussion_r786472092
    let target = event.target as HTMLElement
    if (hasClass(target, nsRate.e('item'))) {
      target = target.querySelector(`.${nsRate.e('icon')}`)!
    }
    if (target.clientWidth === 0 || hasClass(target, nsRate.e('decimal'))) {
      target = target.parentNode as HTMLElement
    }
    pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth
    currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value
  } else {
    currentValue.value = value
  }
  hoverIndex.value = value
};

const handleResetCurrentValue = () => {
  if (isDisabledRate.value) {
    return
  }
  if (props.allowHalf) {
    pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue)
  }
  currentValue.value = props.modelValue
  hoverIndex.value = -1
};

watch(
  () => props.modelValue,
  (val) => {
    currentValue.value = val;
    pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
  }
);

if (!props.modelValue) {
  emit(UPDATE_MODEL_EVENT, 0);
}

defineExpose({
  /** @description set current value */
  handleSetCurrentValue,
  /** @description reset current value */
  handleResetCurrentValue
});
</script>
