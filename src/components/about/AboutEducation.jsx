import Link from 'next/link'

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

function AboutEducation() {
  return (
    <div>
      <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left'>
        Education
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-6 my-10'>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl  font-bold'>Web Development</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks href='https://zerotomastery.io' text='Zero To Mastery ' />
          </h6>
          <p>Oct 2023 - Present (Online Course)</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <p className='my-2'>
              Pursuing a Computer Science course with a specialization in Web Development{' '}
            </p>
            <span className='font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-main hover:text-jefferson-light'>
              Current Course:
            </span>
            <li className='my-2'>The Complete Web Developer in 2024: Zero to Mastery</li>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-6 my-10'>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl  font-bold'>Diploma Web System</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks href='https://ncp.ac.jp' text='Institute computer Japan' />
          </h6>
          <p>Apr 2021 - Mar 2023 (Osaka, Japan)</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <ul>
              <li className='my-2'>Grade: Cumulative GPA: 3.7/4.0</li>
              <li className='my-2 font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-main hover:text-jefferson-light'>
                Relevant Courses
              </li>
              <ul>
                <li className='my-2'>1. Web System - Javascript, PHP, Python, Java, C#</li>
                <li className='my-2'>2. Web Design - HTML, CSS, Jquery, API</li>
                <li className='my-2'>3. Database -MySQL</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div class='grid grid-cols-1 md:grid-cols-6 my-10'>
        <div class='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 class='text-xl md:text-2xl  font-bold'>Japanese Language School</h5>
          <h6 class='text-lg font-bold'>
            <MyLinks
              href='https://www.kla.ac/jp/school/kyotochuo/'
              text='Kyoshin Language Academy School'
            />
          </h6>
          <p>Jul 2019 - Mar 2021 (Kyoto, Japan)</p>
        </div>
        <div class='flex flex-col col-span-4 text-xl'>
          <div>
            <p className='my-2 font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-main hover:text-jefferson-light'>
              Activities and societies
            </p>
            <li className='my-2'>
              Getting acquainted with daily life customs and manners in Japan.{' '}
            </li>
            <li className='my-2'>
              Understanding how to behave in public settings and on the streets of Japan.{' '}
            </li>
            <li className='my-2'>
              Immersing in traditional Japanese arts such as tea ceremonies or calligraphy.{' '}
            </li>
            <li className='my-2'>
              Learning how to engage in conversations with Japanese people effectively.{' '}
            </li>
            <li className='my-2'>
              Taking part in language exchange programs to practice Japanese with native speakers.
            </li>
            <li className='my-2'>
              Participating in cultural exchange programs with Japanese students.
            </li>
            <li className='my-2'>Joining a Japanese language club or study group on campus.</li>
            <li className='my-2'>Practicing Japanese writing through journaling or blogging.</li>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutEducation
