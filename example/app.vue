<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>

    <br />
    <br />
    <tu-input placeholder="请选择" allow-clear :model-value="1233"></tu-input>
    <br />
    <br />
    <tu-select v-model="form.region" allow-clear>
      <tu-select-option label="Zone one" value="shanghai" />
      <tu-select-option label="Zone two" value="beijing" />
    </tu-select>
    <br />
    <br />
    <tu-time-picker size="medium" allowClear />
    <br />
    <br />
    <tu-time-picker
      type="time-range"
      :placeholder="['开始时间', '结束时间']"
      allowClear
    />
    <br />
    <br />
    <!-- <tu-radio-group v-model="size" label="size control">
      <tu-radio label="large">large</tu-radio>
      <tu-radio label="medium">medium</tu-radio>
      <tu-radio label="small">small</tu-radio>
      <tu-radio label="mini">mini</tu-radio>
    </tu-radio-group> -->
    <br />
    <br />
    <!-- <tu-form
      ref="ruleFormRef"
      :model="form"
      :rules="rules"
      :size="size"
      label-width="120px"
      label-position="right"
      requireAsteriskPosition="right"
    >
      <tu-form-item label="Activity name" prop="name">
        <tu-input v-model="form.name" placeholder="请输入" />
      </tu-form-item>
      <tu-form-item label="Activity zone" prop="region">
        <tu-select v-model="form.region" placeholder="请选择">
          <tu-select-option label="Zone one" value="shanghai" />
          <tu-select-option label="Zone two" value="beijing" />
        </tu-select>
      </tu-form-item>
      <tu-form-item>
        <tu-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </tu-button>
        <tu-button @click="resetForm(ruleFormRef)">Reset</tu-button>
      </tu-form-item>
    </tu-form> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style="height: 800px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, getCurrentInstance, h, reactive } from 'vue';
import { useToggle } from '@vueuse/core';
import {
  CircleClose,
  SuccessFilled,
  Star,
  User,
  Edit,
  Service,
  Search,
  ArrowLeft,
  ArrowRight
} from '@tu-view-plus/icons-vue';
import type { FormInstance, FormRules } from '../packages/components/src/form';

const size = ref('');

const form = reactive({
  name: '',
  region: ''
});

const ruleFormRef = ref<FormInstance>();

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
</script>
<style lang="scss">
.demo-button-row {
  align-items: baseline;
  margin-bottom: 20px;
}
</style>
