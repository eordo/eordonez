import { defineCollection, z } from "astro:content";
const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(),
        tags: z.array(z.string()).default([]),
    })
});
const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        status: z.string(),
        date: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        links: z.array(z.object({
            label: z.string(),
            href: z.string().url()
        })).default([])
    })
});
export const collections = { blog, projects };
