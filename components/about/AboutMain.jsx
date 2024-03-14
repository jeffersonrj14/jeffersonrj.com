import Link from 'next/link';

import AboutMe from './AboutMe';
import AboutBackground from './AboutBackground';
// import AboutSkill from './AboutSkill';
import AboutExperience from './AboutExperience';
import AboutEducation from './AboutEducation';
import AboutContact from './AboutContact';


const MyLinks = ({ href, text, rel }) => {
	return (

		<a
		  href={href}
		  rel={rel}
		  className="decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main dark:hover:text-jefferson-main"
		>
		  {text}
		</a>

	)
  }
  const InlineLink = ({ href, children }) => (
    <Link
      href={href}
      passHref
      className="relative inline-block text-jefferson-maindark dark:text-jefferson-main before:absolute before:-inset-1 before:block before:-skew-y-3 hover:text-jefferson-light dark:hover:text-jefferson-dark before:hover:bg-jefferson-dark before:hover:dark:bg-jefferson-light"
    >
      <span className="relative skew-y-3">{children}</span>
    </Link>
  )

function AboutMain (){
    return (

  <div class="pt-20 container mx-auto relative text-jefferson-dark dark:text-jefferson-light ">
    <AboutMe/>
    <AboutBackground/>
        {/* <div className="mt-10 sm:mt-20 rounded-lg">
             <AboutSkill/>
        </div> */}

    <section class="mt-10 sm:mt-20">
        <AboutExperience/>
    </section>
    <hr class="border-primary-dark dark:border-primary-light rounded-2xl mx-44" />


    <section class="pt-10 ">
        <AboutEducation/>
    </section>
        {/* <hr class="my-4 mx-auto border-t-2 border-primary-dark dark:border-primary-light rounded-2xl" /> */}
        <div>
          <AboutContact/>
        </div>
  </div>

    );
};


export default AboutMain;