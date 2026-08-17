import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const prototypes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/prototypes",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages"
  }),
  schema: z.object({
    heading: z.string(),
  })
})

export const collections = { prototypes, pages };