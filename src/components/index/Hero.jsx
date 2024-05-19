import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from 'react-icons/si'
import NowPlaying from '@/components/Spotify/NowPlaying'

import { IoMail, IoLogoDiscord, IoDocumentText } from 'react-icons/io5'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='-m-1 p-1 ' {...props}>
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
            As an Independent Student, I&apos;m learning every day to improve my skills, practicing
            problem-solving, and honing my CSS skills on Frontend Mentor. I enjoy creating projects
            and leveling them up. I&apos;m looking for new opportunities to expand my skills as I
            learn new languages, with the goal of contributing to open-source projects in the
            future.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://discordapp.com/users/606481557615542273'
              aria-label='Check out my Discord'
              icon={IoLogoDiscord}
              rel='me'
            />
            <SocialLink
              href='https://instagram.com/jeffersonrj14'
              aria-label='Check out my Instagram'
              icon={SiInstagram}
              rel='me'
            />
            <SocialLink
              href='https://github.com/jeffersonrj14'
              aria-label='Check out my Github'
              icon={SiGithub}
              rel='me'
            />
            <SocialLink
              href='https://twitter.com/jeffersonrj14'
              aria-label='Check out my Twitter'
              icon={SiTwitter}
              rel='me'
            />
            {/* <SocialLink
                      href="https://linkedin.com/in/jeffersonrj14"
                      aria-label="Connect with me on LinkedIn"
                      icon={SiLinkedin}
                      rel="me"
                  /> */}
            <SocialLink href='/resume.pdf' aria-label='Check out my Resume' icon={IoDocumentText} />
            <SocialLink
              href='mailto:jefferson@jeffersonrj.com'
              aria-label='Send me an email'
              icon={IoMail}
            />
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
