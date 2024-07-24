import { v4 as uuidv4 } from 'uuid'

import { SiGithub, SiTwitter, SiWakatime } from 'react-icons/si'
import { IoLogoDiscord, IoDocumentText } from 'react-icons/io5'

export const heroData = [
  {
    intro: {
      name: 'RJ Jefferson',
      role: 'Self-Taught Developer',
      summary:
        'As an independent student, I manage my own time to improve my skills. Currently, I am studying full-stack development through various resources and learning Data Structures and Algorithms on FreeCodeCamp (YouTube). I learn best by building projects, which has rapidly developed my capabilities.'
    },
    link: {
      social: [
        {
          id: uuidv4(),
          url: 'https://discordapp.com/users/606481557615542273',
          label: 'Check out my Discord',
          icon: IoLogoDiscord,
          target: '_blank',
          rel: 'me'
        },
        {
          id: uuidv4(),
          url: 'https://twitter.com/jeffersonrj14',
          label: 'Check out my Twitter',
          icon: SiTwitter,
          target: '_blank',
          rel: 'me'
        },
        {
          id: uuidv4(),
          url: 'https://github.com/jeffersonrj14',
          label: 'Check out my Github',
          icon: SiGithub,
          target: '_blank',
          rel: 'me'
        },
        {
          id: uuidv4(),
          url: 'https://wakatime.com/@jeffersonrj14',
          label: 'Check out my Wakatime',
          icon: SiWakatime,
          target: '_blank',
          rel: 'me'
        },
        {
          id: uuidv4(),
          url: '/resume.pdf',
          label: 'Check out my Resume',
          icon: IoDocumentText,
          target: '_self',
          rel: 'me'
        }
      ]
    }
  }
]
