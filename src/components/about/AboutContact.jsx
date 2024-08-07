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

function AboutContact() {
  return (
    <div>
      <h1 className='font-header text-4xl font-bold tracking-tight text-left'>Contact</h1>

      <p className='my-10 text-xl font-medium leading-8 tracking-tight '>
        You can contact me via{' '}
        <InlineLink href='mailto:jefferson@jeffersonrj.com'>jefferson@jeffersonrj.com</InlineLink>,{' '}
        <InlineLink href='https://twitter.com/jeffersonrj14'>Twitter DM</InlineLink> or through{' '}
        <InlineLink href='https://discordapp.com/users/606481557615542273'>Discord</InlineLink>.
        <br />
      </p>
    </div>
  )
}
export default AboutContact
