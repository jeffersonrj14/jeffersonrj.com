import Link from 'next/link'

import AboutMe from './AboutMe'
import AboutBackground from './AboutBackground'
import AboutEducation from './AboutEducation'
import AboutExperience from './AboutExperience'
import AboutContact from './AboutContact'
import CourseWork from './CourseWork'

const MyLinks = ({ href, text, rel }) => {
  return (
    <a
      href={href}
      rel={rel}
      className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main dark:hover:text-jefferson-main'
    >
      {text}
    </a>
  )
}
const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    passHref
    className='relative inline-block text-jefferson-main before:absolute before:-inset-1 before:block before:-skew-y-3 hover:text-jefferson-dark  before:hover:bg-jefferson-light'
  >
    <span className='relative skew-y-3'>{children}</span>
  </Link>
)

function AboutMain() {
  return (
    <div className='pt-20 container mx-auto relative text-jefferson-light '>
      <AboutMe />
      <AboutBackground />

      <section className='mt-10 sm:mt-20 '>
        <AboutEducation />
      </section>

      <hr className='border-primary-light rounded-2xl mx-44' />
      <section className=' pt-10'>
        <CourseWork />
      </section>

      <section className=' pt-10'>
        <AboutContact />
      </section>
    </div>
  )
}

export default AboutMain
