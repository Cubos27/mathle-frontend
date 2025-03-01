import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@', // Add this alias for '@'
        replacement: path.resolve(__dirname, './src'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: '@sections',
        replacement: path.resolve(__dirname, './src/sections'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages'),
      },
      {
        find: '@data',
        replacement: path.resolve(__dirname, './src/data')
      }
    ],
  },
});