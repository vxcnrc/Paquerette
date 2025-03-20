import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // 👈 pour l’alias @ vers /src

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src') // 👈 alias utile pour import '@/...'
		}
	},
	server: {
		proxy: {
			'/api': 'http://localhost:3001',    // Proxy pour API
			'/images': 'http://localhost:3001'  // Proxy pour les images
		}
	}
});
