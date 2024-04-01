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
    <tu-menu
      :style="{
        width: '100%',
        height: '400px',
        borderRadius: '4px',
        background: '#f0f0f0'
      }"
      :default-open-keys="['0']"
      :default-selected-keys="['0_2']"
      :collapsed="collapsed"
      show-collapse-button
    >
      <tu-sub-menu key="0">
        <template #icon>
          <tu-icon> <Star /> </tu-icon>
        </template>
        <template #title>NavigationNavigationNavigation 1</template>
        <tu-menu-item key="0_0">Menu 1</tu-menu-item>
        <tu-menu-item key="0_1">Menu 2</tu-menu-item>
        <tu-menu-item key="0_2">Menu 3</tu-menu-item>
        <tu-menu-item key="0_3">Menu 4</tu-menu-item>
      </tu-sub-menu>
      <tu-sub-menu key="1">
        <template #icon>
          <tu-icon> <Star /> </tu-icon>
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

    <div class="layout-demo">
      <tu-layout style="height: 400px">
        <tu-layout-header>Header</tu-layout-header>
        <tu-layout-content>Content</tu-layout-content>
        <tu-layout-footer>Footer</tu-layout-footer>
      </tu-layout>
      <br />
      <tu-layout style="height: 400px">
        <tu-layout-header>Header</tu-layout-header>
        <tu-layout>
          <tu-layout-sider theme="dark">Sider</tu-layout-sider>
          <tu-layout-content>Content</tu-layout-content>
        </tu-layout>
        <tu-layout-footer>Footer</tu-layout-footer>
      </tu-layout>
      <br />
      <tu-layout style="height: 400px">
        <tu-layout-header>Header</tu-layout-header>
        <tu-layout>
          <tu-layout-content>Content</tu-layout-content>
          <tu-layout-sider>Sider</tu-layout-sider>
        </tu-layout>
        <tu-layout-footer>Footer</tu-layout-footer>
      </tu-layout>
      <br />
      <tu-layout style="height: 400px">
        <tu-layout-header>Header</tu-layout-header>
        <tu-layout>
          <tu-layout-sider style="width: 64px">Sider</tu-layout-sider>
          <tu-layout-sider style="width: 206px; margin-left: 1px"
            >Sider</tu-layout-sider
          >
          <tu-layout-content>Content</tu-layout-content>
        </tu-layout>
        <tu-layout-footer>Footer</tu-layout-footer>
      </tu-layout>
    </div>
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

onMounted(() => {});
</script>
<style lang="scss">
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: teal;
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: palevioletred;
}

.layout-demo :deep(.arco-layout-content) {
  background-color: olivedrab;
}
</style>
