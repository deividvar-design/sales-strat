import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              // Vendor chunks - separate large dependencies for better caching
              if (id.includes('node_modules')) {
                // React core (cached long-term, rarely changes)
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'vendor-react';
                }
                // React Router (cached long-term)
                if (id.includes('react-router')) {
                  return 'vendor-router';
                }
                // Lucide icons (large icon library, cached long-term)
                if (id.includes('lucide-react')) {
                  return 'vendor-icons';
                }
                // All other node_modules
                return 'vendor';
              }

              // Page chunks - lazy-loaded per route
              if (id.includes('/pages/')) {
                const match = id.match(/\/pages\/([^/]+)/);
                if (match) {
                  return `page-${match[1]}`;
                }
              }

              // Shared components - included in main bundle
              if (id.includes('/components/')) {
                return 'components';
              }

              // Constants and types - included in main bundle
              if (id.includes('constants.ts') || id.includes('types.ts')) {
                return 'shared';
              }
            }
          }
        },
        chunkSizeWarningLimit: 800, // Warn if chunk > 800KB
        sourcemap: false, // Disable sourcemaps in prod for smaller files
      }
    };
});
