<template>
  <tu-tag
    v-for="tag in dynamicTags"
    closable
    :key="tag"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </tu-tag>
  <tu-input
    v-if="inputVisible"
    ref="InputRef"
    v-model="inputValue"
    class="deme-tag-input"
    size="small"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  />
  <tu-button v-else class="demo-tag-new" size="small" @click="handleInputShow">
    + New Tag
  </tu-button>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { TuInput } from 'tu-view-plus';

const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref<InstanceType<typeof TuInput>>();

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const handleInputShow = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};
</script>

<style scoped>
.deme-tag-input {
  width: 74px;
  margin-left: 8px;
}
.demo-tag-new {
  margin-left: 8px;
}
</style>
