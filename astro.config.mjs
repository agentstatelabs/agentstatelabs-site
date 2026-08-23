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
						{ label: 'Products', slug: 'products' },
					],
				},
				{
					label: 'Products',
					items: [
						// Ordered by stage: the v1.0.0 GA set first, then earlier-stage products.
						{ label: 'AgentStateGraph', slug: 'products/agentstategraph' },
						{ label: 'CTXone', slug: 'products/ctxone' },
						{ label: 'AgentStateDeveloper', slug: 'products/agentstatedeveloper' },
						{ label: 'ThreadWeaver', slug: 'products/threadweaver' },
						{ label: 'AgentStateCrucible', slug: 'products/agentStatecrucible' },
						{ label: 'AgentStateRouter', slug: 'products/agentstaterouter' },
					],
				},
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
