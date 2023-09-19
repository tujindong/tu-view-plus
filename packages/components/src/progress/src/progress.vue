<template>
  <div
    role="progressbar"
    :class="classes"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div v-if="type === 'line'" :class="nsProgressBar.b()">
      <div :class="lineOuterClasses" :style="{ height: `${strokeWidth}px` }">
        <div :class="barInnerClasses" :style="barStyle">
          <div
            v-if="(showText || $slots.default) && textInside"
            :class="nsProgressBar.e('innerText')"
          >
            <slot :percentage="percentage">
              <span>{{ content }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else :class="nsProgressCircle.b()" :style="{ height: width + 'px', width: width + 'px' }">
      <div v-if="type == 'circle'" :class="circleOuterClasses" :style="circleOuterStyles"></div>
      <svg viewBox=" 0 0 100 100" :class="nsProgressCircle.e('inner')">
        <defs>
          <radialGradient
            :id="`gradient-${id}`"
            cx="50%"
            cy="50%"
            r="60%"
            fx="50%"
            fy="50%"
          >
            <stop offset="30%" :stop-color="stroke" />
            <stop offset="100%" :stop-color="stroke" />
          </radialGradient>
        </defs>
        <path
          :class="nsProgressCircle.m('track')"
          :d="trackPath"
          :stroke="type == 'dashboard' ? '#c8d0e761' : ''"
          :stroke-width="relativeStrokeWidth"
          :style="trailPathStyle"
          fill="none"
        ></path>
        <path
          :class="nsProgressCircle.m('path')"
          :d="trackPath"
          :stroke="`url(#gradient-${id})`"
          :stroke-width="percentage ? relativeStrokeWidth : 0"
          :stroke-linecap="strokeLinecap"
          :style="circlePathStyle"
          fill="none"
        ></path>
      </svg>
    </div>
    <div
      v-if="(showText || $slots.default) && !textInside"
      :class="nsProgress.e('text')"
      :style="{ fontSize: `${progressTextSize}px` }"
    >
      <slot :percentage="percentage">
        <span v-if="!status">{{ content }}</span>
        <tu-icon v-else>
          <component :is="statusIcon" />
        </tu-icon>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import { TuIcon } from '../../icon';
import { progressProps, ProgressColor } from './progress';
import { useNamespace } from '@tu-view-plus/hooks';
import { isFunction, isString } from '@tu-view-plus/utils';
import {
  WarningFilled,
  CircleCheck,
  CircleClose,
  Check,
  Close
} from '@tu-view-plus/icons-vue';
import '../style/progress.scss';

defineOptions({
  name: 'TuProgress'
});

const STATUS_COLOR_MAP: Record<string, string> = {
  success: '#13ce66',
  exception: '#ff4949',
  warning: '#e6a23c',
  default: '#20a0ff'
};

const id = computed(() => {
  return Math.floor(Math.random() * 10000);
});

const props = defineProps(progressProps);

const nsProgress = useNamespace('progress');
const nsProgressBar = useNamespace('progress-bar');
const nsProgressCircle = useNamespace('progress-circle');

const circleOuterStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  styles['--stroke-width'] = `${ 2 * props.strokeWidth}px`;
  return styles;
});

const classes = computed(() => ({
  [nsProgress.b()]: true,
  [nsProgress.m(props.type)]: props.type,
  [nsProgress.m('without-text')]: !props.showText,
  [nsProgress.m('text-inside')]: props.textInside,
  [nsProgress.is(props.status)]: props.status
}));

const lineOuterClasses = computed(() => ({
  [nsProgressBar.e('outer')]: true,
  [nsProgressBar.is('narrow')]: props.strokeWidth < 8
}));

const barInnerClasses = computed(() => ({
  [nsProgressBar.e('inner')]: true,
  [nsProgressBar.em('inner', 'indeterminate')]: props.indeterminate,
  [nsProgressBar.em('inner', 'striped')]: props.striped,
  [nsProgressBar.em('inner', 'striped-flow')]: props.stripedFlow
}));

const circleOuterClasses = computed(() => ({
  [nsProgressCircle.e('outer')]: true,
  [nsProgressCircle.is('narrow')]: props.strokeWidth < 8
}));

const barStyle = computed<CSSProperties>(() => ({
  width: `${props.percentage}%`,
  animationDuration: `${props.duration}s`,
  backgroundColor: getCurrentColor(props.percentage)
}));

const getCurrentColor = (percentage: number) => {
  const { color } = props;
  if (isFunction(color)) {
    return color(percentage);
  } else if (isString(color)) {
    return color;
  } else {
    const colorItem = getColors(color);
    for (const item of colorItem) {
      if (item.percentage > percentage) return item.color;
    }
    return colorItem[colorItem.length - 1]?.color;
  }
};

const getColors = (color: ProgressColor[]) => {
  const span = 100 / color.length;
  const seriesColors = color.map((item, index) => {
    if (isString(item)) {
      return {
        color: item,
        percentage: (index + 1) * span
      };
    }
    return item;
  });
  return seriesColors.sort((a, b) => a.percentage - b.percentage);
};

const content = computed(() => props.format(props.percentage));

const relativeStrokeWidth = computed(() =>
  ((props.strokeWidth / props.width) * 100).toFixed(1)
);

const radius = computed(() => {
  if (['circle', 'dashboard'].includes(props.type)) {
    return Number.parseInt(
      `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
      10
    );
  }
  return 0;
});

const trackPath = computed(() => {
  const radiusValue = radius.value;
  const isDashboard = props.type === 'dashboard';
  return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${radiusValue}
          a ${radiusValue} ${radiusValue} 0 1 1 0 ${isDashboard ? '-' : ''}${
    radiusValue * 2
  }
          a ${radiusValue} ${radiusValue} 0 1 1 0 ${isDashboard ? '' : '-'}${
    radiusValue * 2
  }
          `;
});

const perimeter = computed(() => 2 * Math.PI * radius.value);

const rate = computed(() => (props.type === 'dashboard' ? 0.75 : 1));

const strokeDashoffset = computed(() => {
  const offset = (-1 * perimeter.value * (1 - rate.value)) / 2;
  return `${offset}px`;
});

const stroke = computed(() => {
  let ret: string;
  if (props.color) {
    ret = getCurrentColor(props.percentage);
  } else {
    ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
  }
  return ret;
});

const trailPathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value
}));

const circlePathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${
    perimeter.value * rate.value * (props.percentage / 100)
  }px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
  transition:
    'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s'
}));

const progressTextSize = computed(() => {
  return props.type === 'line'
    ? 12 + props.strokeWidth * 0.4
    : props.width * 0.111111 + 2;
});

const statusIcon = computed(() => {
  if (props.status === 'warning') {
    return WarningFilled;
  }
  if (props.type === 'line') {
    return props.status === 'success' ? CircleCheck : CircleClose;
  } else {
    return props.status === 'success' ? Check : Close;
  }
});
</script>
