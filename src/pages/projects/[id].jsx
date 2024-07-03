import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiClock, FiTag } from 'react-icons/fi'
import PagesMetaHead from '../../components/PagesMetaHead'
import { projectsData } from '../../data/projectsData'
import RelatedProjects from '../../components/projects/RelatedProjects'

function ProjectSingle(props) {
  return (
    <div className='container mx-auto'>
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 1 }} exit={{ opacity: 0 }}>
        <div>
          <p className='font-general-medium text-left text-3xl sm:text-4xl font-bold text-jefferson-dark dark:text-primary-light mt-14 sm:mt-20 mb-7'>
            {props.project.ProjectHeader.title}
          </p>
          <div className='flex'>
            <div className='flex items-center mr-10'>
              <FiClock className='text-xl text-jefferson-dark dark:text-ternary-light' />
              <span className='font-general-regular ml-2 leading-none text-jefferson-dark dark:text-primary-light'>
                {props.project.ProjectHeader.publishDate}
              </span>
            </div>
            <div className='flex items-center'>
              <FiTag className='w-4 h-4 text-jefferson-dark dark:text-ternary-light' />
              <span className='font-general-regular ml-2 leading-none text-jefferson-dark dark:text-primary-light'>
                {props.project.ProjectHeader.tags}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {/* <div className='grid grid-cols-1 sm:grid-cols-1 sm:gap-10 mt-12'>
          {props.project.ProjectImages.map((project) => {
            return (
              <div className='mb-10 sm:mb-0' key={project.id}>
                <Image
                  src={project.img}
                  className='rounded-xl cursor-pointer shadow-xl sm:shadow-xl'
                  alt={project.title}
                  key={project.id}
                  layout='responsive'
                  width={100}
                  height={90}
                />
              </div>
            )
          })}
        </div> */}

        {/* Info */}
        <div className='block sm:flex gap-0 sm:gap-10 mt-14'>
          <div className='w-full sm:w-1/3 text-left'>
            {/* Single project client details */}
            <div className='mb-7'>
              <p className='font-general-regular text-3xl font-semibold text-jefferson-dark dark:text-secondary-light mb-2'>
                {props.project.ProjectInfo.ProjectHeading}
              </p>
              <ul className='leading-loose text-xl'>
                {props.project.ProjectInfo.ProjectAboutInfo.map((info) => {
                  return (
                    <li
                      className='font-general-medium text-jefferson-dark dark:text-white/80 '
                      key={info.id}
                    >
                      <span>{info.title}: </span>
                      <a
                        href={info.url}
                        target='a_blank'
                        className={
                          info.title === 'Website' || info.title === 'Github'
                            ? 'text-jefferson-maindark dark:text-jefferson-main decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-dark hover:dark:text-jefferson-light cursor-pointer duration-300'
                            : ''
                        }
                        aria-label='Project Website '
                      >
                        {info.details}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Single project objectives */}
            <div className='mb-7'>
              <p className='font-general-regular text-3xl font-semibold text-jefferson-dark dark:text-ternary-light mb-2'>
                {props.project.ProjectInfo.FeatureHeading}
              </p>
              <div className='font-general-medium text-jefferson-dark dark:text-white/80'>
                <ul className='list-disc text-xl'>
                  {props.project.ProjectInfo.FeatureDetails.map((details) => {
                    return <li key={details.id}>・{details.details}</li>
                  })}
                </ul>
              </div>
            </div>

            {/* Single project technologies */}
            <div className='mb-7'>
              <p className='font-general-regular text-3xl font-semibold text-jefferson-dark dark:text-ternary-light mb-2'>
                {props.project.ProjectInfo.TechnologiesTitle}
              </p>

              <ul className='list-disc text-xl'>
                {props.project.ProjectInfo.TechnologiesDetails.map((Details) => {
                  return (
                    <li
                      className='font-general-medium text-jefferson-dark dark:text-ternary-light '
                      key={Details.id}
                    >
                      <span>・{Details.title}</span>
                      <a
                        href={Details.url}
                        target='a_blank'
                        className={
                          'text-jefferson-maindark dark:text-jefferson-main decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-dark hover:dark:text-jefferson-light cursor-pointer duration-300'
                        }
                        aria-label='Inspiration Website '
                      >
                        {Details.details}
                      </a>
                    </li>
                  )
                })}
              </ul>

              {/* <p className="font-general-regular text-2xl font-semibold text-ternary-light mb-2">
							{props.project.ProjectInfo.Technologies[0].title}
						</p> */}
              {/* <p className="font-general-regular text-ternary-light">
							{props.project.ProjectInfo.Technologies[0].techs.join(
								', '
							)}
						</p> */}
            </div>

            <div className='mb-7'>
              <p className='font-general-regular text-3xl font-semibold text-jefferson-dark dark:text-ternary-light mb-2'>
                {props.project.ProjectInfo.InspirationHeading}
              </p>
              <div className='font-general-regular text-jefferson-dark dark:text-ternary-light'>
                <ul className='list-disc text-xl'>
                  {props.project.ProjectInfo.InspirationDetails.map((Details) => {
                    return (
                      <li
                        className='font-general-medium text-jefferson-dark dark:text-ternary-light '
                        key={Details.id}
                      >
                        <span>・{Details.title}</span>
                        <a
                          href={Details.url}
                          target='a_blank'
                          className={
                            'text-jefferson-maindark dark:text-jefferson-main decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-dark hover:dark:text-jefferson-light cursor-pointer duration-300'
                          }
                          aria-label='Inspiration Website '
                        >
                          {Details.details}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/*  Single project right section details */}
          <div className='w-full sm:w-2/3 text-left mt-10 sm:mt-0'>
            {/* <div className='grid grid-cols-1 sm:grid-cols-1 sm:gap-10 mb-6'>
              {props.project.ProjectImages.map((project) => {
                return (
                  <div className='mb-10 sm:mb-0 border' key={project.id}>
                    <Image
                      src={project.img}
                      className='rounded-xl cursor-pointer shadow-xl sm:shadow-xl'
                      alt={project.title}
                      key={project.id}
                      layout='responsive'
                      width={100}
                      height={90}
                    />
                  </div>
                )
              })}
            </div> */}
            <p className='text-jefferson-dark dark:text-white/80 text-3xl font-bold mb-7'>
              {props.project.ProjectInfo.ProjectDetailsHeading}
            </p>
            {props.project.ProjectInfo.ProjectDetails.map((details) => {
              return (
                <p
                  key={details.id}
                  className='font-general-regular mb-5 text-xl text-jefferson-dark dark:text-white/80'
                >
                  {details.details}
                </p>
              )
            })}
            <p className='text-jefferson-dark dark:text-white/80 text-3xl font-bold mb-7'>
              {props.project.ProjectInfo.ProjectSecondDetailsHeading}
            </p>
            {props.project.ProjectInfo.ProjectSecondDetails.map((details) => {
              return (
                <p
                  key={details.id}
                  className='font-general-regular mb-5 text-xl text-jefferson-dark dark:text-white/80'
                >
                  {details.details}
                </p>
              )
            })}
            <p className='text-jefferson-dark dark:text-white/80 text-3xl font-bold mb-7'>
              {props.project.ProjectInfo.ContinuedDevelopmentHeading}
            </p>
            {props.project.ProjectInfo.ContinuedDevelopment.map((details) => {
              return (
                <p
                  key={details.id}
                  className='font-general-regular mb-5 text-xl text-jefferson-dark dark:text-white/80'
                >
                  {details.details}
                </p>
              )
            })}
          </div>
        </div>

        <RelatedProjects />
      </motion.div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0]
    }
  }
}

export default ProjectSingle
