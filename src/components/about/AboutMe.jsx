import Link from 'next/link'

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    target='a_blank'
    passHref
    className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark hover:dark:text-jefferson-light'
  >
    <span className='relative skew-y-3'>{children}</span>
  </Link>
)

function AboutMe() {
  return (
    <div>
      <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left pt-10 '>
        About Me
      </h1>
      <p className='mt-4 text-xl font-medium leading-8 tracking-tight '>
        Hello, my name is Ritch Johan Jefferson, you can call me Jefferson or Ritch. I&#39;m from
        Indonesia
      </p>

      <p className='mt-4 text-xl font-medium leading-8 tracking-tight '>
        I am currently studying{' '}
        <InlineLink href='https://pll.harvard.edu/course/cs50-introduction-computer-science'>
          CS50
        </InlineLink>
        . and taking online courses on{' '}
        <InlineLink href='https://zerotomastery.io'>Zero To Mastery</InlineLink>.
      </p>

      <p className='mt-4 text-xl font-medium leading-8 tracking-tight'>
        You can find me on <InlineLink href='https://github.com/jeffersonrj14'>GitHub</InlineLink>,{' '}
        <InlineLink href='https://discordapp.com/users/606481557615542273'>Discord</InlineLink> and{' '}
        <InlineLink href='https://twitter.com/jeffersonrj14'>Twitter</InlineLink>. Here is my{' '}
        <InlineLink href='/resume.pdf'>Resume</InlineLink> if you need it!
      </p>
    </div>
  )
}
export default AboutMe
