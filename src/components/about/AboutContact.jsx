import Link from 'next/link'

const InlineLink = ({ href, children }) => (
  <Link
    href={href}
    passHref
    target='a_blank'
    className='relative inline-block text-jefferson-main before:absolute before:-inset-1 before:block before:-skew-y-3 hover:text-jefferson-dark  before:hover:bg-jefferson-light'
  >
    <span className='relative skew-y-3'>{children}</span>
  </Link>
)

function AboutContact() {
  return (
    <div>
      <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left pt-10'>
        How to Contact Me
      </h1>

      <p className='mt-4 text-xl font-medium leading-8 tracking-tight '>
        You can contact me via{' '}
        <InlineLink href='mailto:jefferson@jeffersonrj.com'>jefferson@jeffersonrj.com</InlineLink>,{' '}
        <InlineLink href='https://twitter.com/jeffersonrj14'>Twitter DM</InlineLink> or through{' '}
        <InlineLink href='https://discordapp.com/users/606481557615542273'>Discord</InlineLink>.
        <br />
        {/* If you want to have a more secure channel of communication, you can also reach me on <InlineLink href="https:keybase.io/jeffersonrj14">Keybase</InlineLink> */}
      </p>
    </div>
  )
}
export default AboutContact
