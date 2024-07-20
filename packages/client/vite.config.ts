import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import reactjs from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    define: {
        global: {},
    },
    base: '/',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        devSourcemap: true,
    },
    plugins: [
        reactjs(),
        tsconfigPaths(),
        visualizer({
            filename: './build/report.html',
            open: true,
            brotliSize: true,
        }),
    ],
    build: {
        // chunkSizeWarningLimit: 1600,
        outDir: 'build',
        minify: 'terser',
        emptyOutDir: false,
        manifest: true,
        sourcemap: false,
        reportCompressedSize: true,
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
    server: {
        port: 8000,
        strictPort: true,
        proxy: {
            '/api/v1': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
            '/ws/v1': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            },
        },
    },
})
