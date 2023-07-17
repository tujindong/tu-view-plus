<template>
  <div :class="classes" @click.prevent="handleValueSwitch">
    <input
      ref="input"
      type="checkbox"
      role="switch"
      :id="inputId"
      :name="name"
      :class="nsSwitch.e('input')"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      :tabindex="tabindex"
      :aria-checked="checked"
      :aria-disabled="switchDisabled"
      @change="handleChange"
      @keydown.enter="handleValueSwitch"
    />

    <!-- inactive -->
    <span
      v-if="!inlinePrompt && (inactiveIcon || inactiveText)"
      :class="labelLeftClasses"
    >
      <tu-icon v-if="inactiveIcon">
        <component :is="inactiveIcon" />
      </tu-icon>
      <span v-if="!inactiveIcon && inactiveText" :aria-hidden="checked">
        {{ inactiveText }}
      </span>
    </span>

    <!-- core -->
    <span
      ref="core"
      :class="nsSwitch.e('core')"
      :style="{ width: addUnit(width) }"
    >
      <div v-if="inlinePrompt" :class="nsSwitch.e('inner')">
        <template v-if="activeIcon || inactiveIcon">
          <tu-icon :class="nsSwitch.em('inner', 'icon')">
            <component :is="checked ? activeIcon : inactiveIcon" />
          </tu-icon>
        </template>

        <template v-else-if="activeText || inactiveText">
          <span :class="nsSwitch.em('inner', 'text')" :aria-hidden="!checked">
            {{ checked ? activeText : inactiveText }}
          </span>
        </template>
      </div>

      <div :class="nsSwitch.e('action')">
        <tu-icon v-if="loading" :class="nsSwitch.is('loading')">
          <Loading />
        </tu-icon>
      </div>
    </span>

    <!-- active -->
    <span
      v-if="!inlinePrompt && (activeIcon || activeText)"
      :class="labelRightClasses"
    >
      <tu-icon v-if="activeIcon">
        <component :is="activeIcon" />
      </tu-icon>
      <span v-if="!activeIcon && activeText" :aria-hidden="checked">
        {{ activeText }}
      </span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, shallowRef } from 'vue';
import { switchProps, switchEmits } from './switch';
import { useNamespace } from '@tu-view-plus/hooks';
import { addUnit } from '@tu-view-plus/utils';
import { TuIcon } from '../../icon';
import useSwitch from './use-switch';

import { Loading } from '@tu-view-plus/icons-vue';
import '../style/switch.scss';

defineOptions({
  name: 'TuSwitch'
});

const input = shallowRef<HTMLInputElement>();

const props = defineProps(switchProps);
const emit = defineEmits(switchEmits);

const nsSwitch = useNamespace('switch');

const {
  inputId,
  switchSize,
  switchDisabled,
  checked,
  focus,
  handleValueSwitch,
  handleChange
} = useSwitch(props, emit, input);

const classes = computed(() => ({
  [nsSwitch.b()]: true,
  [nsSwitch.m(switchSize.value)]: switchSize.value,
  [nsSwitch.m(props.type)]: props.type,
  [nsSwitch.is('disabled')]: switchDisabled.value,
  [nsSwitch.is('checked')]: checked.value
}));

const labelLeftClasses = computed(() => ({
  [nsSwitch.e('label')]: true,
  [nsSwitch.em('label', 'left')]: true,
  [nsSwitch.is('active')]: !checked.value
}));

const labelRightClasses = computed(() => ({
  [nsSwitch.e('label')]: true,
  [nsSwitch.em('label', 'right')]: true,
  [nsSwitch.is('active')]: checked.value
}));

onMounted(() => {
  input.value!.checked = checked.value;
});

defineExpose({
  focus,
  checked
});
</script>
