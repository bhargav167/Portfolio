import { w as writable } from "./index.js";
import { b as base } from "./paths.js";
const theme = writable(false);
const gh = (file) => `${base}/logos/${file}`;
const a = (light, dark) => dark ? { dark: gh(dark), light: gh(light) } : gh(light);
const Assets = {
  AWS: a("aws.svg"),
  Bootstrap: a("bootstrap.svg"),
  C: a("c.svg"),
  Cpp: a("cpp.svg"),
  Celery: a("celery.svg"),
  Django: a("django.svg"),
  FastApi: a("fastapi"),
  Flask: a("flask.svg"),
  Go: a("go.svg"),
  Kafka: a("kafka.svg"),
  Neo4j: a("neo4j.svg"),
  Nginx: a("nginx.svg"),
  Numpy: a("numpy.svg"),
  Pandas: a("pandas.svg"),
  RabbitMQ: a("rabbitmq.svg"),
  Rust: a("rust.svg", "rust-dark.png"),
  Scrapy: a("scrapy.png"),
  Selenium: a("selenium.svg"),
  Docker: a("docker.svg"),
  Kubernetes: a("kubernetees.svg"),
  Csharp: a("csharp.svg"),
  Xamarin: a("xamarin.svg"),
  TypeScript: a("ts.png"),
  VueJs: a("vue.png"),
  ReactJs: a("react.svg"),
  Dart: a("dart.png"),
  Kotlin: a("kotlin.png"),
  Python: a("python.png"),
  NodeJs: a("node.png"),
  Deno: a("deno.png", "deno-dark.png"),
  Svelte: a("svelte.png"),
  ExpressJs: a("express.png"),
  JavaScript: a("js.png"),
  Fastify: a("fastify.svg", "fastify-dark.png"),
  NestJs: a("nest.svg"),
  Quasar: a("quasar.svg"),
  SolidJs: a("solid.svg"),
  Electron: a("electron.png"),
  Flutter: a("flutter.svg"),
  Java: a("java.png"),
  AdonisJs: a("adonis.png"),
  Android: a("android.png"),
  Angular: a("Angular.png"),
  PostgreSQL: a("postgres.png"),
  Firebase: a("firebase.png"),
  Sass: a("sass.png"),
  Unknown: a("no-img.svg"),
  MongoDB: a("mongodb.svg"),
  Redis: a("redis.svg"),
  Tailwind: a("tailwind.svg"),
  HTML: a("html.svg"),
  Premiere: a("premiere.svg"),
  Photoshop: a("photoshop.svg"),
  CSS: a("css.svg"),
  AfterEffects: a("after-effects.svg"),
  Illustrator: a("illustrator.svg"),
  Nuxt: a("nuxt.png"),
  Vite: a("vite.png"),
  Vitest: a("vitest.svg"),
  Jest: a("jest.png"),
  Unocss: a("unocss.svg"),
  Ruvy: a("ruvy.svg"),
  Postcss: a("postcss.svg"),
  Spacing: a("spacing.ico"),
  Hooz: a("hooz.ico"),
  Yl: a("Yl.ico"),
  Skuul: a("skull.ico"),
  Net: a("net.png"),
  EF: a("EF_Core.png"),
  API: a("API.png")
};
let currentTheme;
theme.subscribe((v) => currentTheme = v);
const getAssetURL = (asset) => {
  return typeof asset === "string" ? asset : currentTheme ? asset.dark : asset.light;
};
const s = (skill) => skill;
const MY_SKILLS = [
  s({
    slug: ".Net Core 6",
    color: "blue",
    description: "",
    logo: Assets.Net,
    name: "DotNet Core & MVC5"
  }),
  s({
    slug: "c#",
    color: "blue",
    description: "",
    logo: Assets.Csharp,
    name: "C#"
  }),
  s({
    slug: "EF Core 6",
    color: "silver",
    description: "",
    logo: Assets.EF,
    name: "EF Core 6"
  }),
  s({
    slug: "Web API",
    color: "green",
    description: "",
    logo: Assets.API,
    name: "Web Api"
  }),
  s({
    slug: "angularjs",
    color: "red",
    description: "",
    logo: Assets.Angular,
    name: "Angular 17"
  }),
  s({
    slug: "mongodb",
    color: "green",
    description: "",
    logo: Assets.MongoDB,
    name: "MongoDB"
  }),
  s({
    slug: "mssql",
    color: "orange",
    description: "",
    logo: Assets.PostgreSQL,
    name: "SQL"
  }),
  s({
    slug: "js",
    color: "yellow",
    description: "",
    logo: Assets.JavaScript,
    name: "Javascript"
  }),
  s({
    slug: "ts",
    color: "blue",
    description: "",
    logo: Assets.TypeScript,
    name: "Typescript"
  }),
  s({
    slug: "css",
    color: "blue",
    description: "",
    logo: Assets.CSS,
    name: "CSS"
  }),
  s({
    slug: "html",
    color: "orange",
    description: "",
    logo: Assets.HTML,
    name: "HTML"
  })
];
const getSkills = (...slugs) => MY_SKILLS.filter((it) => slugs.includes(it.slug));
export {
  Assets as A,
  MY_SKILLS as M,
  getAssetURL as a,
  getSkills as g,
  theme as t
};
