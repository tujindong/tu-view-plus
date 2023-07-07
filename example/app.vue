<template>
  <div style="padding-bottom: 500px">
    <br />
    <br />
    <tu-radio v-model="radio" :label="1">选项1</tu-radio>
    <tu-radio v-model="radio" :label="2">选项2</tu-radio>
    <br />
    <br />
    <tu-radio-group v-model="radio" type="border">
      <tu-radio :label="1">选项1</tu-radio>
      <tu-radio :label="2">选项2</tu-radio>
      <tu-radio :label="3">选项3</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-radio-group v-model="radio" type="button">
      <tu-radio :label="1">选项1</tu-radio>
      <tu-radio :label="2">选项2</tu-radio>
      <tu-radio :label="3">选项3</tu-radio>
    </tu-radio-group>
    <br />
    <br />
    <tu-input
      size="small"
      v-model="input"
      placeholder="请输入"
      :prefix-icon="Search"
    >
      <template #prepend>
        <span>123</span>
      </template>
      <template #append>
        <span>456</span>
      </template>
    </tu-input>

    <br />
    <br />
    <tu-input placeholder="请输入" :validateEvent="true"></tu-input>
    <br />
    <br />
    <tu-input size="mini" placeholder="请输入"></tu-input>
    <br />
    <br />
    <tu-input size="large" placeholder="请输入"></tu-input>
    <br />
    <br />
    <tu-input v-model="input" disabled placeholder="Please input" />
    <br />
    <br />
    <tu-input v-model="input" placeholder="Please input" clearable />
    <br />
    <br />
    <tu-input
      v-model="input"
      type="password"
      placeholder="Please input password"
      show-password
      clearable
    />
    <br />
    <br />
    <tu-input
      v-model="input"
      placeholder="Please input"
      :formatter="(value:any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="(value:any) => value.replace(/\$\s?|(,*)/g, '')"
    />
    <br />
    <br />
    <tu-row :gutter="20">
      <tu-col :span="12">
        <tu-input
          v-model="input"
          placeholder="Pick a date"
          :suffix-icon="Search"
        />
      </tu-col>
      <tu-col :span="12">
        <tu-input
          v-model="input"
          placeholder="Type something"
          :prefix-icon="Search"
        />
      </tu-col>
    </tu-row>
    <br />
    <br />
    <tu-row :gutter="20">
      <tu-col :span="12">
        <tu-input v-model="input" placeholder="Pick a date">
          <template #suffix>
            <tu-icon class="tu-input__icon"><Search /></tu-icon>
          </template>
        </tu-input>
      </tu-col>
      <tu-col :span="12">
        <tu-input v-model="input" placeholder="Type something">
          <template #prefix>
            <tu-icon class="tu-input__icon"><Search /></tu-icon>
          </template>
        </tu-input>
      </tu-col>
    </tu-row>

    <br />
    <br />
    <tu-input v-model="input" placeholder="Please input">
      <template #prepend>Http://</template>
    </tu-input>
    <br />
    <br />
    <tu-input v-model="input" placeholder="Please input">
      <template #append>Http://</template>
    </tu-input>
    <br />
    <br />
    <tu-input
      v-model="input"
      maxlength="10"
      placeholder="Please input"
      show-word-limit
      type="text"
      clearable
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@vueuse/core';
import { Tools, Search, Calendar } from '@tu-view-plus/icons-vue';

const [visible, toggleVisible] = useToggle();

const radio = ref(1);
const input = ref('');
</script>
<style lang="scss"></style>
