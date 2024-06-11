const MyLinks = ({ href, text, rel }) => {
  return (
    <a
      href={href}
      rel={rel}
      target='a_blank'
      className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'
    >
      {text}
    </a>
  )
}
const CourseList = ({ href, text, rel }) => {
  return (
    <li className='my-2'>
      <a
        href={href}
        rel={rel}
        target='a_blank'
        className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-main hover:text-jefferson-light active:text-jefferson-maindark'
      >
        {text}
      </a>
    </li>
  )
}

function CourseWork() {
  return (
    <div>
      <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left'>
        CourseWork
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-6 my-10'>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl  font-bold'>Computer Science</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks href='https://cs50.harvard.edu/' text='CS50' />
          </h6>
          <p>Self-Paced Online Course</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <span className='font-semibold text-jefferson-light'>Course:</span>
            <CourseList
              href='https://cs50.harvard.edu/python/2022/'
              text="CS50's Introduction to Programming with Python"
            />
            <CourseList
              href='https://cs50.harvard.edu/x/2023/'
              text="CS50's Introduction to Computer Science"
            />
            <CourseList
              href='https://cs50.harvard.edu/web/2020/'
              text="CS50's Web Programming with Python and JavaScript"
            />
            <CourseList
              href='https://cs50.harvard.edu/ai/2020/'
              text="CS50's Introduction to Artificial Intelligence with Python"
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-6 my-10'>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl  font-bold'>Web Development</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks href='https://zerotomastery.io' text='Zero To Mastery' />
          </h6>
          <p>Self-Paced Online Course</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <span className='font-semibold text-jefferson-light'>Course:</span>
            <CourseList
              href='https://zerotomastery.io/courses/coding-bootcamp/'
              text='The Complete Web Developer in 2024: Zero to Mastery'
            />
            <CourseList
              href='https://zerotomastery.io/courses/learn-data-structures-and-algorithms/'
              text='Master the Coding Interview: Data Structures + Algorithms'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CourseWork
