// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://agentstatelabs.com',
	integrations: [
		starlight({
			title: 'AgentStateLabs',
			description: 'Infrastructure for the intent-based era — state graphs, memory, code intelligence, routing, and agent validation.',
			components: {
				Footer: './src/components/Footer.astro',
			},
			social: [
			],
			// Starlight renders only the company/platform pages. Everything else
			// (landing, products, use-cases, blog) is a marketing page under
			// src/pages using Site.astro, so the sidebar links across to those
			// rather than trapping a reader in docs chrome.
			sidebar: [
				{
					label: 'Company',
					items: [
						{ label: 'About', slug: 'about' },
						{ label: 'Products', link: '/products/' },
						{ label: 'Use cases', link: '/use-cases/' },
						{ label: 'Blog', link: '/blog/' },
					],
				},
				{
					label: 'Platform',
					items: [
						{ label: 'Architecture', slug: 'platform/architecture' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'The AI Taxonomy', link: 'https://ai-taxonomy.com' },
					],
				},
			],
		}),
	],
});
