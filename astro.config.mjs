// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://ajcj97.github.io/', 
	base: process.env.BASE_URL || '/acastrolab',
	outDir: './dist',
	trailingSlash: 'always',
	output: 'static',
});


