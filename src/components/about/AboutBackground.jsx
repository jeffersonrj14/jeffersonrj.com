import Link from 'next/link'

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    passHref
    target='a_blank'
    className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark hover:dark:text-jefferson-light'
  >
    <span className='relative skew-y-3'>{children}</span>
  </Link>
)

function AboutBackground() {
  return (
    <div className='flex flex-col'>
      <h1 className='font-header text-4xl font-bold tracking-tight text-left'>Background</h1>
      <div className='my-10'>
        <p className='mb-4 text-xl font-medium leading-8 tracking-tight'>
          My Journey in Programming began when I was 20 years old, when I studied web system in my
          diploma program at Nihon Computer Professional Training College in Osaka. In addition, I
          learned HTML and CSS from Youtube. After Learning these skills, I set out to create a fun
          project for myself
        </p>
        <p className='mb-4 text-xl font-medium leading-8 tracking-tight'>
          It was then that I understood that learning a subject could not be accomplished by using
          only college textbooks. By using YouTube, Udemy, and other resources, I began learning
          beyond the college curriculum in order to establish a solid fundamental understanding. So,
          I started taking online classes after I graduated.
        </p>
        <p className='mb-4 text-xl font-medium leading-8 tracking-tight'>
          In my spare time, I learn foreign languages, and currently, I&apos;m learning to make my
          Japanese fluent. I am enthusiastic about it and often read Japanese novels. In addition, I
          occasionally repost videos from Vtuber with English subtitles so that viewers can
          understand what these Vtuber Japanese Talent are talking about.
        </p>
        <p className='text-xl font-medium leading-8 tracking-tight'>
          With knowledge under my belt, I went on to learn new programming languages. In the future,
          I hope to contribute to open-source projects.
        </p>
      </div>
    </div>
  )
}
export default AboutBackground
