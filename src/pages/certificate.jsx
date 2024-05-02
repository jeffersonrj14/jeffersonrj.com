import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PagesMetaHead from '../components/PagesMetaHead'

// import FutureAI from '../public/certificate/CERT_99BHN1P0.pdf';

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    passHref
    target='a_blank'
    className='relative font-semibold inline-block text-jefferson-maindark dark:text-jefferson-main before:absolute before:-inset-1 before:block before:-skew-y-3 hover:text-jefferson-light dark:hover:text-jefferson-dark before:hover:bg-jefferson-dark before:hover:dark:bg-jefferson-light'
  >
    <span className='relative skew-y-3'>{children}</span>
  </Link>
)

function certificate() {
  return (
    <div>
      <PagesMetaHead title='Certificate' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.15
        }}
      >
        <div class='pt-20 container mx-auto relative text-jefferson-light'>
          <div className='mt-10 sm:mt-20 rounded-lg'>
            <div class='max-w-screen-xl mx-auto'>
              <div class='flex flex-col'>
                <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left'>
                  Certificates
                </h1>
                <hr class='h-px my-2 border-0 bg-jefferson-light rounded-full' />
              </div>

              <div class='grid divide-y divide-neutral-200  mx-auto mt-2'>
                <div class='py-5'>
                  <details class='group text-xl '>
                    <summary class='flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-light  hover:bg-jefferson-main  hover:text-jefferson-light text-jefferson-dark'>
                      <span>EF Standard English Test (EF SET)</span>
                      <span class='transition group-open:rotate-180'>
                        <svg
                          fill='#DFE6E9'
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

                    <div class='bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn  '>
                      <ul class=' text-jefferson-dark'>
                        <li>
                          <span class='font-medium '>
                            EFSET English Certificate 61/100 (C1 Advanced)
                          </span>
                          <br />
                          <InlineLink href='https://cert.efset.org/eq4mfx'>
                            ・View Certificate
                          </InlineLink>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <br />

                  <details class='group text-xl '>
                    <summary class='flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-light  hover:bg-jefferson-main  hover:text-jefferson-light text-jefferson-dark'>
                      <span>Zero To Mastery</span>
                      <span class='transition group-open:rotate-180'>
                        <svg
                          fill='#DFE6E9'
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

                    <div class='bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn  '>
                      <ul class=' text-jefferson-dark'>
                        <li>
                          <span class='font-medium '>
                            The Complete Web Developer in 2024: Zero to Mastery
                          </span>
                          <br />
                          <span>・CERTIFICATE ID: CERT_99BHN1P0</span>
                          <br />
                          <InlineLink href='/certificate/CERT_99BHN1P0.pdf'>
                            ・View Certificate PDF
                          </InlineLink>
                        </li>
                        <br />
                        <li>
                          <span class='font-medium '>Future of A.I. & How To Use ChatGPT</span>
                          <br />
                          <span>・CERTIFICATE ID: CERT_99BHN1P0</span>
                          <br />
                          <InlineLink href='/certificate/CERT_99BHN1P0.pdf'>
                            ・View Certificate PDF
                          </InlineLink>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default certificate
