

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/education/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8480d2d7.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/UIcon.9faa29d6.js","_app/immutable/chunks/Card.27a32898.js","_app/immutable/chunks/TabTitle.909744e6.js","_app/immutable/chunks/params.9d1b22c1.js","_app/immutable/chunks/paths.931425e5.js","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/chunks/Chip.8c7c111b.js","_app/immutable/chunks/SearchPage.b4a4ecff.js","_app/immutable/chunks/CommonPage.f97790b3.js","_app/immutable/chunks/MainTitle.d8ef5e17.js","_app/immutable/chunks/stores.58cef254.js","_app/immutable/chunks/singletons.092ece74.js"];
export const stylesheets = ["_app/immutable/assets/Card.7a6abfc5.css","_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];