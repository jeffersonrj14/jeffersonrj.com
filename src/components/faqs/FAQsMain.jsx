import { motion } from 'framer-motion'
import Link from 'next/link'
import toast from 'react-hot-toast'

function ContactMe({ email, text, ...props }) {
  const handleClick = (e) => {
    e.preventDefault() // To prevent opening mail app
    toast.success('Email copied to clipboard')
    navigator.clipboard.writeText(email)
  }

  return (
    <a
      href={props.href}
      onClick={handleClick}
      className='transition-all underline decoration-jefferson-main hover:decoration-jefferson-light text-jefferson-main hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-light'
    >
      {text}
    </a>
  )
}

function FAQs() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.15
        }}
      >
        <div className='pt-5 mb-5'>
          <span className='font-general-medium font-bold text-2xl sm:text-4xl mb-1 text-jefferson-light'>
            FAQs{' '}
            <span className='mt-5 text-sm font-normal justify-between text-right tracking-tight sm:text-sm float-right'>
              Last Updated: Jun 11, 2024
            </span>
          </span>

          <hr className='h-px my-2 border-0 bg-jefferson-light rounded-full' />
          <div className='max-w-2xl'>
            <span className='ml-0.5 text-lg font-medium tracking-tight sm:text-lg'>
              I&apos;ve gathered some commonly asked questions here to save time for both of us.
            </span>

            <div className='grid divide-y text-left divide-neutral-500 w-full mx-auto mt-5 text-lg text-gray-300'>
              <div className='py-5'>
                <details>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Why are your first and middle names <strong>RJ</strong>?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    Back when I was in college in Japan, most of my friends called me RJ, and
                    sometimes Jefferson, since my name is quite long.
                  </p>
                  <p className='text-jefferson-light mt-3'>
                    My full name is{' '}
                    <span className='transition-all underline decoration-jefferson-main hover:decoration-jefferson-light text-jefferson-main hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-light'>
                      Ritch Johan Jefferson
                    </span>
                    .
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      When did you start coding?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    I began coding around the age of <span className='text-jefferson-main'>20</span>
                    , but I started taking it more seriously{' '}
                    <span className='text-jefferson-main'>last year(2023)</span>. After finishing
                    college, I couldn&apos;t land a job because the curriculum at my college
                    didn&apos;t include any frameworks or technologies like React or Node.js. So, I
                    started learning them by myself, and I&apos;m still in the process of getting
                    used to them.
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Did you build this website from scratch?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    Frankly, I would say yes and no. Yes, because I created it from scratch using{' '}
                    <br />
                    <Link
                      href='https://nextjs.org/docs/getting-started/installation'
                      target='_blank'
                      aria-label='Next.js Installation Guide'
                      className='transition-all underline decoration-jefferson-main hover:decoration-jefferson-light text-jefferson-main hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-light'
                    >
                      npx create-next-app@latest ./
                    </Link>{' '}
                    and I installed the packages that I wanted to use
                  </p>
                  <p className='text-jefferson-light mt-3'>
                    No, because I saw a lot of people creating portfolio websites and used their
                    ideas as I built this.
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      How long did you spend creating this website and making it live?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    This website was originally made using HTML, CSS, and JavaScript (no
                    frameworks), and my friends advised me to learn about frameworks like React.
                  </p>
                  <p className='text-jefferson-light mt-3'>
                    So, I learned about React, and they also suggested using Next.js for a
                    portfolio. I learned it, and even today, I&apos;m still learning Next.js. I
                    would say it took me <span className='text-jefferson-main'>4 months</span>, with{' '}
                    <span className='text-jefferson-main'>4 hours per day</span> (Saturdays and
                    Sundays not included).
                  </p>
                  <p className='text-jefferson-light mt-3'>
                    I also discovered Vercel because of Next.js, I&apos;m using{' '}
                    <Link
                      href='https://vercel.com'
                      target='_blank'
                      aria-label='Vercel Website'
                      className='text-jefferson-main hover:text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline'
                    >
                      Vercel
                    </Link>{' '}
                    to host my website live
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Do you like building projects?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    It&apos;s not that I dislike building projects. Rather, I prefer not to create
                    small projects repeatedly without any improvement. That&apos;s why I focus on
                    projects that I feel I can continue to develop.
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Are you open to job opportunities?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    Yes, I am open to job opportunities as I am eager to gain experience and grow in
                    my career. While I am still in the learning process, I believe that practical
                    experience is invaluable. Therefore, I am about 80% open to opportunities and
                    about 20% hesitant due to my ongoing learning.
                  </p>
                  <p className='text-jefferson-light mt-3'>
                    I am enthusiastic about challenges and see each opportunity as a chance for
                    further learning and growth. I do not decline offers that provide a platform for
                    development. Feel free to contact me via{' '}
                    <ContactMe
                      href='mailto:jefferson@jeffersonrj.com'
                      text='Email'
                      email='jefferson@jeffersonrj.com'
                    />{' '}
                    if you would like to discuss a potential role or collaboration. You can also
                    view my{' '}
                    <Link
                      href='/resume'
                      target='_blank'
                      aria-label='Resume'
                      className='transition-all underline decoration-jefferson-main hover:decoration-jefferson-light text-jefferson-main hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-light'
                    >
                      Resume
                    </Link>{' '}
                  </p>
                  <blockquote class=' text-jefferson-light mt-3 p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-slate-950'>
                    <p class='italic font-normal leading-relaxed text-jefferson-dark dark:text-white'>
                      However, before proceeding, I also conduct research to determine if the email
                      is legitimate or a scam, as well as to verify the legitimacy of the company.
                    </p>
                  </blockquote>
                </details>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default FAQs
