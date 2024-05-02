const selectOptions = ['Portfolio', 'Project']

function ProjectsFilter({ setSelectProject }) {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value)
      }}
      className='
                px-4
                sm:px-6
                py-2
                rounded-lg
                text-sm
                sm:text-md
                font-medium
                bg-jefferson-dark
                text-jefferson-light
            '
    >
      <option value={setSelectProject} className='text-sm sm:text-md'>
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className='text-normal sm:text-md' key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default ProjectsFilter
