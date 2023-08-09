/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        /\.scss/,
        /\@vue/,
        /\@tu-view-plus/,
        'vue',
        'lodash-unified',
        'resize-observer-polyfill',
        'number-precision'
      ],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: '../tu-view-plus/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: '../tu-view-plus/lib'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'tu-view-plus'
    }
  },
  plugins: [
    vue(),
    VueJsx(),
    DefineOptions(),
    dts({
      entryRoot: 'src',
      outputDir: ['../tu-view-plus/es/src', '../tu-view-plus/lib/src'],
      tsConfigFilePath: '../../tsconfig.json'
    }),
    {
      name: 'style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          this.emitFile({
            type: 'asset',
            fileName: key,
            source: bundler.code.replace(/\.scss/g, '.css')
          });
        }
      }
    }
  ]
});
