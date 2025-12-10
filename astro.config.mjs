// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
    // 1. **CLAVE:** El site ahora incluye el subdirectorio del repositorio
    site: 'https://ajcj97.github.io/acanalytics/', // ¡Añadimos /acanalytics/!
    
    // 2. ELIMINA O COMENTA LA BASE
    // base: '/acanalytics', 
    
    outDir: './dist',
    trailingSlash: 'always',
    output: 'static',
    
    // 3. Asegúrate de que no haya configuración conflictiva aquí
    vite: {
        plugins: [tailwindcss()],
    },
    
    integrations: [react()],
});