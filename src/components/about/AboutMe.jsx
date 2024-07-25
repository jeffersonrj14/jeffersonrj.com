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
      <h1 className='font-header text-4xl font-bold tracking-tight text-left mt-20'>About</h1>
      <div className='my-10'>
        <p className='mb-4 text-xl font-medium leading-8 tracking-tight '>
          Hello, my name is Ritch Johan Jefferson, you can call me Jefferson or Ritch. I&#39;m from
          Indonesia
        </p>

        <p className='mb-4 text-xl font-medium leading-8 tracking-tight'>
          I learn independently through various resources (
          <InlineLink href='https://www.youtube.com/c/Freecodecamp'>
            FreeCodeCamp Youtube
          </InlineLink>
          , <InlineLink href='https://www.theodinproject.com/'>The Odin Project</InlineLink>,{' '}
          <InlineLink href='https://www.khanacademy.org/computing'>Khan Academy</InlineLink>, etc).
        </p>

        <p className=' text-xl font-medium leading-8 tracking-tight'>
          You can find me on <InlineLink href='https://github.com/jeffersonrj14'>GitHub</InlineLink>
          , <InlineLink href='https://discordapp.com/users/606481557615542273'>Discord</InlineLink>{' '}
          and <InlineLink href='https://twitter.com/jeffersonrj14'>Twitter</InlineLink>. Here is my{' '}
          <InlineLink href='/resume.pdf'>Resume</InlineLink> if you need it!
        </p>
      </div>
    </div>
  )
}
export default AboutMe
