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
    <tu-color-picker v-model="value" />
    <br />
    <br />
    <tu-color-picker v-model="value" disabled />
    <br />
    <br />
    <tu-color-picker size="mini" v-model="value" />
    <br />
    <br />
    <tu-color-picker size="small" v-model="value" />
    <br />
    <br />
    <tu-color-picker size="large" v-model="value" />
    <br />
    <br />
    <tu-color-picker defaultValue="#165DFF" showText disabledAlpha />
    <br />
    <br />
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
  ArrowDown,
  Menu,
  Fold,
  Expand,
  Tools,
  UploadFilled,
  Promotion,
  House
} from '@tu-view-plus/icons-vue';
import type { FormInstance, FormRules } from '../packages/components/src/form';

const form = reactive({
  name: '',
  region: ''
});

const ruleFormRef = ref<FormInstance>();
const value = ref('#165DFF');

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

console.log('effect', effect);

onMounted(() => {});
</script>
<style lang="scss"></style>
