import Image from 'next/image';
import Link from 'next/link';

const InlineLink = ({ href, children }) => (
    <Link
      href={href}
      target="a_blank"
      passHref
      className="relative inline-block text-jefferson-maindark dark:text-jefferson-main before:absolute before:-inset-1 before:block before:-skew-y-3 hover:text-jefferson-light dark:hover:text-jefferson-dark before:hover:bg-jefferson-dark before:hover:dark:bg-jefferson-light"
    >
      <span className="relative skew-y-3">{children}</span>
    </Link>
  )

  function AboutMe (){
    return (
    <div>
        <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left pt-10 '>
            About Me
        </h1>
        <p className='mt-4 text-xl font-medium leading-8 tracking-tight '>
          Hello, my name is Ritch Johan Jefferson, you can call me Jefferson or Ritch. I&#39;m based in Indonesia
        </p>
  
        <p className='mt-4 text-xl font-medium leading-8 tracking-tight '>
          I am currently studying a bootcamp Web Development Course in <InlineLink href='https://zerotomastery.io'>Zero To Mastery</InlineLink>.
        </p>

        <p className='mt-4 text-xl font-medium leading-8 tracking-tight'>
          You can find me on <InlineLink href='https://github/jeffersonrj14'>GitHub</InlineLink>, <InlineLink href='https://discordapp.com/users/606481557615542273'>Discord</InlineLink> and <InlineLink href='https://twitter.com/jeffersonrj14'>Twitter</InlineLink>. Here is my <InlineLink href='#'>Resume(In Progress)</InlineLink> if you need it!
        </p>  
    </div>
    )
  }
  export default AboutMe;

  