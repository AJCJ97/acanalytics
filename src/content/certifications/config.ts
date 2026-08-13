import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    pubDate: z.string().optional(),   // 👈 Agregado
    heroImage: z.string().optional(), // 👈 Si aparece en otros archivos, evitará errores
  }),
});

export const collections = {
  projects: projectsCollection,
};
