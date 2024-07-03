import Link from 'next/link'

export default function Custom404() {
  return (
    <main className='pt-12 w-full flex flex-col justify-center items-center'>
      <h1 className='text-9xl font-extrabold text-jefferson-dark dark:text-jefferson-light tracking-widest'>
        404
      </h1>
      <div className='bg-jefferson-maindark dark:bg-jefferson-main px-2 text-sm rounded rotate-12 absolute'>
        Page Not Found
      </div>
      <button className='mt-5'>
        <div className='relative inline-block text-sm font-medium text-jefferson-maindark dark:text-jefferson-main group active:text-jefferson-maindark dark:active:text-jefferson-main focus:outline-none focus:ring'>
          <span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-jefferson-maindark dark:bg-jefferson-main group-hover:translate-y-0 group-hover:translate-x-0'></span>

          <span className='relative block px-8 py-3 bg-jefferson-dark dark:bg-jefferson-light text-jefferson-light dark:text-jefferson-dark border border-current'>
            <Link href='/'>Go Home</Link>
          </span>
        </div>
      </button>
    </main>
  )
}
