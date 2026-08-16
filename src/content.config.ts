import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const research = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/research",
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

export const collections = { research };