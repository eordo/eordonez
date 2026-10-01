import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const research = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/research",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum([
      "research",
      "academic-project",
      "technical-project",
    ]),
    date: z.coerce.date(),
    status: z
      .enum([
        "ongoing",
        "completed",
        "published",
      ])
      .default("completed"),
    topics: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  research,
};
