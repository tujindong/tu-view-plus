<template>
  <div class="demo-block">
    <p class="demo-block__title">{{ title }}</p>
    <div class="demo-block__content">
      <div class="demo-block__content--source">
        <slot />
      </div>

      <TuCollapseTransition>
        <div class="demo-block__content--meta" v-show="sourceVisible">
          <div class="meta-desc">
            <slot name="desc" />
          </div>
          <div class="meta-lang" v-html="highlightedHtml"></div>
        </div>
      </TuCollapseTransition>

      <div class="demo-block__content--control">
        <div class="control-caret" @click="toggleSourceVisible()">
          <tu-button type="text">
            <template #icon>
              <tu-icon>
                <CaretBottom />
              </tu-icon>
            </template>
            {{ sourceVisible ? locale['hide-source'] : locale['view-source'] }}
          </tu-button>
        </div>
        <div class="control-btns">
          <tu-button type="text" @click="handleCopy">
            {{ locale['copy-code'] }}
          </tu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useToggle } from '@vueuse/core';
import { CaretBottom } from '@tu-view-plus/icons-vue';
import { useLang } from '../../composables/lang';
import demoBlockLocale from '../../i18n/component/demo-block.json';

const props = defineProps<{
  sfcTsCode: string;
  sfcJsCode: string;
  sfcTsHtml: string;
  sfcJsHtml: string;
  title: string;
  metadata: object;
}>();

const lang = useLang();

const locale = computed(() => demoBlockLocale[lang.value]);

const sfcCode = computed(() =>
  decodeURIComponent(props.sfcTsCode || props.sfcJsCode)
);

const highlightedHtml = computed(() =>
  decodeURIComponent(props.sfcTsHtml || props.sfcJsHtml)
);

const [sourceVisible, toggleSourceVisible] = useToggle();

function handleCopy() {
  navigator.clipboard.writeText(sfcCode.value);
}
</script>

<style lang="scss">
.demo-block {
  &__title {
    font-size: 14px;
  }
  &__content {
    &--source {
      padding: 24px 16px;
      border: 1px solid var(--vp-c-divider);
      border-bottom: none;
    }
    &--meta {
      padding: 16px;
      background: var(--vp-doc-border);
      .meta-desc {
        padding: 0 12px;
        border: 1px solid var(--vp-c-divider);
        background: var(--vp-c-bg);
        p {
          color: var(--vp-c-text-2);
          font-size: 13px;
          line-height: 1;
        }
      }
    }
    &--control {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      border: 1px solid var(--vp-c-divider);
      background: var(--vp-c-bg);
      .control-caret {
      }
      .control-btns {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>

