

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.42174d05.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/UIcon.9faa29d6.js","_app/immutable/chunks/paths.25376d84.js","_app/immutable/chunks/params.6861a7b4.js","_app/immutable/chunks/SearchPage.866a1cb6.js","_app/immutable/chunks/CommonPage.b10a9a5c.js","_app/immutable/chunks/MainTitle.d8ef5e17.js","_app/immutable/chunks/TabTitle.98f03841.js","_app/immutable/chunks/stores.8f2c5bd9.js","_app/immutable/chunks/singletons.20bc67b9.js","_app/immutable/chunks/Chip.1c395d8f.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];
