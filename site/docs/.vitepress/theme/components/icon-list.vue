<template>
  <div>
    <div class="demo-icon-item" v-for="item in categories" :key="item.name">
      <div class="demo-icon-title">{{ item.name }}</div>
      <ul class="demo-icon-list">
        <li
          v-for="component in item.icons"
          :key="component.name"
          :ref="component.name"
          class="icon-item"
          @click="copySvgIcon(component.name, $refs)"
        >
          <span class="demo-svg-icon">
            <tu-icon :size="20">
              <component :is="component" />
            </tu-icon>
            <span class="icon-name">{{ component.name }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';
import * as Icons from '@tu-view-plus/icons-vue';
import IconCategories from '../constants/icons-categories.json';
import type { DefineComponent } from 'vue';

type CategoriesItem = {
  name: string;
  icons: DefineComponent[];
};

const categories = shallowRef<CategoriesItem[]>([]);
const iconMap = new Map(Object.entries(Icons));

IconCategories.categories.forEach((o) => {
  const result: CategoriesItem = {
    name: o.name,
    icons: []
  };
  o.items.forEach((i) => {
    const icon = iconMap.get(i);
    if (icon) {
      result.icons.push(icon);
      iconMap.delete(i);
    }
  });
  categories.value.push(result);
});

const copySvgIcon = async (name, refs) => {
  console.log('copySvgIcon', { name, refs });
};
</script>

<style scoped lang="scss">
.demo-icon {
  &-item {
    margin-top: 24px;
    &:first-child {
      margin-top: 0;
    }
  }
  &-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    font-weight: bold;
  }
  &-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid var(--vp-c-divider);
    border-left: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    .icon-item {
      text-align: center;
      color: var(--tu-color-text);
      height: 90px;
      font-size: 13px;
      margin-top: 0;
      border-right: 1px solid var(--vp-c-divider);
      border-bottom: 1px solid var(--vp-c-divider);
      transition: background-color 0.3s;
      &:hover {
        background-color: var(--vp-c-mute-dark);
        .tu-icon {
          color: var(--brand-color-light);
        }
        color: var(--brand-color-light);
      }

      .demo-svg-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;

        .icon-name {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>