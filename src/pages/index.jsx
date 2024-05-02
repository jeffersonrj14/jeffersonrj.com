import Link from 'next/link'
import PagesMetaHead from '../components/PagesMetaHead'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import Button from '../components/reusable/Button'
import Hero from '../components/index/Hero'
import Skills from '../components/index/Skills'

export default function Home() {
  return (
    <div className='container mx-auto text-jefferson-light'>
      <PagesMetaHead title='Home' />

      <Hero />
      <Skills />
      <ProjectsGrid />

      <div className='mt-10 sm:mt-15 flex justify-center'>
        <Link href='/projects' aria-label='More Projects' passHref>
          <div className='font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-jefferson-light  hover:bg-jefferson-main  dark:hover:bg-jefferson-main hover:text-jefferson-light text-jefferson-dark focus:ring-1 focus:ring-indigo-900 text-lg sm:text-xl duration-300'>
            <Button title='More Projects' />
          </div>
        </Link>
      </div>
    </div>
  )
}
