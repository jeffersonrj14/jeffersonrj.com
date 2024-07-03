import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const imageStyle = { maxWidth: '100%', height: 'auto' }

function ProjectSingle(props) {
  const handleIconClick = (e) => {
    e.stopPropagation()
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15
      }}
    >
      <Link href='/projects/[id]' as={'/projects/' + props.id} aria-label='Single Project' passHref>
        <div className='rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-jefferson-light dark:bg-jefferson-dark'>
          <div>
            <Image
              src={props.img}
              className='rounded-t-xl border-none'
              alt='Single Project'
              layout='responsive'
              width={100}
              height={90}
            />
          </div>
          <div className='text-center px-4 py-6'>
            <p className='font-general-medium text-xl md:text-2xl text-jefferson-dark dark:text-jefferson-light mb-2'>
              {props.title}
            </p>
            <span className='text-lg text-jefferson-dark dark:text-jefferson-light'>
              {props.category}
            </span>
            <div className='flex flex-row justify-between text-2xl gap-x-2 '>
              <a
                href={props.githubrepo}
                passHref
                className='text-gray-400 dark:text-slate-500 hover:text-[#212121] dark:hover:text-slate-200 transition select-none'
                onClick={handleIconClick}
                target='_blank'
              >
                <FaGithub />
              </a>
              <a
                href={props.livepreview}
                passHref
                className='text-gray-400 dark:text-slate-500 hover:text-[#212121] dark:hover:text-slate-200 transition select-none'
                onClick={handleIconClick}
                target='_blank'
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectSingle
