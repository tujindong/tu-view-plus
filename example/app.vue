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
    <tu-form
      :model="form"
      :rules="rules"
      ref="ruleFormRef"
      label-width="auto"
      style="max-width: 600px"
    >
      <tu-form-item label="Activity name" prop="name">
        <tu-input v-model="form.name" placeholder="please select your zone" />
      </tu-form-item>
      <tu-form-item label="Activity zone" prop="region">
        <tu-select v-model="form.region" placeholder="please select your zone">
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
    </tu-form>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const ruleFormRef = ref();

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
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

const form = reactive({
  name: '',
  region: ''
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style lang="scss"></style>
