import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'

const RelatedProject = {
  title: 'Other Projects',
  Projects: [
    {
      id: uuidv4(),
      title: 'Portfolio',
      img: '/images/projects/portfolio/portfolio-img.webp',
      href: '/projects/1'
    },
    {
      id: uuidv4(),
      title: 'Projects',
      img: '/images/projects/utils/hi.webp',
      href: '/projects/2'
    },
    {
      id: uuidv4(),
      title: 'Projects',
      img: '/images/projects/react-projects/image.webp',
      href: '/projects/3'
    }
  ]
}

function RelatedProjects() {
  return (
    <div className='mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-jefferson-dark dark:border-primary-light '>
      <p className='font-general-regular text-jefferson-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left'>
        {RelatedProject.title}
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-4 gap-10'>
        {RelatedProject.Projects.map((project) => {
          return (
            <a key={project.id} href={project.href}>
              <Image
                src={project.img}
                className='rounded-xl cursor-pointer'
                width='400'
                height='400'
                alt={project.title}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default RelatedProjects
