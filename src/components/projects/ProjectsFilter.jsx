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
                border-jefferson-dark
                dark:border-jefferson-light
                bg-jefferson-light
                dark:bg-jefferson-dark
                text-jefferson-dark
                dark:text-jefferson-light
                border
            '
    >
      <option value=''>All Projects</option> {/* Set value to an empty string */}
      {selectOptions.map((option) => (
        <option value={option} className='text-normal sm:text-md' key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default ProjectsFilter
