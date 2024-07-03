import { v4 as uuidv4 } from 'uuid'
// 1440 x 897
export const projectsData = [
  {
    id: 1,
    title: 'Personal Website',
    url: 'https://jeffersonrj.com',
    githubrepo: 'https://github.com/jeffersonrj14/jeffersonrj.com',
    livepreview: 'https://jeffersonrj.com',
    category: 'Portfolio',
    img: '/images/projects/portfolio/portfolio-img.webp',
    ProjectHeader: {
      title: 'Personal Website',
      publishDate: 'Mar 14, 2024',
      tags: 'Portfolio, Personal Website'
    },
    ProjectInfo: {
      ProjectHeading: 'About Project',
      ProjectAboutInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Personal Website'
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
            'I do face challenges, particularly when integrating the Spotify currently playing feature. It often throws errors, but after learning from the Spotify developer docs and other developer blogs and posts from dev.to, I finally managed to implement it.'
        },
        {
          id: uuidv4(),
          details:
            'I also encountered many problems when it came to using next-seo. I wanted the title to change every time I navigated to a new page. Initially, I was stuck and unsure of what to do, but I eventually managed to fix it, and now it works fine.'
        }
      ],
      ContinuedDevelopmentHeading: 'Continued Development',
      ContinuedDevelopment: [
        {
          id: uuidv4(),
          details:
            'I will continue to develop this site and follow up on each package update that I use in this project. I will also come up with new features whenever I have the idea.'
        },
        {
          id: uuidv4(),
          details:
            'For the time being, I will stick to JSX. I have been planning to use TypeScript (TS) as well.'
        }
      ]
    }
  },
  // =======================================================
  // =======================================================
  // =======================================================
  {
    id: 2,
    title: 'Utilities',
    url: 'https://hi.jeffersonrj.com',
    githubrepo: 'https://github.com/jeffersonrj14/hi.jeffersonrj.com',
    livepreview: 'https://hi.jeffersonrj.com',
    category: 'Projects',
    img: '/images/projects/utils/hi.webp',
    ProjectHeader: {
      title: 'Utilities',
      publishDate: 'June 9, 2024',
      tags: 'Utilities, blog'
    },
    ProjectInfo: {
      ProjectHeading: 'About Project',
      ProjectAboutInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'Utilities'
        },
        {
          id: uuidv4(),
          title: 'Github',
          details: 'Github Code',
          url: 'https://github.com/jeffersonrj14/hi.jeffersonrj.com'
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'Click here for Live Preview',
          url: 'https://hi.jeffersonrj.com'
        }
      ],
      FeatureHeading: 'Features',
      FeatureDetails: [
        {
          id: uuidv4(),
          details: 'Utilites'
        },
        {
          id: uuidv4(),
          details: 'Blog Posts'
        }
      ],

      TechnologiesTitle: 'Tools & Technologies',
      TechnologiesDetails: [
        {
          id: uuidv4(),
          details: 'Astro',
          url: 'https://astro.build/'
        },
        {
          id: uuidv4(),
          details: 'TypeScript',
          url: 'https://www.typescriptlang.org/'
        },
        {
          id: uuidv4(),
          details: 'Tailwind CSS',
          url: 'https://tailwindcss.com/'
        },
        {
          id: uuidv4(),
          details: 'SolidJS',
          url: 'https://www.solidjs.com/'
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
          details: 'Build blog with Astro',
          url: 'https://docs.astro.build/en/tutorial/0-introduction/'
        },
        {
          id: uuidv4(),
          details: 'TypeScript crash course',
          url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gNhFQgS4edYLqP7LkZcFMN'
        },
        {
          id: uuidv4(),
          details: 'SolidJS crash course',
          url: 'https://youtube.com/playlist?list=PL4cUxeGkcC9gU_GvFygZFu0aBysPilkbB&si=Pj0S59LUW4a-FwIj'
        }
      ],
      ProjectDetailsHeading: 'Main Goal',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'Creating utilities/tools that I might need from time to time and also a few posts will be posted here as a reminder to myself.'
        }
      ],
      ProjectSecondDetailsHeading: 'My Difficulty',
      ProjectSecondDetails: [
        {
          id: uuidv4(),
          details:
            'Adopting Astro Framework and Solid JS was initially challenging due to their unique concepts and syntax. I spent a significant amount of time reading documentation, watching tutorials, and experimenting with small projects to get comfortable with these tools. This hands-on approach was crucial in overcoming the learning curve.'
        },
        {
          id: uuidv4(),
          details:
            'One of my goals for this project was to practice with TypeScript. Having primarily used JavaScript in the most of time, I wanted to familiarize myself with TypeScript’s static typing system. This meant I needed to define the types for my props and state upfront, which added an initial layer of complexity.'
        },
        {
          id: uuidv4(),
          details:
            'Creating a blog with Markdown came with its own set of challenges. When I originally started using Markdown for my blog entries, I didn’t understand why the styles weren’t applying correctly. I did some research and found that in order to render Markdown, I needed to add custom CSS. To solve this, I created a post.css file in the styles directory specifically for styling Markdown content.'
        }
      ],
      ContinuedDevelopmentHeading: 'Continued Development',
      ContinuedDevelopment: [
        {
          id: uuidv4(),
          details:
            'I will only update this page whenever I come up with a new idea to add new utilities. Regarding the blog, I have created it on this site but do not plan to update it daily, weekly, or monthly. However, I will add new blog posts later when I have something to write about.'
        }
      ]
    }
  },
  // =======================================================
  // =======================================================
  // =======================================================
  {
    id: 3,
    title: 'React Projects',
    url: 'https://projects.jeffersonrj.com',
    githubrepo: 'https://github.com/jeffersonrj14/react-projects',
    livepreview: 'https://projects.jeffersonrj.com',
    category: 'Projects',
    img: '/images/projects/react-projects/image.webp',
    ProjectHeader: {
      title: 'React Projects',
      publishDate: 'June 13, 2024',
      tags: 'Practice, Exercise'
    },
    ProjectInfo: {
      ProjectHeading: 'About Project',
      ProjectAboutInfo: [
        {
          id: uuidv4(),
          title: 'Name',
          details: 'React Projects'
        },
        {
          id: uuidv4(),
          title: 'Github',
          details: 'Github Code',
          url: 'https://github.com/jeffersonrj14/react-projects'
        },
        {
          id: uuidv4(),
          title: 'Website',
          details: 'Click here for Live Preview',
          url: 'https://projects.jeffersonrj.com'
        }
      ],
      FeatureHeading: 'Project List',
      FeatureDetails: [
        {
          id: uuidv4(),
          details: 'Personal Project'
        },
        {
          id: uuidv4(),
          details: 'Games'
        },
        {
          id: uuidv4(),
          details: 'Frontend Mentor Solution'
        }
      ],

      TechnologiesTitle: 'Tools & Technologies',
      TechnologiesDetails: [
        {
          id: uuidv4(),
          details: 'Vite',
          url: 'https://vitejs.dev/'
        },
        {
          id: uuidv4(),
          details: 'React',
          url: 'https://react.dev/'
        },
        {
          id: uuidv4(),
          details: 'TypeScript',
          url: 'https://www.typescriptlang.org/'
        },
        {
          id: uuidv4(),
          details: 'Tailwind CSS',
          url: 'https://tailwindcss.com/'
        },
        {
          id: uuidv4(),
          details: 'Custom CSS',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
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
          details: 'How to Use React Helmet',
          url: 'https://www.freecodecamp.org/news/react-helmet-examples/'
        },
        {
          id: uuidv4(),
          details: 'React Router',
          url: 'https://reactrouter.com/en/main'
        },
        {
          id: uuidv4(),
          details: 'Learning by creating projects',
          url: 'https://medium.com/geekculture/why-should-you-start-working-on-projects-27bb91c0e906'
        }
      ],
      ProjectDetailsHeading: 'Main Goal',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            'I am creating these React projects as part of my practice and gaining experience in project building. Many problems arise, perhaps due to missing expressions or brackets.'
        }
      ],
      ProjectSecondDetailsHeading: 'My Difficulty',
      ProjectSecondDetails: [
        {
          id: uuidv4(),
          details:
            'In TypeScript is that I need to define variables, specifying whether they are strings, numbers, booleans, void, etc. However, TypeScript helps by identifying errors before deployment.'
        }
      ],
      ContinuedDevelopmentHeading: 'Continued Development',
      ContinuedDevelopment: [
        {
          id: uuidv4(),
          details:
            'As mentioned before, this is part of my exercise/practice. I will code daily but may not push to GitHub daily—perhaps every two weeks or longer intervals.'
        }
      ]
    }
  }
  // =======================================================
  // =======================================================
  // =======================================================
]
