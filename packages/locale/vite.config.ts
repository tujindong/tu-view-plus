/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    rollupOptions: {
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: '../tu-view-plus/locale'
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'tu-view-plus'
    }
  },
  plugins: [
    dts({
      entryRoot: 'lang',
      outputDir: ['../tu-view-plus/locale/lang'],
      tsConfigFilePath: '../../tsconfig.json'
    })
  ]
});
