// vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite';
import {dependencies, devDependencies} from './package.json';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    rollupOptions: {
      external: ['react/jsx-runtime', ...Object.keys(devDependencies), ...Object.keys(dependencies)],
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es'
      },
    },
    target: 'esnext',
  },
});