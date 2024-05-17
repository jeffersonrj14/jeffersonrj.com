// Will not display on the navigation bar. This page is for recruiters who want to see my school file, etc.
import { motion } from 'framer-motion'
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
      <PagesMetaHead title='Document' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.7,
          delay: 0.15
        }}
      >
        <div className='pt-10 container mx-auto relative text-jefferson-light'>
          <div className='mt-10 sm:mt-20 rounded-lg'>
            <div className='max-w-screen-xl mx-auto'>
              <div className='flex flex-col'>
                <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left'>
                  Academic Record
                </h1>
                <h3 className='ml-0.5 text-xl font-normal text-gray-300 tracking-tight text-center md:text-left'>
                  This page is for recruiters who want to see my school file, etc
                </h3>
                <hr className='h-px my-2 border-0 bg-jefferson-light rounded-full' />
              </div>

              <div className='grid divide-y divide-neutral-200  mx-auto mt-2'>
                <div className='py-5'>
                  <details className='group text-xl '>
                    <summary className='flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-light  hover:bg-jefferson-main  hover:text-jefferson-light text-jefferson-dark'>
                      <span>
                        日本コンピュータ専門学校 <br /> (Nihon Computer Professional Training
                        College)
                      </span>
                      <span className='transition group-open:rotate-180'>
                        <svg
                          fill='#DFE6E9'
                          height='24'
                          shapeRendering='geometricPrecision'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='1.5'
                          viewBox='0 0 24 24'
                          width='24'
                        >
                          <path d='M6 9l6 6 6-6'></path>
                        </svg>
                      </span>
                    </summary>

                    <div className='bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn  '>
                      <ul className=' text-jefferson-dark'>
                        <li>
                          <span className='font-bold '>
                            卒業証書・Graduation certificate (March 15, 2023)
                          </span>
                          <br />・
                          <InlineLink href='/document/college/02.pdf'>
                            View certificate in PDF
                          </InlineLink>
                        </li>
                        <br />
                        <li>
                          <span className='font-bold '>
                            学業成績通知書・Academic Grade Report (April, 2024 ~ March 15, 2023)
                          </span>
                          <br />・
                          <InlineLink href='/document/college/01.pdf'>
                            View certificate in PDF
                          </InlineLink>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <br />

                  <details className='group text-xl '>
                    <summary className='flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-light  hover:bg-jefferson-main  hover:text-jefferson-light text-jefferson-dark'>
                      <span>
                        京進ランゲージアカデミー京都中央高校 <br /> Kyoshin Language Academy Kyoto
                        Chuo School
                      </span>
                      <span className='transition group-open:rotate-180'>
                        <svg
                          fill='#DFE6E9'
                          height='24'
                          shapeRendering='geometricPrecision'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='1.5'
                          viewBox='0 0 24 24'
                          width='24'
                        >
                          <path d='M6 9l6 6 6-6'></path>
                        </svg>
                      </span>
                    </summary>

                    <div className='bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn  '>
                      <ul className=' text-jefferson-dark'>
                        <li>
                          <span className='font-bold '>
                            卒業証書・Graduation certificate (Mar 19, 2021)
                          </span>
                          <br />・
                          <InlineLink href='/document/kyoshin/01.pdf'>
                            View certificate in PDF
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
