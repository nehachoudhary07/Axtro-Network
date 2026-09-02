import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      target: 'es2022',
      minify: 'esbuild',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            const normalized = id.replace(/\\/g, '/');
            if (normalized.includes('/node_modules/react/') || 
                normalized.includes('/node_modules/react-dom/') || 
                normalized.includes('/node_modules/scheduler/')) {
              return 'vendor-react';
            }
            if (normalized.includes('/node_modules/gsap/') || 
                normalized.includes('/node_modules/@gsap/') || 
                normalized.includes('/node_modules/lenis/')) {
              return 'vendor-gsap';
            }
            if (normalized.includes('/node_modules/lucide-react/')) {
              return 'vendor-icons';
            }
            if (normalized.includes('/node_modules/cobe/')) {
              return 'vendor-cobe';
            }
            if (normalized.includes('/node_modules/motion/')) {
              return 'vendor-motion';
            }
          },
        },
      },
    },
    esbuild: isProd
      ? {
          drop: ['console', 'debugger'],
          legalComments: 'none',
        }
      : undefined,
  };
});
