import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLatex,
  SiVisualstudiocode,
  SiIntellijidea
} from 'react-icons/si'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '@/lib/windowAnimation'
import { FadeContainer, popUp } from '@/lib/FramerMotionVariants'

const skills = [
  {
    name: 'HTML',
    logo: SiHtml5
  },
  {
    name: 'CSS',
    logo: SiCss3
  },
  {
    name: 'JavaScript',
    logo: SiJavascript
  },
  {
    name: 'React',
    logo: SiReact
  },
  {
    name: 'Next.JS',
    logo: SiNextdotjs
  },
  {
    name: 'Tailwind CSS',
    logo: SiTailwindcss
  },
  {
    name: 'Git',
    logo: SiGit
  },
  {
    name: 'Github',
    logo: SiGithub
  },
  {
    name: 'LaTeX',
    logo: SiLatex
  },
  {
    name: 'Visual Studio Code',
    logo: SiVisualstudiocode
  },
  {
    name: 'IntelliJ IDEA',
    logo: SiIntellijidea
  }
]

function Skills() {
  return (
    <>
      <section className='pt-5'>
        <span className='font-general-medium font-bold text-2xl sm:text-4xl mb-1 text-jefferson-dark dark:text-jefferson-light'>
          Skills
        </span>
        <hr className='h-px my-2 border-0 bg-jefferson-dark dark:bg-jefferson-light rounded-full ' />
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={FadeContainer}
          viewport={{ once: true }}
          className='my-10 grid grid-cols-3 gap-4'
        >
          {skills.map((skill, index) => {
            return (
              <motion.div
                title={skill.name}
                variants={popUp}
                key={skill.name}
                onMouseMove={(e) => showHoverAnimation(e)}
                onMouseLeave={(e) => removeHoverAnimation(e)}
                className='bg-white/80 dark:bg-jefferson-dark group flex origin-center transform items-center justify-center gap-4 rounded-sm border p-4 border-jefferson-dark dark:border-jefferson-light sm:justify-start md:origin-top'
              >
                <div className='text-jefferson-dark dark:text-jefferson-light pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100'>
                  <skill.logo className='h-8 w-8' />
                </div>
                <p className='text-jefferson-dark dark:text-jefferson-light pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base'>
                  {skill.name}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>
    </>
  )
}

export default Skills
