import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Angular developer',
		company: 'Sunoida Solutions Pvt Ltd',
		description: 'Sunoida Solutions, incorporated in 2011, is one of the fastest growing Banking BI & Analytics companies in the emerging markets.',
		contract: ContractType.Contract,
		type: 'Software Development',
		location: 'Chennai (Tamil naidu)',
		period: { from: new Date(2022, 5, 11), to: new Date(2023, 5, 11) },
		skills: getSkills('ts', 'js','angularjs'),
		name: 'Full stack Developer',
		color: 'red',
		links: [{ to: 'https://sunoida.com/our-profile/', label: 'Sunoida' }],
		
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'HoozoN',
		description: 'Web app to list your job and match with other requirement',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Noida',
		period: { from: new Date(2020, 5, 11), to: new Date(2023, 2, 5) },
		skills: getSkills('angularjs', 'ts', 'sass', 'c#', 'html', 'js'),
		name: 'Freelancer - Full stack Developer',
		color: 'blue',
		links: [{ to: 'https://hoozonline.com/', label: 'Hoozon' }],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: '.Net Developer',
		company: 'Victorious Infotech Pvt.Ltd',
		description: 'Developed and maintained MVC5 using C# and Angular 12, enablingseamless integrationwithfront-end applications',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pune',
		period: { from: new Date(2017, 0, 1), to: new Date(2018, 7, 9) },
		skills: getSkills('css', 'html', 'js','c#','sql'),
		name: 'Full stack Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'Database Engineer',
		company: 'STARSUN TECHNOLOGY PRIVATE LIMITED',
		description: 'Developed and maintained MVC5 using C# and Angular 12, enablingseamless integrationwithfront-end applications',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Noida',
		period: { from: new Date(2018, 8, 18), to: new Date(2022, 7, 22) },
		skills: getSkills('css', 'html', 'js','c#','sql'),
		name: 'Full stack Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
