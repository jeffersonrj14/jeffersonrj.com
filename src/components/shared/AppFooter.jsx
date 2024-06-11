import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiGithub, FiMail } from 'react-icons/fi'
import toast from 'react-hot-toast'

// const handleClick = (e) => {
//   e.preventDefault() // To prevent opening mail app
//   const email = e.currentTarget.getAttribute('email')
//   toast.success('Email copied to clipboard')
//   navigator.clipboard.writeText(email)
// }

// function ContactMe({ email, text, ...props }) {
//   const handleClick = (e) => {
//     e.preventDefault() // To prevent opening mail app
//     toast.success('Email copied to clipboard')
//     navigator.clipboard.writeText(email)
//   }

//   return (
//     <a
//       href={props.href}
//       onClick={handleClick}
//       className='text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-jefferson-main'
//     >
//       {text}
//     </a>
//   )
// }

const ContactMe = ({ email, text, ...props }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      // When the width is below 1025, the email link will redirect to the email app,
      // but when it is above 1025, it will be copied to the clipboard.
      setIsMobile(window.innerWidth < 1025)
    }

    handleResize() // Check initial width
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleClick = (e) => {
    if (!isMobile) {
      e.preventDefault() // Prevent opening mail app
      toast.success('Email copied to clipboard')
      navigator.clipboard.writeText(email)
    }
  }

  return (
    <a
      href={props.href}
      onClick={handleClick}
      className='text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-jefferson-main'
    >
      {text}
    </a>
  )
}

const MyLinks = ({ href, text, rel, target }) => {
  return (
    <li className='my-2'>
      <a
        href={href}
        rel={rel}
        target={target}
        className='text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-jefferson-main '
      >
        {text}
      </a>
    </li>
  )
}

const AboutMe = () => {
  return (
    <div className='my-4 grid grid-cols-2 sm:grid-cols-2  '>
      <div>
        <h2 className='font-header uppercase tracking-tight text-2xl font-extrabold  text-jefferson-light'>
          I am
        </h2>
        <ul className='font-medium tracking-tight text-slate-200'>
          <span className='my-2 font-medium tracking-tight text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-jefferson-main '>
            RJ Jefferson
          </span>
          <br />
          <span className='my-2 font-medium tracking-tight text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-jefferson-main '>
            23 y/o | he/him
          </span>
        </ul>
      </div>

      <div>
        <h2 className='font-header uppercase tracking-tight text-2xl font-extrabold  text-jefferson-light'>
          Contact Me
        </h2>

        <ul className='font-medium tracking-tight text-slate-200'>
          <ContactMe
            href='mailto:jefferson@jeffersonrj.com'
            text='Email'
            email='jefferson@jeffersonrj.com'
          />
          {/* <MyLinks href='https://www.linkedin.com/in/jeffersonrj14' text='Linkedin' rel='me'/> */}
        </ul>
      </div>
    </div>
  )
}

const AboutMe2 = () => {
  return (
    <div className='my-4 grid grid-cols-3 sm:grid-cols-3'>
      <div>
        <ul className='font-medium tracking-tight text-slate-200'>
          <MyLinks href='/about' text='About' target='_self' />
          <MyLinks href='/projects' text='Projects' target='_self' />
          <MyLinks href='/faqs' text='FAQ' target='_self' />
        </ul>
      </div>
      <div>
        <ul className='font-medium tracking-tight text-slate-200'>
          <MyLinks
            href='https://github.com/jeffersonrj14'
            text='GitHub'
            rel='me'
            target='a_blank'
          />
          <MyLinks
            href='https://leetcode.com/u/jeffersonrj14/'
            text='LeetCode'
            rel='me'
            target='a_blank'
          />
        </ul>
      </div>
      <div>
        <ul className='font-medium tracking-tight text-slate-200'>
          <MyLinks
            href='https://discordapp.com/users/606481557615542273'
            text='Discord'
            rel='me'
            target='a_blank'
          />
          <MyLinks
            href='https://twitter.com/jeffersonrj14'
            text='Twitter'
            rel='me'
            target='a_blank'
          />
        </ul>
      </div>
    </div>
  )
}
const AboutFooter = () => {
  return (
    <div>
      <AboutMe />

      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-4/5 h-1 my-8  border-0 rounded bg-gray-700' />
        <div className='absolute px-4 -translate-x-1/2  left-1/2 bg-jefferson-dark'>
          <svg
            className='w-4 h-4 text-gray-300'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 18 14'
          >
            <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
          </svg>
        </div>
      </div>
      <AboutMe2 />
    </div>
  )
}

function AppFooter() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
    }

    handleResize() // Check initial width
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleClick = (e) => {
    if (!isMobile) {
      e.preventDefault() // Prevent opening mail app
      const email = e.currentTarget.getAttribute('email')
      toast.success('Email copied to clipboard')
      navigator.clipboard.writeText(email)
    }
  }
  return (
    <section className='container mx-auto'>
      <div className='pt-20 sm:pt-30 pb-8 mt-20  border-secondary-dark'>
        <hr className=' mx-auto border-t-2 border-primary-light rounded-2xl' />
        <div className='mt-2 flex w-full flex-col text-center '>
          <AboutFooter />
        </div>
        {/* <AppFooterCopyright /> */}
        <hr className=' mx-auto border-t-2 border-primary-light rounded-2xl' />
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='my-4 text-center font-light text-jefferson-light md:text-left '>
            Ritch Johan Jefferson &nbsp;
            <Link href='https://github.com/jeffersonrj14' target='__blank' className='inline '>
              <FiGithub className='inline' />
            </Link>
            &nbsp;
            {/* <a
								href="https://linkedin.com/in/jeffersonrj14"
								target="__blank"
								className="inline"
							>
								<FiLinkedin className="inline"/>
							</a>
							&nbsp; */}
            <Link
              href='mailto:jefferson@jeffersonrj.com'
              aria-label='Send me an email'
              email='jefferson@jeffersonrj.com'
              onClick={handleClick}
              passHref
            >
              <FiMail className='inline' />
            </Link>
          </div>
          <div className='my-4 text-center font-light text-jefferson-light md:text-right'>
            &copy; {new Date().getFullYear()} Created using Next.js & Tailwind CSS{' '}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppFooter
