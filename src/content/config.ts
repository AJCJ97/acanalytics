import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const certificationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
    issuer: z.string().optional(),
    credentialUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  certifications: certificationsCollection,
};