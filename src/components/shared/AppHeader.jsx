import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import toast from 'react-hot-toast'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='-m-1 p-1 ' {...props}>
      <Icon className='h-7 w-7 cursor-pointer fill-jefferson-dark dark:fill-jefferson-light transition hover:fill-jefferson-maindark hover:dark:fill-jefferson-main' />
    </Link>
  )
}

function CopyEmail({ icon: Icon, email, ...props }) {
  const handleClick = (e) => {
    e.preventDefault() // To prevent opening mail app
    toast.success('Email copied to clipboard')
    navigator.clipboard.writeText(email)
  }

  return (
    <Link className='-m-1 p-1 ' href={props.href} onClick={handleClick}>
      <Icon className='h-7 w-7 cursor-pointer fill-jefferson-dark dark:fill-jefferson-light transition hover:fill-jefferson-maindark hover:dark:fill-jefferson-main' />
    </Link>
  )
}

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [activeTheme, setTheme] = useThemeSwitcher()

  // When the width is below 1025, the email link will redirect to the email app,
  // but when it is above 1025, it will be copied to the clipboard.
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id='nav'
      className='sm:container sm:mx-auto'
    >
      <div className='z-10 max-w-screen-lg xl:max-w-screen-xl flex flex-wrap items-center justify-between py-6 px-4 sm:px-0'>
        <Link
          href='/'
          className='py-4 font-header text-xl font-extrabold'
          passHref
          aria-label='JeffersonRJ14 - Navigate to homepage'
        >
          <span className='uppercase tracking-tight text-jefferson-dark dark:text-jefferson-light'>
            Jefferson
          </span>
          <span className='px-0.5 text-jefferson-dark dark:text-jefferson-light'>·</span>
          <span className='uppercase tracking-tight text-jefferson-maindark dark:text-jefferson-main'>
            RJ
          </span>
          <span className='uppercase tracking-tight text-jefferson-maindark dark:text-jefferson-main animate-ping hover:animate-none'>
            14
          </span>
        </Link>

        {/* Theme switcher small screen */}
        <div className='flex items-center'>
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label='Theme Switcher'
            className='sm:hidden ml-4 bg-jefferson-light dark:bg-jefferson-dark hover:bg-jefferson-maindark hover:dark:bg-jefferson-main text-jefferson-dark hover:text-jefferson-light dark:text-jefferson-light hover:dark:text-jefferson-dark p-3 shadow-lg rounded-xl cursor-pointer'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-xl' />
            ) : (
              <FiSun className='text-xl' />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <button
            onClick={toggleMenu}
            type='button'
            className='ml-4 sm:hidden focus:outline-none text-jefferson-dark dark:text-ternary-light'
            aria-label='Hamburger Menu'
          >
            {showMenu ? <FiX className='text-3xl' /> : <FiMenu className='text-3xl' />}
          </button>
        </div>

        {/* Header links small screen */}
        <div className={`${showMenu ? 'block' : 'hidden'} sm:hidden w-full mt-4 space-y-2`}>
          <Link
            href='/about'
            aria-label='About Me'
            className='block text-lg font-general-medium text-jefferson-dark dark:text-ternary-light hover:text-jefferson-maindark dark:hover:text-jefferson-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark dark:border-secondary-light'
          >
            About
          </Link>
          <Link
            href='/projects'
            aria-label='Projects'
            className='block text-lg font-general-medium text-jefferson-dark dark:text-ternary-light hover:text-jefferson-maindark dark:hover:text-jefferson-light'
          >
            Projects
          </Link>
          <Link
            href='/faqs'
            aria-label='Frequently Asked Questions'
            className='block text-lg font-general-medium text-jefferson-dark dark:text-ternary-light hover:text-jefferson-maindark dark:hover:text-jefferson-light'
          >
            FAQ
          </Link>
          <div className='border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-secondary-dark dark:border-secondary-light'>
            <Link href='mailto:jefferson@jeffersonrj.com' aria-label='Send me an email' passHref>
              <div className='mb-3 text-md font-general-medium bg-jefferson-light  hover:bg-jefferson-maindark hover:dark:bg-jefferson-main hover:text-jefferson-light  text-jefferson-dark shadow-lg rounded-md px-5 py-2.5 duration-300'>
                <IoMail className='inline text-xl mr-2' />
                &nbsp;Contact Me
              </div>
            </Link>
            <Link
              href='https://github.com/jeffersonrj14'
              aria-label='Github Profile'
              target='_blank'
              passHref
            >
              <div className='mb-3 text-md font-general-medium bg-jefferson-light  hover:bg-jefferson-maindark hover:dark:bg-jefferson-main hover:text-jefferson-light  text-jefferson-dark shadow-lg rounded-md px-5 py-2.5 duration-300'>
                <FaGithub className='inline text-xl mr-2' />
                &nbsp;Github
              </div>
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className='font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'>
          <div
            className='block text-left text-lg font-general-medium text-jefferson-dark dark:text-ternary-light dark:hover:text-jefferson-light hover:text-jefferson-maindark sm:mx-4 mb-2 sm:py-2'
            aria-label='About Me'
          >
            <Link href='/about'>About</Link>
          </div>
          <div
            className='block text-left text-lg font-general-medium text-jefferson-dark dark:text-ternary-light dark:hover:text-jefferson-light hover:text-jefferson-maindark sm:mx-4 mb-2 sm:py-2'
            aria-label='Projects'
          >
            <Link href='/projects'>Projects</Link>
          </div>
          <div
            className='block text-left text-lg font-general-medium text-jefferson-dark dark:text-ternary-light dark:hover:text-jefferson-light hover:text-jefferson-maindark sm:mx-4 mb-2 sm:py-2'
            aria-label='Frequently Asked Questions'
          >
            <Link href='/faqs'>FAQ</Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className='hidden sm:flex justify-between items-center gap-2'>
          {windowWidth > 1025 ? (
            <CopyEmail
              href='mailto:jefferson@jeffersonrj.com'
              aria-label='Send me an email'
              email='jefferson@jeffersonrj.com'
              icon={IoMail}
            />
          ) : (
            <SocialLink
              href='mailto:jefferson@jeffersonrj.com'
              aria-label='Send me an email'
              icon={IoMail}
            />
          )}
          <SocialLink
            href='https://github.com/jeffersonrj14'
            aria-label='Check out my github'
            icon={FaGithub}
            target='_blank'
            rel='me'
          />
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label='Theme Switcher'
            className=' bg-jefferson-light dark:bg-jefferson-dark hover:bg-jefferson-maindark hover:dark:bg-jefferson-main text-jefferson-dark hover:text-jefferson-light dark:text-jefferson-light hover:dark:text-jefferson-dark p-3 shadow-lg rounded-xl cursor-pointer'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-xl' />
            ) : (
              <FiSun className='text-xl' />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default AppHeader
