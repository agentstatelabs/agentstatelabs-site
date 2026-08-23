import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	blog: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			// Publish date. An article appears on the index once this date is
			// on/before the build date (static HTML, what crawlers see) or the
			// current date (client-side reveal between builds).
			date: z.coerce.date(),
			author: z.string().default('AgentStateLabs'),
			// Per-article accent. Named for the product the article is about, so
			// the blog inherits the portfolio palette from Site.astro rather
			// than introducing a second colour system. Use `asl` for
			// company-level posts that are not about one product.
			accent: z
				.enum(['asl', 'asg', 'ctxone', 'asd', 'thread', 'crucible', 'router'])
				.default('asl'),
		}),
	}),
};
