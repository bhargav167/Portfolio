

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.edbbff01.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/stores.8f2c5bd9.js","_app/immutable/chunks/singletons.20bc67b9.js","_app/immutable/chunks/paths.25376d84.js"];
export const stylesheets = [];
export const fonts = [];
