import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi'

import { FiMail } from 'react-icons/fi'

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false)
  // const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id='nav'
      className='sm:container sm:mx-auto'
    >
      {/* Header */}
      <div className='z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6'>
        {/* Header menu links and small screen hamburger menu */}
        <div className='flex justify-between items-center px-4 sm:px-0'>
          <div>
            <Link
              href='/'
              className='py-4 font-header text-xl font-extrabold'
              passHref
              aria-label='JeffersonRJ14 - Navigate to homepage'
            >
              <span className='uppercase tracking-tight text-jefferson-light'>Jefferson</span>
              <span className='px-0.5 text-jefferson-light'>·</span>
              <span className='uppercase tracking-tight text-jefferson-main'>RJ</span>
              <span className='uppercase tracking-tight text-jefferson-main animate-ping hover:animate-none'>
                14
              </span>
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className='sm:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='focus:outline-none'
              aria-label='Hamburger Menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-7 w-7 fill-current text-ternary-light'
              >
                {showMenu ? <FiX className='text-3xl' /> : <FiMenu className='text-3xl' />}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
              : 'hidden'
          }
        >
          <div className='block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'>
            <Link href='/projects' aria-label='Projects'>
              Projects
            </Link>
          </div>
          <div className='block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark'>
            <Link href='/about' aria-label='About Me'>
              About
            </Link>
          </div>

          <div className='border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-secondary-dark'>
            <Link href='mailto:jefferson@jeffersonrj.com' aria-label='Hire'>
              <div className='text-md font-general-medium bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-light  text-jefferson-dark shadow-lg rounded-md px-5 py-2.5 duration-300'>
                <FiMail className='inline text-xl' />
                &nbsp;Hire Me
              </div>
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className='font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'>
          <div
            className='block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
            aria-label='Projects'
          >
            <Link href='/projects'>Projects</Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
            aria-label='About Me'
          >
            <Link href='/about'>About</Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className='hidden sm:flex justify-between items-center flex-col md:flex-row'>
          <Link href='mailto:jefferson@jeffersonrj.com' aria-label='Contact'>
            <div className='text-md font-general-medium bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-light  text-jefferson-dark shadow-lg rounded-md px-5 py-2.5 duration-300'>
              <FiMail className='inline text-xl' />
              &nbsp;Hire Me
            </div>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default AppHeader
