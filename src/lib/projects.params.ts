import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Spacing',
		color: '#5e95e3',
		description:
			'Property Dealing Application where users can list or buy property. based on location',
		shortDescription:
			'Property Dealing Application',
		links: [{ to: 'https://github.com/bhargav167/RstateSPA', label: 'GitHub' }],
		logo: Assets.Spacing,
		name: 'SPACING',
		period: {
			from: new Date()
		},
		skills: getSkills('angularjs', 'ts', 'js','c#','mssql'),
		type: 'WebApp',
		screenshots: [
			{
				label: '1',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/313c739a2d2fa35eba3bfeba0357b118/detailed'
			},
			{
				label: '2',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/bf5cf98a640ba4dfc8bfb819b7037db1/detailed'
			},
			{
				label: '3',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/7be9468641cd3807a43d282119b4a784/detailed'
			},
			{
				label: '4',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/d1d1102cf895bd44eec956005525750d/detailed'
			},
			{
				label: '5',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/286f31752b065a60239177b1aff79418/detailed'
			}
		]
	},
	{
		slug: 'HoozOn',
		color: '#ff3e00',
		description:
			'All categories of services listing and services booking app. User can track job progress in real-time',
		shortDescription:
			'All categories of services listing and services booking app. User can track job progress in real-time',
		links: [{ to: 'https://github.com/bhargav167/HoozApp', label: 'GitHub' }],
		logo: Assets.Hooz,
		name: 'HoozOn',
		period: {
			from: new Date()
		},
		skills: getSkills('angularjs', 'ts', 'tailwind', 'css','mssql','c#'),
		type: 'WebApp',
		screenshots: [
			{
				label: '1',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/ae3454b9e1fc3c2f12d33b8eafefed8e/detailed'
			},
			{
				label: '2',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/710b1d08b0e0a14099156d83523ec045/detailed'
			},
			{
				label: '3',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/da84637d9c45a7e565976fdaf48bf39e/detailed'
			},
			{
				label: '4',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/4a6b59144f1ccd5586a6575faffd1074/detailed'
			},
			{
				label: '5',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/7610eef3d2d161cb7e78bec837468021/detailed'
			}
		]
	},
	{
		slug: 'YourList',
		color: '#ff3e00',
		description:
			'Place where user can save list of things like links, text ,Description with Images,audio and video and can be share with anyone',
		shortDescription:
			'Place where user can save list of things like links, text ,Description with Images,audio and video.',
		links: [{ to: 'https://github.com/bhargav167/Listing', label: 'GitHub' }],
		logo: Assets.Yl,
		name: 'YourList',
		period: {
			from: new Date()
		},
		skills: getSkills('angularjs', 'ts', 'tailwind', 'sass','mssql','c#'),
		type: 'WebApp',
		screenshots: [
			{
				label: '1',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/bc5d7f2a3376431f8c0df5b1554f4887/detailed'
			},
			{
				label: '2',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/aa049a630096946717f94a701eb74fbb/detailed'
			}
		]
	},
	{
		slug: 'Clinic Managment System',
		color: '#ff3e00',
		description:
			'Managing Doctor,Patient and Inventory Record. keeping track of patient booking,medicine,health etc.',
		shortDescription:
			'Managing Doctor,Patient and Inventory Record. keeping track of patient booking,medicine,health etc.',
		links: [{ to: 'https://github.com/bhargav167/LivMoneyAPI', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Clinic Managment System',
		period: {
			from: new Date()
		},
		skills: getSkills('angularjs', 'ts', 'tailwind', 'sass','mssql','c#'),
		type: 'WebApp',
		screenshots: [
			{
				label: '1',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/868d2bcdd535291f9c320759ec0608e9/detailed'
			},
			{
				label: '2',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/a9c3b776d763005eed54cd7b4311c170/detailed'
			},
			{
				label: '3',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/13fb71f722549e141536f0558d05eb94/detailed'
			},
			{
				label: '4',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/d06c470d1e759b5f4cd08744ad733a25/detailed'
			},
			{
				label: '5',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/23446876d622825c2e33487b94f0a4d3/detailed'
			},
			{
				label: '6',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/061ddba6460dc63370bdf31b4c07a7fa/detailed'
			},
			{
				label: '7',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/a54cdf772852fee4b650257d12de93b1/detailed'
			},
			{
				label: '8',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/a8656b4ea74898e78223b342a197c25a/detailed'
			},
			{
				label: '9',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/08cfb33bdb4aee59fb76e1b8a5633628/detailed'
			},
			{
				label: '10',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/725af0aab989cf332e02952ed9a2e18c/detailed'
			},
			{
				label: '10',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/6a5f442b8b64aeb5998b9a4651112120/detailed'
			}
		]
	},
	{
		slug: 'School Managment System',
		color: '#ff3e00',
		description:
			'Fully functioning school managment system, which manage students,teachers and admin role',
		shortDescription:
		'Fully functioning school managment system, which manage students,teachers and admin role',
		links: [{ to: 'https://github.com/bhargav167/schoolSPA', label: 'GitHub' }],
		logo: Assets.Skuul,
		name: 'School Managment System',
		period: {
			from: new Date()
		},
		skills: getSkills('angularjs', 'ts', 'tailwind', 'sass','mssql','c#'),
		type: 'School Portal',
		screenshots: [
			{
				label: '1',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/f378345773104b7a6cbc8148dc30462f/detailed'
			},
			{
				label: '2',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/30a5ec3e886886a4f1846f36a1ba652e/detailed'
			},
			{
				label: '3',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/41b70c46232beec7f53aa2df3641d480/detailed'
			},
			{
				label: '4',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/1ae6c031edb44533a0a24a85fed9347c/detailed'
			},
			{
				label: '5',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/f497919ad97d4cfb941a437cc8b605e6/detailed'
			},
			{
				label: '6',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/e4e3db7afc8f5aaa15cb62182c3c1469/detailed'
			},
			{
				label: '7',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/bdd42156b2c65c179745e14ec979b8d9/detailed'
			},
			{
				label: '8',
				src: 'https://res-console.cloudinary.com/livsolution/media_explorer_thumbnails/182835691d8d5e84c85d3a29ddcc0a04/detailed'
			}
		]
	},
];

export default MY_PROJECTS;
