import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
        degree: '10th',
        description: 'Science Stream (ICSC) 65%',
        location: 'PATNA (BIHAR)',
        logo: Assets.Unknown,
        name: '',
        organization: 'Mount carmel school',
        period: { from: new Date(2010, 1, 8) ,to: new Date(2011, 9, 5)},
        shortDescription: '',
        slug: 'dummy-education-item-4',
        subjects: ['Physics', 'Math', 'Chemestry', 'Geography', 'English' ,'Computer Programming','Biology']
    },
	{
        degree: '12th',
        description: 'Science Stream (Bihar Board) 60%',
        location: 'PATNA (BIHAR)',
        logo: Assets.Unknown,
        name: '',
        organization: '',
        period: { from: new Date(2010, 4, 8),to: new Date(2012, 8, 5) },
        shortDescription: '',
        slug: 'dummy-education-item-3',
        subjects: ['Physics', 'Math', 'Chemestry', 'Geography', 'English' ,'Computer Programming','Biology']
    },
	{
		degree: 'Bachelor degree of Computer Science',
		description: 'DropOut in 3rd year',
		location: 'HYDERABAD',
		logo: Assets.Unknown,
		name: '',
		organization: 'JNTUH',
		period: { from: new Date(2012, 4, 8), to: new Date(2014, 5, 1) },
		shortDescription: 'DropOut',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Web design', 'C++', 'Java', 'MATH','Networking']
	},
	{
		degree: 'Diploma in Computer Science',
		description: 'Scored 72%',
		location: 'DELHI',
		logo: Assets.Unknown,
		name: '',
		organization: 'Zakir Hussain',
		period: { from: new Date(2015, 6, 6),to: new Date(2016, 8, 5) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['c', 'c++', 'Computer Architecture', 'Algorithms and Data structures']
	}
];
