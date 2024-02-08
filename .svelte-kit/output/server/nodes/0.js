import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.f70f75fb.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/UIcon.9faa29d6.js","_app/immutable/chunks/stores.8f2c5bd9.js","_app/immutable/chunks/singletons.20bc67b9.js","_app/immutable/chunks/paths.25376d84.js","_app/immutable/chunks/params.6861a7b4.js"];
export const stylesheets = ["_app/immutable/assets/0.e2d5bfe0.css"];
export const fonts = [];
