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
          details: 'Spotify API: Currently Playing'
        },
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
          details: 'Next.js',
          url: 'https://nextjs.org/'
        },
        {
          id: uuidv4(),
          details: 'React',
          url: 'https://react.dev/'
        },
        {
          id: uuidv4(),
          details: 'Tailwind CSS',
          url: 'https://tailwindcss.com/'
        },
        {
          id: uuidv4(),
          details: 'Canva',
          url: 'https://www.canva.com/'
        },
        {
          id: uuidv4(),
          details: 'Vercel',
          url: 'https://vercel.com/'
        }
      ],
      InspirationHeading: 'Documentation',
      InspirationDetails: [
        {
          id: uuidv4(),
          details: 'Spotify API',
          url: 'https://developer.spotify.com/documentation/web-api/reference/get-the-users-currently-playing-track'
        },
        {
          id: uuidv4(),
          details: 'Next-SEO',
          url: 'https://blog.logrocket.com/manage-seo-next-js-with-next-seo/'
        }
      ],
      ProjectDetailsHeading: 'Main Goal',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'The main goal of creating a portfolio is to showcase my projects, add more features, and build as I learn while creating this portfolio. I have been looking at many portfolios for inspiration.'
        }
      ],
      ProjectSecondDetailsHeading: 'My Difficulty',
      ProjectSecondDetails: [
        {
          id: uuidv4(),
          details:
            'You might think that I do not encounter any difficulties when making these changes, but I do face challenges, particularly when integrating the Spotify currently playing feature. It often throws errors, but after learning from the Spotify developer docs and other developer blogs and posts from dev.to, I finally managed to implement it.'
        },
        {
          id: uuidv4(),
          details:
            'I also encountered many problems when it came to using next-seo. I wanted the title to change every time I navigated to a new page. Initially, I was stuck and unsure of what to do, but I eventually managed to fix it, and now it works fine.'
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
          details: 'Node.js',
          url: 'https://nodejs.org/en'
        },
        {
          id: uuidv4(),
          details: 'Discord.js',
          url: 'https://discord.js.org/'
        }
      ],
      InspirationHeading: 'Inspiration',
      InspirationDetails: [
        {
          id: uuidv4(),
          details: 'Discord Bot',
          url: 'https://github.com/odziem/discord-bot'
        }
      ],
      ProjectDetailsHeading: 'Main Goal',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'Created a reminder bot using Node.js to help users manage study schedules effectively. This is an ongoing fun project in which I will be adding new commands to the bot, making it more interactive and innovative.'
        }
      ],
      ProjectSecondDetailsHeading: 'My Difficulty',
      ProjectSecondDetails: [
        {
          id: uuidv4(),
          details: ' Have not been able to add the /stop command.'
        }
      ]
    }
  }
  // =======================================================
  // =======================================================
  // =======================================================
]
