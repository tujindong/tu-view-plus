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

    <tu-link disabled>默认链接</tu-link>
    <tu-link type="info">信息链接</tu-link>
    <tu-link type="primary">主要链接</tu-link>
    <tu-link type="success">成功链接</tu-link>
    <tu-link type="warning">警告链接</tu-link>
    <tu-link type="danger">危险链接</tu-link>

    <br />
    <br />
    <tu-date-picker />
    <br />
    <br />
    <tu-month-picker />
    <br />
    <br />
    <tu-year-picker />
    <br />
    <br />
    <tu-quarter-picker />
    <br />
    <br />
    <tu-week-picker />
    <br />
    <br />
    <tu-date-picker
      show-time
      :time-picker-props="{ defaultValue: '09:09:06' }"
      format="YYYY-MM-DD HH:mm:ss"
      @change="() => {}"
      @select="() => {}"
      @ok="() => {}"
    />
    <br />
    <br />
    <div style="height: 800px"></div>

    <tu-button circle></tu-button>
    <tu-carousel
      :style="{ height: '240px' }"
      :default-current="2"
      :indicator-type="indicatorType"
      indicator-position="outer"
    >
      <tu-carousel-item v-for="image in images">
        <img
          :src="image"
          :style="{
            width: '100%'
          }"
        />
      </tu-carousel-item>
    </tu-carousel>
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
const indicatorType = ref('dot');
const indicatorPosition = ref('bottom');
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp'
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
