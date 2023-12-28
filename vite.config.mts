/// <reference types="vitest" />
import { defineConfig } from 'vite';
import swc from 'unplugin-swc';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    swc.vite({
      // This is required to build the test files with SWC
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
    }),
  ],
  test: {
    globals: true,
    root: './',
  },
});
