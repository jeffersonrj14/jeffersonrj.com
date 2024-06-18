import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SiGithub, SiTwitter, SiLeetcode } from 'react-icons/si'
import NowPlaying from '@/components/Spotify/NowPlaying'
import toast from 'react-hot-toast'

import { IoMail, IoLogoDiscord, IoDocumentText } from 'react-icons/io5'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='-m-1 p-1 ' {...props}>
      <Icon className='h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-jefferson-main' />
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
      <Icon className='h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-jefferson-main' />
    </Link>
  )
}

const IntlDateFormatter = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
  hour12: false
})

const availablestatus = (date) => {
  if (date == null) return { color: '', string: '' }
  const h = parseInt(IntlDateFormatter.format(date).split(':')[0])

  if (h < 2) {
    return { color: 'bg-green-500', string: 'Available' }
  } else if (h < 6) {
    return { color: 'bg-amber-600', string: 'Sleep' }
  } else if (h < 9) {
    return { color: 'bg-green-500', string: 'Available' }
  } else if (h < 16) {
    return { color: 'bg-red-500', string: 'Busy-Study' }
  } else if (h < 17) {
    return { color: 'bg-amber-600', string: 'Nap' }
  } else if (h < 21) {
    return { color: 'bg-red-500', string: 'Busy-Study' }
  } else if (h < 24) {
    return { color: 'bg-green-500', string: 'Available' }
  } else {
    return { color: 'bg-red-500', string: 'Busy-Study' }
  }
}

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    timeZone: 'Asia/Jakarta',
    hour12: false
  }).format(currentTime)

  return <p className='mt-2 tabular-nums tracking-tight inline'>{formattedTime} GMT+7</p>
}

const Available = () => {
  const [timeslot, setTimeslot] = React.useState()

  const calculateTime = React.useCallback(() => {
    const now = new Date()
    setTimeslot(availablestatus(now))
  }, [])

  // Timer
  React.useEffect(() => {
    calculateTime()

    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [calculateTime])

  return (
    <>
      <div className='flex items-center font-medium tracking-tight text-lg '>
        <div className={` mr-2 h-4 w-4 shrink-0 rounded-full ${timeslot?.color}`}>
          <div className={`${timeslot?.color} mr-2 h-4 w-4 shrink-0 animate-ping rounded-full`} />
        </div>
        {timeslot?.string}
      </div>
    </>
  )
}

function Hero() {
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
        <div className='pt-5 mb-5 max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Hi, I&apos;m RJ Jefferson
          </h1>
          <h3 className='ml-0.5 text-xl font-medium tracking-tight sm:text-2xl'>
            Self-Taught Developer
          </h3>

          <p className='mt-6 text-lg text-gray-300'>
            As an independent student, I learn every day (4 days a week) to improve my skills.
            Recently, I started learning DSA (Data Structures and Algorithms) and practicing
            problem-solving on LeetCode. I am committed to solving 1 to 3 questions each week,
            starting with the easy ones, to improve my problem-solving skills.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://discordapp.com/users/606481557615542273'
              aria-label='Check out my Discord'
              icon={IoLogoDiscord}
              target='_blank'
              rel='me'
            />
            <SocialLink
              href='https://twitter.com/jeffersonrj14'
              aria-label='Check out my Twitter'
              icon={SiTwitter}
              target='_blank'
              rel='me'
            />
            <SocialLink
              href='https://leetcode.com/u/jeffersonrj14/'
              aria-label='My LeetCode Activity'
              icon={SiLeetcode}
              target='_blank'
              rel='me'
            />
            <SocialLink
              href='https://github.com/jeffersonrj14'
              aria-label='Check out my Github'
              icon={SiGithub}
              target='_blank'
              rel='me'
            />
            <CopyEmail
              href='mailto:jefferson@jeffersonrj.com'
              aria-label='Send me an email'
              email='jefferson@jeffersonrj.com'
              icon={IoMail}
            />
            <SocialLink href='/resume.pdf' aria-label='Check out my Resume' icon={IoDocumentText} />
          </div>

          <div className='pt-5 text-lg '>
            Indonesia • <CurrentTime />
            <Available />
          </div>

          <div className='pt-5 relative'>
            <div className='absolute left-0'>
              <NowPlaying />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Hero
