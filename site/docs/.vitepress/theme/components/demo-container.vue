<template>
  <div class="demo-block">
    <p class="demo-block__title">{{ title }}</p>
    <div class="demo-block__content">
      <div class="demo-block__content--source">
        <slot />
      </div>

      <div class="demo-block__content--control">
        <div class="control-opt">
          <tu-tooltip
            :content="locale[sourceVisible ? 'hide-source' : 'view-source']"
          >
            <tu-icon @click="toggleSourceVisible()">
              <DocCode v-if="sourceVisible" />
              <DocCodeEmpty v-else />
            </tu-icon>
          </tu-tooltip>

          <tu-tooltip :content="locale['copy-code']">
            <tu-icon @click="handleCopy"><DocCopy /></tu-icon>
          </tu-tooltip>
        </div>
      </div>

      <tu-collapse-transition>
        <div class="demo-block__content--meta" v-show="sourceVisible">
          <div class="meta-desc">
            <slot name="desc" />
          </div>
          <div class="meta-lang" v-html="highlightedHtml"></div>
        </div>
      </tu-collapse-transition>

      <tu-transition name="fade-in-linear">
        <div
          v-show="sourceVisible"
          class="demo-block__content--control"
          @mouseenter="hovering = true"
          @mouseleave="hovering = false"
        >
          <div class="control-caret" @click="toggleSourceVisible(false)">
            <tu-button type="text">
              <template #icon>
                <tu-icon>
                  <CaretTop />
                </tu-icon>
              </template>
              <tu-transition name="fade-in-linear">
                <span v-show="hovering">
                  {{ locale['hide-source'] }}
                </span>
              </tu-transition>
            </tu-button>
          </div>
        </div>
      </tu-transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, getCurrentInstance } from 'vue';
import { useToggle, useClipboard } from '@vueuse/core';
import { CaretTop } from '@tu-view-plus/icons-vue';
import { DocCode, DocCodeEmpty, DocCopy } from '../icons';
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

const vm = getCurrentInstance()!;

const hovering = ref(false);

const lang = useLang();

const locale = computed(() => demoBlockLocale[lang.value]);

const sfcCode = computed(() =>
  decodeURIComponent(props.sfcTsCode || props.sfcJsCode)
);

const highlightedHtml = computed(() =>
  decodeURIComponent(props.sfcTsHtml || props.sfcJsHtml)
);

const [sourceVisible, toggleSourceVisible] = useToggle();

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(sfcCode.value),
  read: false
});

const handleCopy = async () => {
  const { $message } = vm.appContext.config.globalProperties;
  if (!isSupported) {
    $message.error(locale.value['copy-error']);
  }
  try {
    await copy();
    $message.success(locale.value['copy-success']);
  } catch (e: any) {
    $message.error(e.message);
  }
};
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
      p {
        font-size: 13px;
      }
    }
    &--meta {
      padding: 16px;
      background: var(--vp-doc-demo-bg);
      .meta-desc {
        padding: 0px 12px;
        background: var(--vp-c-bg);
        p {
          display: inline-block;
          color: var(--vp-c-text-2);
          font-size: 13px;
          line-height: 1.75;
        }
      }
      .meta-lang {
        font-size: 13px;
      }
    }
    &--control {
      display: flex;
      position: sticky;
      bottom: 0;
      align-items: center;
      justify-content: center;
      height: 40px;
      border: 1px solid var(--vp-c-divider);
      background: var(--vp-c-bg);
      .control-opt {
        margin-left: auto;
        .tu-icon {
          cursor: pointer;
          margin-right: 16px;
          transition: color 0.2s;
          &:hover {
            color: var(--vp-c-text-1);
          }
        }
      }
    }
  }
}
</style>

