import {
    SiReact,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiTailwindcss,
    SiVisualstudiocode,
    SiGit,
    SiGithub,
    SiGnubash,
  } from 'react-icons/si'

  import { motion } from 'framer-motion'
  import { showHoverAnimation, removeHoverAnimation } from '../../lib/windowAnimation'
  import { FadeContainer, popUp } from '../../lib/FramerMotionVariants'

  const skills = [ 
    {
      name: 'HTML',
      logo: SiHtml5,
    },
    {
      name: 'CSS',
      logo: SiCss3,
    },
    {
      name: 'Bootstrap',
      logo: SiBootstrap,
    },
    {
      name: 'JavaScript',
      logo: SiJavascript,
    },
    {
      name: 'TypeScript',
      logo: SiTypescript,
    },
    {
      name: 'Nextjs',
      logo: SiNextdotjs,
    },
    {
      name: 'React',
      logo: SiReact,
    },
    {
      name: 'Tailwind CSS',
      logo: SiTailwindcss,
    },
    {
      name: 'Visual Studio Code',
      logo: SiVisualstudiocode,
    },
    {
      name: 'Git',
      logo: SiGit,
    },
    {
      name: 'Github',
      logo: SiGithub,
    },
    {
      name: 'Bash',
      logo: SiGnubash,
    },
  ]
  
  function Skills () {
    return (
      <>
      <section className='pt-5'>
        <span className=" title-font text-3xl font-bold">My Skills</span>
        <hr class="h-px my-2 bg-jefferson-dark border-0 dark:bg-jefferson-light rounded-full" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="my-10 grid grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => {
            return (
              <motion.div
                title={skill.name}
                variants={popUp}
                key={skill.name}
                onMouseMove={(e) => showHoverAnimation(e)}
                onMouseLeave={(e) => removeHoverAnimation(e)}
                className="dark:bg-jefferson-dark group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-jefferson-dark p-4 dark:border-jefferson-light hover:dark:bg-darkSecondary sm:justify-start md:origin-top"
              >
                <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                  <skill.logo className="h-8 w-8" />
                </div>
                <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
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
  
  export default Skills;