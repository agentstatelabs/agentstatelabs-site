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
			sidebar: [
				{
					label: 'Company',
					items: [
						{ label: 'About', slug: 'about' },
						{ label: 'Products', link: '/products/' },
					],
				},
				// Product pages moved out of Starlight to src/pages/products/ as
				// marketing pages; the docs sidebar links across to them.
				{
					label: 'Platform',
					items: [
						{ label: 'Architecture', slug: 'platform/architecture' },
						{ label: 'Licensing', slug: 'platform/licensing' },
					],
				},
			],
		}),
	],
});
