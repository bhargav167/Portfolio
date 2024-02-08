import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig,defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
const config: UserConfig = {
	 
	plugins: [UnoCSS(), sveltekit()]
};
/** @type {import('vite').Plugin} */
 
export default config;
