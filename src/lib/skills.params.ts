import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: '.Net Core 6',
		color: 'blue',
		description:
			'',
		logo: Assets.Net,
		name: 'DotNet Core & MVC5'
	}),
	s({
		slug: 'c#',
		color: 'blue',
		description:
			'',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'EF Core 6',
		color: 'silver',
		description:
			'',
		logo: Assets.EF,
		name: 'EF Core 6'
	}),
	s({
		slug: 'Web API',
		color: 'green',
		description:
			'',
		logo: Assets.API,
		name: 'Web Api'
	}),
	s({
		slug: 'angularjs',
		color: 'red',
		description:
			'',
		logo: Assets.Angular,
		name: 'Angular 17'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		description: '',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'mssql',
		color: 'orange',
		description: '',
		logo: Assets.PostgreSQL,
		name: 'SQL'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'',
		logo: Assets.HTML,
		name: 'HTML'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
