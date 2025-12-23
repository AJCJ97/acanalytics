// src/content/config.ts

import { defineCollection, z } from 'astro:content';
// Renombramos la variable a 'projects' para que sea más clara.
const projects = defineCollection({
    // El tipo debe ser 'content' para Markdown/MDX
    type: 'content', 
    
    // El loader: glob(...) ya no es necesario; Astro encuentra la colección 'projects'
    // automáticamente si la carpeta se llama 'src/content/projects'.
    
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            // Transform string to Date object
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: image().optional(), // Asegúrate de que haya una coma aquí si agregas algo más.
        }),
});

// Exporta la colección.
// La clave del objeto debe ser 'projects' y el valor es la variable 'projects'.
// Usamos la sintaxis de atajo: { projects } es igual a { projects: projects }.
export const collections = { projects };