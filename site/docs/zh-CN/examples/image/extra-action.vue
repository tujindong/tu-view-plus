<template>
  <tu-image
    src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png"
    title="Keyboard and Mouse"
    description="Present by Tu View Plus"
    width="260"
    style="margin-right: 67px; vertical-align: top"
    :preview-visible="visible1"
    @preview-visible-change="
      () => {
        visible1 = false;
      }
    "
  >
    <template #extra>
      <div class="actions">
        <span
          class="action"
          @click="
            () => {
              visible1 = true;
            }
          "
        >
          <tu-icon>
            <View />
          </tu-icon>
        </span>
        <span class="action">
          <tu-icon>
            <Download />
          </tu-icon>
        </span>
        <tu-tooltip content="Keyboard and Mouse">
          <span class="action">
            <tu-icon>
              <InfoFilled />
            </tu-icon>
          </span>
        </tu-tooltip>
      </div>
    </template>
  </tu-image>
  <tu-image
    src="https://cdn.pixabay.com/photo/2020/04/04/03/42/paperwork-5000691_640.png"
    title="Keyboard and Mouse"
    description="Present by Tu View Plus"
    width="260"
    footer-position="outer"
    :preview-visible="visible2"
    @preview-visible-change="
      () => {
        visible2 = false;
      }
    "
  >
    <template #extra>
      <div class="actions actions-outer">
        <span
          class="action"
          @click="
            () => {
              visible2 = true;
            }
          "
        >
          <tu-icon>
            <View />
          </tu-icon>
        </span>
        <span class="action">
          <tu-icon>
            <Download />
          </tu-icon>
        </span>
        <tu-tooltip content="Keyboard and Mouse">
          <span class="action">
            <tu-icon>
              <InfoFilled />
            </tu-icon>
          </span>
        </tu-tooltip>
      </div>
    </template>
  </tu-image>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { View, Download, InfoFilled } from '@tu-view-plus/icons-vue';

const visible1 = ref(false);
const visible2 = ref(false);

</script>

<style scoped>
.actions {
  display: flex;
  align-items: center;
}
.action {
  padding: 5px 4px;
  font-size: 14px;
  margin-left: 12px;
  border-radius: 2px;
  line-height: 1;
  cursor: pointer;
}
.action:first-child {
  margin-left: 0;
}

.action:hover {
  background: rgba(0, 0, 0, 0.5);
}
.actions-outer {
  .action {
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
