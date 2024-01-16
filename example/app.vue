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
    <tu-month-picker
      allowClear
      :shortcuts="[
        {
          label: '上一个月',
          value: () => dayjs().subtract(1, 'month')
        },
        {
          label: '六个月以后',
          value: () => dayjs().add(6, 'month')
        },
        {
          label: '两年以后',
          value: () => dayjs().add(2, 'year')
        }
      ]"
    />
    <br />
    <br />
    <br />
    <br />
    <br />
    mini
    <br />
    <br />
    <tu-date-picker
      size="mini"
      show-time
      placeholder="Please select"
      style="width: 500px"
    />
    <br />
    <br />
    <tu-month-picker size="mini" style="width: 500px" />
    <br />
    <br />
    <tu-year-picker size="mini" style="width: 500px" />
    <br />
    <br />
    <tu-quarter-picker size="mini" style="width: 500px" />
    <br />
    <br />
    <tu-week-picker size="mini" style="width: 500px" />
    <br />
    <br />
    <tu-range-picker
      size="mini"
      style="width: 500px"
      show-time
      :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
      format="YYYY-MM-DD HH:mm"
      @change="() => {}"
      @select="() => {}"
      @ok="() => {}"
    />
    <br />
    <br />
    small
    <br />
    <br />
    <tu-date-picker
      size="small"
      show-time
      placeholder="Please select"
      style="width: 500px"
    />
    <br />
    <br />
    medium
    <br />
    <br />
    <tu-date-picker
      size="medium"
      show-time
      placeholder="Please select"
      style="width: 500px"
    />
    <br />
    <br />
    large
    <br />
    <br />
    <tu-date-picker
      size="large"
      show-time
      placeholder="Please select"
      style="width: 500px"
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
  ArrowRight
} from '@tu-view-plus/icons-vue';
import type { FormInstance, FormRules } from '../packages/components/src/form';

const shortcuts = [
  {
    label: 'yesterday',
    value: () => dayjs().subtract(1, 'day')
  },
  {
    label: 'today',
    value: () => dayjs()
  },
  {
    label: 'a week later',
    value: () => dayjs().add(1, 'week')
  },
  {
    label: 'a month later',
    value: () => dayjs().add(1, 'month')
  },
  {
    label: '2 months later',
    value: () => dayjs().add(2, 'month')
  }
];

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
