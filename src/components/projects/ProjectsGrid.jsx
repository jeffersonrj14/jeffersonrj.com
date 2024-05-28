import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import ProjectSingle from './ProjectSingle'
import { projectsData } from '../../data/projectsData'
import ProjectsFilter from './ProjectsFilter'

function ProjectsGrid() {
  const [setSearchProject] = useState()
  const [selectProject, setSelectProject] = useState()

  // @todo - To be fixed
  // const searchProjectsByTitle = projectsData.filter((item) => {
  // 	const result = item.title
  // 		.toLowerCase()
  // 		.includes(searchProject.toLowerCase())
  // 		? item
  // 		: searchProject == ''
  // 		? item
  // 		: '';
  // 	return result;
  // });

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category = item.category.charAt(0).toUpperCase() + item.category.slice(1)
    return category.includes(selectProject)
  })

  return (
    <section className='pt-5'>
      <div className='text-left '>
        <p className='font-general-medium font-bold text-2xl sm:text-4xl mb-1 text-jefferson-light '>
          Projects
        </p>
      </div>
      <hr className='h-px my-2 border-0 bg-jefferson-light rounded-full ' />

      <div className='mt-5 sm:mt-8'>
        {/* border-b border-jefferson-dark dark:border-jefferson-light */}
        <div
          className='
                        flex
                        justify-between
                        
                        pb-3
                        gap-3
                        '
        >
          <div className='flex justify-between gap-2'>
            <span
              className='
                                hidden
                                sm:block
                                bg-jefferson-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                '
            >
              <FiSearch className='text-jefferson-light w-5 h-5'></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value)
              }}
              className='
                                ont-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
								font-medium
                            	border-jefferson-light
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-jefferson-dark
								text-jefferson-light
                                '
              id='name'
              name='name'
              type='search'
              required=''
              placeholder='Search Projects'
              aria-label='Name'
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5'>
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />
            })
          : projectsData.map((project, index) => <ProjectSingle key={index} {...project} />)}
      </div>
    </section>
  )
}

export default ProjectsGrid
