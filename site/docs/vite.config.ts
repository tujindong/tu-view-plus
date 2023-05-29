import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      strict: false
    },
    port: 9300
  }
});
