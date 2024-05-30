import Image from 'next/image'

function AboutMeBio() {
  return (
    <div className='flex w-full flex-col items-center'>
      <section className='mt-16 w-full p-4'>
        <div className='relative mb-12 h-12 w-56 mx-auto'>
          <Image
            src='/profile.png'
            alt='Jefferson Profile Picture'
            className='rounded-full'
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </div>
  )
}

export default AboutMeBio
