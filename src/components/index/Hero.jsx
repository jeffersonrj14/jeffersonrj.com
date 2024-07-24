import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import NowPlaying from '@/components/Spotify/NowPlaying'
import toast from 'react-hot-toast'
import { IoMail } from 'react-icons/io5'
import { heroData } from '@/data/heroData'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className='-m-1 p-1 ' {...props}>
      <Icon className='h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-jefferson-maindark hover:dark:fill-jefferson-main' />
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

  return (
    <p className='mt-2 tabular-nums tracking-tight inline text-jefferson-dark dark:text-jefferson-light'>
      {formattedTime} GMT+7
    </p>
  )
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

function Hero({ hero }) {
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
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-jefferson-dark dark:text-jefferson-light'>
            Hi, I&apos;m&nbsp;{hero.intro.name}
          </h1>
          <h3 className='ml-0.5 text-xl font-medium tracking-tight sm:text-2xl text-jefferson-dark dark:text-jefferson-light'>
            {hero.intro.role}
          </h3>

          <p className='mt-6 text-lg font-medium text-gray-700 dark:text-gray-300'>{hero.intro.summary}</p>
          <div className='mt-6 flex gap-6'>
            {hero.link.social.map((socialLink) => (
              <SocialLink
                key={socialLink.id}
                href={socialLink.url}
                aria-label={socialLink.label}
                icon={socialLink.icon}
                target={socialLink.target}
                rel={socialLink.rel}
              />
            ))}
            <CopyEmail
              href='mailto:jefferson@jeffersonrj.com'
              aria-label='Send me an email'
              email='jefferson@jeffersonrj.com'
              icon={IoMail}
            />
          </div>

          <div className='pt-5 text-lg font-medium text-jefferson-dark dark:text-jefferson-light'>
            Indonesia • <CurrentTime />
            <Available />
          </div>

          <div className='pt-2 pb-5 relative text-jefferson-dark dark:text-jefferson-light'>
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
