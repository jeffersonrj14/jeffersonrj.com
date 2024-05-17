// In Progress
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PagesMetaHead from '@/components/PagesMetaHead'

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    passHref
    target='a_blank'
    className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-dark hover:text-jefferson-main font-semibold'
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
                  Certificate
                </h1>
                <h3 className='ml-0.5 text-xl font-normal text-gray-300 tracking-tight text-center md:text-left'>
                  This page is for recruiters who want to see my certificate, etc
                </h3>
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
                      <span>J.TEST Level E (Aug 2020)</span>
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
                          <span class='font-bold '>成績表・Grade Report</span>
                          <br />・<InlineLink href='/certificate/jtest/01.pdf'>View PDF</InlineLink>
                          <br />
                          <Image
                            src='/certificate/jtest/01.jpg'
                            alt='JTEST 成績表'
                            className='mx-auto'
                            width={450}
                            height={450}
                          />
                          <br />・<InlineLink href='/certificate/jtest/02.pdf'>View PDF</InlineLink>
                          <br />
                          <Image
                            src='/certificate/jtest/02.jpg'
                            alt='JTEST 成績表'
                            className='mx-auto'
                            width={450}
                            height={450}
                          />
                        </li>
                        <li>
                          <span class='font-bold '>参考資料・Reference Material</span>
                          <br />・<InlineLink href='/certificate/jtest/03.pdf'>View PDF</InlineLink>
                          <br />
                          <Image
                            src='/certificate/jtest/03.jpg'
                            alt='JTest 参考資料'
                            className='mx-auto'
                            width={450}
                            height={450}
                          />
                        </li>
                        <li>
                          <span class='font-bold '>認定証・Certificate</span>
                          <br />・<InlineLink href='/certificate/jtest/04.pdf'>View PDF</InlineLink>
                          <br />
                          <Image
                            src='/certificate/jtest/04.jpg'
                            alt='JTEST 認定証'
                            className='mx-auto'
                            width={450}
                            height={450}
                          />
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
