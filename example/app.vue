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
    <tu-tree-select
      :data="treeData"
      placeholder="Please select ..."
    ></tu-tree-select>
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

const loop = (path = '1', level = 2) => {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i + 1}`;
    const treeNode = {
      title: key,
      key
    };

    if (level > 0) {
      treeNode.children = loop(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
};

const treeRef = ref();
const treeData = loop();

const scrollIntoView = () => {
  treeRef.value && treeRef.value.scrollIntoView({ key: '1-6-6-6' });
};

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

onMounted(() => {});
</script>
<style lang="scss">
.demo-button-row {
  align-items: baseline;
  margin-bottom: 20px;
}

.tu-carousel-item:first-child {
  background-color: #875c00;
}

.tu-carousel-item:nth-child(2n) {
  background-color: #035880;
}

.tu-carousel-item:last-child {
  background-color: #2a3c85;
}

.tu-carousel h3 {
  text-align: center;
  line-height: 240px;
  margin-top: 0;
  color: #fff;
}
</style>
