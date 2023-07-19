/// <reference types="vitest" />
import { defineConfig } from 'vite';

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
  }
});
