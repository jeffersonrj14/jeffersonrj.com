import { v4 as uuidv4 } from 'uuid'
// 1440 x 897
export const projectsData = [
  {
    id: 1,
    title: 'Next.js Portfolio',
    url: 'https://jeffersonrj.com',
    category: 'Portfolio',
    img: '/images/projects/portfolio/1.png',
    ProjectHeader: {
      title: 'Next.js Portfolio',
      publishDate: 'Mar 14, 2024',
      tags: 'Portfolio'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Next.js Portfolio',
        img: '/images/projects/portfolio/portfolio-img.png'
      }
    ],
    ProjectInfo: {
      ProjectHeading: 'About Project',
      ProjectAboutInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Next.js Portfolio'
        },
        {
          id: uuidv4(),
          title: 'Github',
          details: 'Github Code',
          url: 'https://github.com/jeffersonrj14/jeffersonrj.com'
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'Click here for Live Preview',
          url: 'https://jeffersonrj.com'
        }
      ],
      FeatureHeading: 'Features',
      FeatureDetails: [
        {
          id: uuidv4(),
          details: 'Custom Hooks'
        },
        {
          id: uuidv4(),
          details: 'Framer Motion'
        },
        {
          id: uuidv4(),
          details: 'Projects filter'
        }
      ],

      TechnologiesTitle: 'Tools & Technologies',
      TechnologiesDetails: [
        {
          id: uuidv4(),
          details: 'Next.js'
        },
        {
          id: uuidv4(),
          details: 'React'
        },
        {
          id: uuidv4(),
          details: 'Tailwind CSS'
        },
        {
          id: uuidv4(),
          details: 'Canva'
        }
      ],
      ProjectDetailsHeading: 'Intro',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'I am still learning Next.js and building this portfolio. I have been looking at many portfolios for inspiration, and I have gained so much insight that I now want to create my own portfolio.'
        }
      ],
      ProjectSecondDetailsHeading: 'Main Goal',
      ProjectSecondDetails: [
        {
          id: uuidv4(),
          details:
            ' The main goal of creating a portfolio is to showcase my projects, add more features, simplify it, and also remove unnecessary code. There is a lot of unnecessary code that I need to remove, but I am doing it slowly because I do not want to break the entire website.'
        }
      ]
    }
  },
  // =======================================================
  // =======================================================
  // =======================================================
  {
    id: 2,
    title: 'Reminder Discord Bot',
    url: 'https://github.com/jeffersonrj14/discord-study-remainder-bot',
    category: 'Project',
    img: '/images/projects/bot/1.png',
    ProjectHeader: {
      title: 'Reminder Discord Bot',
      publishDate: 'Jan 01, 2024',
      tags: 'Project'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Reminder Discord Bot',
        img: '/images/projects/bot/result.png'
      }
    ],
    ProjectInfo: {
      ProjectHeading: 'About Project',
      ProjectAboutInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Reminder Discord Bot'
        },
        {
          id: uuidv4(),
          title: 'Github',
          details: 'Github Code',
          url: 'https://github.com/jeffersonrj14/discord-study-remainder-bot'
        }
      ],
      FeatureHeading: 'Features',
      FeatureDetails: [
        {
          id: uuidv4(),
          details: 'Study reminders'
        }
      ],

      TechnologiesTitle: 'Tools & Technologies',
      TechnologiesDetails: [
        {
          id: uuidv4(),
          details: 'Node.js'
        },
        {
          id: uuidv4(),
          details: 'Discord.js'
        }
      ],
      ProjectDetailsHeading: 'Intro',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'Created a reminder bot using Node.js to help users manage study schedules effectively.'
        }
      ],
      ProjectSecondDetailsHeading: 'Main Goal',
      ProjectSecondDetails: [
        {
          id: uuidv4(),
          details:
            ' This is an ongoing fun project in which I will be adding new commands to the bot, making it more interactive and innovative.'
        }
      ]
    }
  }
  // =======================================================
  // =======================================================
  // =======================================================
]
