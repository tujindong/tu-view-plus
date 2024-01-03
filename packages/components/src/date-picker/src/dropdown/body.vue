<template>
  <div :class="nsPicker.e('body')">
    <div v-for="(row, rowIndex) in rows" :key="rowIndex" :class="rowClasses">
      <template v-for="(cell, colIndex) in row">
        <template v-if="isWeek && colIndex === 0">
          <div
            :key="colIndex"
            :class="[nsPicker.e('cell'), nsPicker.e('cell-week')]"
          >
            <div :class="nsPicker.e('date')">
              <div :class="nsPicker.e('date-value')">
                {{ cell.label }}
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            :key="colIndex"
            :class="getCellClassNames(cell)"
            @mouseenter="onCellMouseEnter(cell)"
            @mouseleave="onCellMouseLeave(cell)"
            @click="onCellClick(cell)"
          >
            <RenderFunction
              v-if="dateRender"
              :render-func="dateRender"
              :date="getDateValue(cell.value)"
            />
            <div v-else :class="nsPicker.e('date')">
              <div :class="nsPicker.e('date-value')">
                {{ cell.label }}
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, reactive } from 'vue';
import { bodyProps, bodyEmits } from './body';
import { useNamespace } from '@tu-view-plus/hooks';
import { RenderFunction } from '@tu-view-plus/constants';
import { getDateValue, isFunction } from '@tu-view-plus/utils';
import { useCellClassName } from '../hooks';
import { Cell } from '../interface';

defineOptions({
  name: 'TuBody'
});

const props = defineProps(bodyProps);
const emit = defineEmits(bodyEmits);

const nsPicker = useNamespace('picker');

const { value, disabledDate, isSameTime, mode, rangeValues } = toRefs(props);

const { getCellClassName } = useCellClassName(
  reactive({
    value,
    isSameTime,
    mode,
    rangeValues
  })
);

const isWeek = computed(() => mode?.value === 'week');

const rowClasses = computed(() => ({
  [nsPicker.e('row')]: true,
  [nsPicker.em('row', 'week')]: isWeek.value
}));

const isCellDisabled = (cellData: Cell) =>
  !!(
    isFunction(disabledDate?.value) &&
    disabledDate?.value(getDateValue(cellData.value))
  );

const getCellClassNames = (cellData: Cell) => {
  const disabled = isCellDisabled(cellData);
  return getCellClassName(cellData, disabled);
};

const onCellMouseEnter = (cellData: Cell) => {
  const disabled = isCellDisabled(cellData);
  if (disabled) return;
  emit('cell-mouse-enter', cellData);
};

const onCellMouseLeave = (cellData: Cell) => {
  const disabled = isCellDisabled(cellData);
  if (disabled) return;
  emit('cell-mouse-enter', cellData);
};

const onCellClick = (cellData: Cell) => {
  const disabled = isCellDisabled(cellData);
  if (disabled) return;
  emit('cell-click', cellData);
};
</script>
