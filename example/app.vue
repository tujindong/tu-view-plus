<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <br />
    <br />
    <br />

    <tu-range-picker
      allowClear
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      :time-picker-props="{ defaultValue: '09:09:06' }"
    />

    <br />
    <br />
    <tu-button
      :style="{
        padding: '0 12px',
        height: '30px',
        lineHeight: '30px',
        marginBottom: '4px'
      }"
      type="primary"
      @click="collapsed = !collapsed"
    >
      {{ collapsed ? '展开' : '收起' }}
    </tu-button>
    <br />
    <br />
    <br />
    <tu-switch class="ml-2" v-model="value2" :effect="effect" />
    <br />
    <br />
    <tu-radio-group class="mb-2" v-model="effect" type="button" size="small">
      <tu-radio label="default">default</tu-radio>
      <tu-radio label="flat">flat</tu-radio>
      <tu-radio label="outset">outset</tu-radio>
      <tu-radio label="inset">inset</tu-radio>
      <tu-radio label="bordered">bordered</tu-radio>
      <tu-radio label="outlined">outlined</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-menu mode="horizontal" :default-selected-keys="['1']">
      <tu-menu-item key="1">导航一</tu-menu-item>
      <tu-menu-item key="2">导航二</tu-menu-item>
      <tu-menu-item key="3">导航三</tu-menu-item>
      <tu-sub-menu key="4" title="导航四">
        <tu-menu-item key="4-1">选项一</tu-menu-item>
        <tu-menu-item key="4-2">选项二</tu-menu-item>
      </tu-sub-menu>
    </tu-menu>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, h, reactive } from 'vue';
import { useToggle } from '@vueuse/core';
import dayjs from 'dayjs';
import {
  CircleClose,
  SuccessFilled,
  Star,
  User,
  Edit,
  Service,
  Search,
  ArrowLeft,
  ArrowRight,
  ArrowDown
} from '@tu-view-plus/icons-vue';
import type { FormInstance, FormRules } from '../packages/components/src/form';

const size = ref('medium');
const value = ref(false);
const collapseEffect = ref('outset');

const form = reactive({
  name: '',
  region: ''
});

const ruleFormRef = ref<FormInstance>();
const collapsed = ref(false);
const value2 = ref(false);
const popupVisible1 = ref(false);

const rules = reactive({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const effect = ref('default');

onMounted(() => {});
</script>
<style lang="scss">
.ml-2 {
  margin-left: 20px;
}

.layout-demo .tu-layout__header,
.layout-demo .tu-layout__footer,
.layout-demo .tu-layout__sider-children,
.layout-demo .tu-layout__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo .tu-layout__header,
.layout-demo .tu-layout__footer {
  height: 64px;
  background-color: teal;
}

.layout-demo .tu-layout__sider {
  width: 206px;
  background-color: palevioletred;
}

.layout-demo .tu-layout__content {
  background-color: olivedrab;
}

.menu-demo {
  width: 100%;
  height: 600px;
  padding: 200px;
  box-sizing: border-box;
  background-color: var(--color-neutral-2);
}

.menu-demo .tu-menu {
  width: 200px;
  height: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

.menu-demo .tu-menu :deep(.tu-menu-collapse-button) {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.menu-demo .tu-menu:not(.tu-menu-collapsed) :deep(.tu-menu-collapse-button) {
  right: 0;
  bottom: 8px;
  transform: translateX(50%);
}

.menu-demo .tu-menu:not(.tu-menu-collapsed)::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  background-color: inherit;
  border-radius: 50%;
  box-shadow: -4px 0 2px var(--color-bg-2), 0 0 1px rgba(0, 0, 0, 0.3);
  transform: translateX(50%);
}

.menu-demo .tu-menu.tu-menu-collapsed {
  width: 48px;
  height: auto;
  padding-top: 24px;
  padding-bottom: 138px;
  border-radius: 22px;
}

.menu-demo .tu-menu.tu-menu-collapsed :deep(.tu-menu-collapse-button) {
  right: 8px;
  bottom: 8px;
}
</style>
