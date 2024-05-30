import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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
              Last Updated: May 30, 2024
            </span>
          </span>

          <hr className='h-px my-2 border-0 bg-jefferson-light rounded-full' />
          <div className='max-w-2xl'>
            <span className='ml-0.5 text-lg font-medium tracking-tight sm:text-lg'>
              I&apos;ve gathered some commonly asked questions here to save time for both of us.
            </span>

            <div className='grid divide-y text-left divide-neutral-500 w-full mx-auto mt-5 text-lg text-gray-300'>
              <div className='py-5'>
                <details className=''>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Why are your first and middle names <strong>RJ</strong>?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shape-rendering='geometricPrecision'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
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
                    My full name is <em>Ritch Johan Jefferson</em>.
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details className=''>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      When did you start coding?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shape-rendering='geometricPrecision'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
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
                <details className=''>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Have you started to improve your problem-solving skills?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shape-rendering='geometricPrecision'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    Yes, I recently started to improve my problem-solving skills and also began
                    studying Data Structures and Algorithms (DSA) to further enhance them.
                  </p>
                  <p className='text-jefferson-light mt-3'>
                    I will be focusing to improve my problem solving skills on{' '}
                    <Link
                      href='https://leetcode.com/u/jeffersonrj14/'
                      target='_blank'
                      aria-label='My LeetCode Profile'
                      className='transition-all underline decoration-slate-400 hover:decoration-jefferson-main hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-main'
                    >
                      LeetCode
                    </Link>{' '}
                    I will start with the{' '}
                    <Link
                      href='https://leetcode.com/studyplan/top-interview-150/'
                      target='_blank'
                      aria-label='Leetcode study plan'
                      className='transition-all underline decoration-slate-400 hover:decoration-jefferson-main hover:decoration-wavy hover:decoration-2 hover:underline-offset-2 hover:underline hover:text-jefferson-main'
                    >
                      easy problems
                    </Link>{' '}
                    first.
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details className=''>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Did you build this website from scratch?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shape-rendering='geometricPrecision'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
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
                      className='text-jefferson-main hover:text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline'
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
                <details className=''>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      How long did you spend creating this website and making it live?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shape-rendering='geometricPrecision'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
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
                <details className=''>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Do you like building projects?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shape-rendering='geometricPrecision'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
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
                  <p className='text-jefferson-light mt-3'>
                    Currently, I&apos;m working on other projects while simultaneously learning new
                    languages. It may take a few weeks for me to become proficient in both the
                    language and the logic involved.
                  </p>
                </details>
              </div>
              {/*  */}
              <div className='py-5'>
                <details className=''>
                  <summary className='flex text-left justify-between font-medium cursor-pointer list-none'>
                    <span className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'>
                      {' '}
                      Are you open to job opportunities?
                    </span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shape-rendering='geometricPrecision'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-jefferson-light mt-3'>
                    I would say no, because I&apos;m currently still in the learning process, but I
                    recently received emails from{' '}
                    <span className='text-jefferson-main'>several startup companies</span>. Several
                    of these companies have expressed interest in having me join their teams.
                    However, before joining their teams, they want to test my skills to determine if
                    I&apos;m a good fit.
                  </p>
                  <p className='text-jefferson-light mt-3'>
                    I would accept this kind of offer to see if I can meet their qualifications.
                    Even though my skill level may not meet their expectations, I see it as an
                    opportunity for further learning and growth. I&apos;m the type of person who
                    would not decline such offers.
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
