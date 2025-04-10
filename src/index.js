/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const path = url.pathname
		const subscribe = 'https://github.com/bonsonjjc/cf/blob/master/routes' + path
		const response = await fetch(subscribe);
		const text = await response.text();
		return new Response(text, { headers: { 'Content-Type': 'text/plain' } });
	},
};
