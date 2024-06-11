import Link from 'next/link'

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    passHref
    target='a_blank'
    className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-main hover:text-jefferson-light'
  >
    <span className='relative skew-y-3'>{children}</span>
  </Link>
)

function AboutBackground() {
  return (
    <div className='flex flex-col pt-10'>
      <h1 className='font-header text-5xl font-bold tracking-tight pt-10 text-center md:text-left'>
        Background
      </h1>

      <p className='mt-4 text-xl font-medium leading-8 tracking-tight'>
        My Journey in Programming began when I was 20 years old, when I studied web system in my
        diploma program at Nihon Computer Professional Training College in Osaka. In addition, I
        learned HTML and CSS from Youtube. After Learning these skills, I set out to create a fun
        project for myself
      </p>
      <p className='mt-4 text-xl font-medium leading-8 tracking-tight'>
        At that time, I realized that relying on college textbooks was insufficient for mastering
        the material. I needed to build a strong foundational understanding, so I started learning
        beyond my college curriculum through YouTube, Udemy, and other resources. After graduating,
        I began taking online courses on{' '}
        <InlineLink href='https://zerotomastery.io/courses/coding-bootcamp/'>
          Zero To Mastery
        </InlineLink>{' '}
        and recently in 2024, I started learning{' '}
        <InlineLink href='https://pll.harvard.edu/course/cs50-introduction-computer-science'>
          CS50
        </InlineLink>{' '}
        and{' '}
        <InlineLink href='https://zerotomastery.io/courses/learn-data-structures-and-algorithms/'>
          Data Structures and Algorithms (DSA).
        </InlineLink>
      </p>
      <p className='mt-4 text-xl font-medium leading-8 tracking-tight'>
        In my spare time, I moderate a Japanese community called Artificial Intelligence Japan,
        which my friends invited me to.
      </p>
      <p className='mt-4 text-xl font-medium leading-8 tracking-tight'>
        With knowledge under my belt, I went on to learn new languages, actively participating in
        community moderation, and eventually creating my own projects. In the future, I hope to
        contribute to open source projects.
      </p>
    </div>
  )
}
export default AboutBackground
