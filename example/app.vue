<template>
  <div style="width: 100%">
    <br />
    <br />
    <tu-configProvider>
      <tu-button>provider按钮</tu-button>
    </tu-configProvider>
    <br />
    <br />
    <p>tree</p>
    <br />
    <br />
    <tu-tree
      multiple
      :data="treeData"
      :default-expanded-keys="['0-0-0']"
      :default-selected-keys="['0-0-1']"
    />
    <br />
    <br />
    <p>showLine</p>
    <br />
    <br />
    <tu-tree
      showLine
      :data="treeData"
      :default-expanded-keys="['0-0-0']"
      :default-selected-keys="['0-0-0', '0-0-1']"
    />
    <br />
    <p>loading</p>
    <br />
    <br />
    <tu-tree :data="treeData1" :load-more="loadMore" />

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
  ArrowRight
} from '@tu-view-plus/icons-vue';
import type { FormInstance, FormRules } from '../packages/components/src/form';

const treeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Leaf',
        key: '0-0-1'
      },
      {
        title: 'Branch 0-0-2',
        key: '0-0-2',
        disabled: true,
        children: [
          {
            title: 'Leaf',
            key: '0-0-2-1'
          },
          {
            title: 'Leaf',
            key: '0-0-2-2',
            disableCheckbox: true
          }
        ]
      }
    ]
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1',
        children: [
          {
            title: 'Leaf ',
            key: '0-1-1-1'
          },
          {
            title: 'Leaf ',
            key: '0-1-1-2'
          }
        ]
      },
      {
        title: 'Leaf',
        key: '0-1-2'
      }
    ]
  }
];

const treeData1 = ref([
  {
    title: 'Trunk 0-0',
    key: '0-0'
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1'
      }
    ]
  }
]);

const loadMore = (nodeData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      nodeData.children = [
        { title: `leaf`, key: `${nodeData.key}-1`, isLeaf: true }
      ];
      resolve();
    }, 1000);
  });
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
