import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	server: {
		port: 3000,
	},
	build: {
		emptyOutDir: true,
		outDir: '../build',
		target: 'esnext',
		rollupOptions: {
			output: {
				entryFileNames: `[name].js`,
				chunkFileNames: `[name].js`,
				assetFileNames: `[name].[ext]`,
			},
		},
	},
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
	},
});
