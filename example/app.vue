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

    <br />
    <br />
    <tu-button :style="{
      padding: '0 12px',
      height: '30px',
      lineHeight: '30px',
      marginBottom: '4px'
    }" type="primary" @click="collapsed = !collapsed">
      {{ collapsed ? '展开' : '收起' }}
    </tu-button>
    <br />
    <br />
    <tu-radio-group class="mb-2" v-model="effect" type="button" size="small">
      <tu-radio label="default">default</tu-radio>
      <tu-radio label="flat">flat</tu-radio>
      <tu-radio label="outset">outset</tu-radio>
      <tu-radio label="inset">inset</tu-radio>
      <tu-radio label="bordered">bordered</tu-radio>
      <tu-radio label="outline">outline</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-menu :style="{
      width: '100%',
      borderRadius: '4px'
    }" :default-open-keys="['0']" :default-selected-keys="['0_2']" show-collapse-button :effect="effect">
      <tu-sub-menu key="0">
        <template #icon>
          <tu-icon>
            <Star />
          </tu-icon>
        </template>
        <template #title>NavigationNavigationNavigation 1</template>
        <tu-menu-item key="0_0">Menu 1</tu-menu-item>
        <tu-menu-item key="0_1">Menu 2</tu-menu-item>
        <tu-menu-item key="0_2">Menu 3</tu-menu-item>
        <tu-menu-item key="0_3">Menu 4</tu-menu-item>
      </tu-sub-menu>
      <tu-sub-menu key="1">
        <template #icon>
          <tu-icon>
            <Star />
          </tu-icon>
        </template>
        <template #title>Navigation 2</template>
        <tu-menu-item key="1_0">Menu 1</tu-menu-item>
        <tu-menu-item key="1_1">Menu 2</tu-menu-item>
        <tu-menu-item key="1_2">Menu 3</tu-menu-item>
      </tu-sub-menu>
      <tu-sub-menu key="2">
        <template #title>Navigation 3</template>
        <tu-menu-item key="2_0">Menu 1</tu-menu-item>
        <tu-menu-item key="2_1">Menu 2</tu-menu-item>
        <tu-sub-menu key="2_2" title="Navigation 4">
          <tu-menu-item key="2_2_0">Menu 1</tu-menu-item>
          <tu-menu-item key="2_2_1">Menu 2</tu-menu-item>
        </tu-sub-menu>
      </tu-sub-menu>
    </tu-menu>
    <br />
    <br />
    <br />
    <br />
    <tu-image
      width="200"
      src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png"
    />
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

onMounted(() => { });
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
</style>
