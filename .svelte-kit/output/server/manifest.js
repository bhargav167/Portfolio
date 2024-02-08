export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "myportfolio/_app",
	assets: new Set([".DS_Store","Portfolio/youllist.png","favicon.ico","logos/API.png","logos/Angular.png","logos/EF_Core.png","logos/Yl.ico","logos/adonis.png","logos/after-effects.svg","logos/android.png","logos/aws.svg","logos/bootstrap.svg","logos/c.svg","logos/celery.svg","logos/cpp.svg","logos/csharp.svg","logos/css.svg","logos/dart.png","logos/deno.png","logos/django.svg","logos/docker.svg","logos/electron.png","logos/express.png","logos/fastify.svg","logos/firebase.png","logos/flask.svg","logos/flutter.svg","logos/go.svg","logos/herke-ict-group.svg","logos/hooz.ico","logos/html.svg","logos/illustrator.svg","logos/java.png","logos/jest.png","logos/js.png","logos/kafka.svg","logos/kotlin.png","logos/kubernetees.svg","logos/mongodb.svg","logos/neo4j.svg","logos/nest.svg","logos/net.png","logos/nginx.svg","logos/no-img.svg","logos/node.png","logos/numpy.svg","logos/nuxt.png","logos/pandas.svg","logos/photoshop.svg","logos/postcss.svg","logos/postgres.png","logos/premiere.svg","logos/python.png","logos/quasar.svg","logos/rabbitmq.svg","logos/react.svg","logos/redis.svg","logos/rust.svg","logos/ruvy.svg","logos/sass.png","logos/scrapy.png","logos/selenium.svg","logos/skull.ico","logos/solid.svg","logos/spacing.ico","logos/svelte.png","logos/tailwind.svg","logos/ts.png","logos/unocss.svg","logos/vite.png","logos/vitest.svg","logos/vue.png","logos/xamarin.svg"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.a13ea3e7.js","app":"_app/immutable/entry/app.18fda0fc.js","imports":["_app/immutable/entry/start.a13ea3e7.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/singletons.20bc67b9.js","_app/immutable/chunks/paths.25376d84.js","_app/immutable/entry/app.18fda0fc.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
