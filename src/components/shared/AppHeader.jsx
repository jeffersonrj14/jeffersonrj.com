import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiX, FiMenu } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import toast from 'react-hot-toast'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='-m-1 p-1 ' {...props}>
      <Icon className='h-7 w-7 cursor-pointer fill-jefferson-light transition hover:fill-jefferson-main' />
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
      <Icon className='h-7 w-7 cursor-pointer fill-jefferson-light transition hover:fill-jefferson-main' />
    </Link>
  )
}

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

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
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  const handleClick = (e) => {
    e.preventDefault() // To prevent opening mail app
    const email = e.currentTarget.getAttribute('email')
    toast.success('Email copied to clipboard')
    navigator.clipboard.writeText(email)
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
          <div className='block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark'>
            <Link href='/about' aria-label='About Me'>
              About
            </Link>
          </div>
          <div className='block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'>
            <Link href='/projects' aria-label='Projects'>
              Projects
            </Link>
          </div>
          <div className='block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'>
            <Link href='/faqs' aria-label='Frequently Asked Questions'>
              FAQ
            </Link>
          </div>

          <div className='border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-secondary-dark'>
            <Link href='mailto:jefferson@jeffersonrj.com' aria-label='Send me an email' passHref>
              <div className='mb-3 text-md font-general-medium bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-light  text-jefferson-dark shadow-lg rounded-md px-5 py-2.5 duration-300'>
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
              <div className='mb-3 text-md font-general-medium bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-light  text-jefferson-dark shadow-lg rounded-md px-5 py-2.5 duration-300'>
                <FaGithub className='inline text-xl mr-2' />
                &nbsp;Github
              </div>
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className='font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'>
          <div
            className='block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
            aria-label='About Me'
          >
            <Link href='/about'>About</Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
            aria-label='Projects'
          >
            <Link href='/projects'>Projects</Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
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
        </div>
      </div>
    </motion.nav>
  )
}

export default AppHeader
