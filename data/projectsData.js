import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Next.js Portfolio',
		url: 'https://portfolio.jeffersonfed.xyz',
		category: 'Portfolio',
		img: '/images/projects/portfolio/1.png',
		ProjectHeader: {
			title: 'Next.js Portfolio',
			publishDate: 'Mar 14, 2024',
			tags: 'Portfolio',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Next.js Portfolio',
				img: '/images/projects/portfolio/portfolio-img.png',
			},
		],
		ProjectInfo: {
			ProjectHeading: 'About Project',
			ProjectAboutInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Next.js Portfolio',
				},
				{
					id: uuidv4(),
					title: 'Github',
					details: 'Github Code',
					url: 'https://github.com/jeffersonrj14/jeffersonrj.com',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'Click here for Live Preview',
					url: 'https://jeffersonrj.com',
				},
				
			],
			FeatureHeading: 'Features',
			FeatureDetails:[
				{
					id: uuidv4(),
					details:
						'Custom Hooks (Will be remove)',
				},
				{
					id: uuidv4(),
					details:
						'Framer Motion',
				},
				{
					id: uuidv4(),
					details:
						'Projects filter',
				},
				{
					id: uuidv4(),
					details:
						'Dark Mode',
				},
			],
				
			TechnologiesTitle: 'Tools & Technologies',
			TechnologiesDetails:[
				{
					id: uuidv4(),
					details:
						'Next.js',
				},
				{
					id: uuidv4(),
					details:
						'React',
				},
				{
					id: uuidv4(),
					details:
						'Tailwind CSS',
				},
				{
					id: uuidv4(),
					details:
						'Canva',
				},
			],
			ProjectDetailsHeading: 'Intro',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'I am still learning Next.js and building this portfolio. I have been looking at many portfolios for inspiration, and I have gained so much insight that I now want to create my own portfolio.',
				},
				
			],
			ProjectSecondDetailsHeading: "Main Goal",
			ProjectSecondDetails: [
				{
					id: uuidv4(),
					details:
						' The main goal of creating a portfolio is to showcase my projects, add more features, simplify it, and also remove unnecessary code. There is a lot of unnecessary code that I need to remove, but I am doing it slowly because I do not want to break the entire website.',
				},
				
			],
			
		},
	},
	
];
