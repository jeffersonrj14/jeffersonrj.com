
import React from "react";
import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
	FiMail,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';


const IntlDateFormatter = new Intl.DateTimeFormat('en-US', {
	timeStyle: 'short',
	timeZone: 'Asia/Jakarta',
	hour12: false
  })
  
const availablestatus = date => {
	if (date == null) return { color: "", string: "" }
	const h = parseInt(IntlDateFormatter.format(date).split(":")[0])
  
	if (h < 2) {
	  return { color: "bg-green-500", string: "Live" }
	} else if (h < 9) {
	  return { color: "bg-amber-600", string: "Sleep" }
	} else if (h < 14) {
	  return { color: "bg-red-500", string: "Busy-Study" }
	} else if (h < 17) {
	  return { color: "bg-amber-600", string: "Nap" }
	} else if (h < 21) {
	  return { color: "bg-red-500", string: "Busy-Study" }
	} else if (h < 24) {
	  return { color: "bg-green-500", string: "Available" }
	} else {
	  return { color: "bg-red-500", string: "Busy-Study" }
	}
  }

  
  const MyLinks = ({ href, text, rel }) => {
	return (
	  <li className="my-2">
		<a
		  href={href}
		  rel={rel}
		  target="a_blank"
		  className="text-jefferson-dark dark:text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-jefferson-main dark:hover:text-jefferson-main"
		>
		  {text}
		</a>
	  </li>
	)
  }
  
  const CurrentTime = () => {
	const [currentTime] = React.useState()
	return (
	  <>
		<p className="mt-2 font-medium tabular-nums tracking-tight text-xl text-jefferson-dark dark:text-jefferson-light">
		  {IntlDateFormatter.format(currentTime)} GMT+7
		</p>
	  </>
	)
  }
  const Available = () => {
	const [timeslot, setTimeslot] = React.useState()
  
	const calculateTime = React.useCallback(() => {
	  const now = new Date()
	  setTimeslot(availablestatus(now))
	}, [])
  
	// Timer
	React.useEffect(() => {
	  calculateTime()
  
	  const interval = setInterval(calculateTime, 1000)
	  return () => clearInterval(interval)
	}, [calculateTime])
  
	return (
	  <>
		<div className="flex items-center justify-center font-medium tracking-tight text-xl text-jefferson-dark dark:text-jefferson-light my-2 ">
		  <div
			className={` mr-2 h-4 w-4 shrink-0 rounded-full ${timeslot?.color}`}
		  >
			<div
			  className={`${timeslot?.color} mr-2 h-4 w-4 shrink-0 animate-ping rounded-full`}
			/>
		  </div>
		  {timeslot?.string}
		</div>
	  </>
	)
  }

  const AboutMe = () => {
	return (
	  <section className='my-4 grid grid-cols-2 sm:grid-cols-3  '>

		<div className="hidden sm:block md:block">
      		<h2 className='font-header uppercase tracking-tight text-2xl font-extrabold  text-primary-dark dark:text-jefferson-light'>
          		Other Links
        	</h2>

        	<ul className='font-medium tracking-tight text-slate-200'>
			  <MyLinks href='https://links.jeffersonfed.xyz' text='Social Links ' />
          	</ul>
      	</div>

		<div>
		  	<h2 className='font-header uppercase tracking-tight text-2xl font-extrabold  text-primary-dark dark:text-jefferson-light'>
		  		Who am I?
		  	</h2>
			<ul className='font-medium tracking-tight text-slate-200'>
		  		<MyLinks href='https://gravatar.com/stupidjeff430' text='RJ Jefferson' />
          		
				<span className='my-2 font-medium tracking-tight text-jefferson-dark dark:text-jefferson-light decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-jefferson-main dark:hover:text-jefferson-main'>
            		22 y/o | he/him
        		</span>
			</ul>
		  {/* <CurrentTime /> */}
		  {/* <Available /> */}
		</div>

		<div>
        	<h2 className='font-header uppercase tracking-tight text-2xl font-extrabold  text-primary-dark dark:text-jefferson-light'>
          		Contact Me
        	</h2>

        	<ul className='font-medium tracking-tight text-slate-200'>
			  <MyLinks href='mailto:jefferson@jeffersonrj.com' text='Email' />
			  <MyLinks href='https://www.linkedin.com/in/jeffersonrj14' text='Linkedin' />
          	</ul>
      	</div>

	  </section>
	)
  }

  const AboutMe2 = () => {
	return (
		
		<section className='my-4 grid grid-cols-3 sm:grid-cols-3'>	
	  	<div>
        	<ul className='font-medium tracking-tight text-slate-200'>
            	<MyLinks href='/' text='Home'/>  
            	<MyLinks href='/projects' text='Projects' />
            	<MyLinks href='/about' text='About' />
        	</ul>
      	</div>
	  	<div>
        {/* <h2 className='pt-4 font-header text-lg font-bold uppercase tracking-tight text-primary-dark dark:text-jefferson-light'>
          Socials
        </h2> */}
        	<ul className='font-medium tracking-tight text-slate-200'>
            	<MyLinks href='https://github.com/jeffersonrj14' text='GitHub' rel='me' />  
				<MyLinks href='https://discordapp.com/users/606481557615542273' text='Discord' rel='me' />
        	</ul>
      	</div>
		<div>
        	<ul className='font-medium tracking-tight text-slate-200'>
            	<MyLinks href='https://instagram.com/jeffersonrj14' text='Instagram' rel='me' />
            	<MyLinks href='https://twitter.com/jeffersonrj14' text='Twitter' rel='me' />
            	{/* <MyLinks href='https://keybase.io/jeffersonfed' text='Keybase' />  */}
        	</ul>
		</div>
	   
	  </section>
	)
}
const AboutFooter = () => {
	return (
		<div>
		<AboutMe />
		
		<div class="inline-flex items-center justify-center w-full">
    		<hr class="w-4/5 h-1 my-8 bg-gray-300 border-0 rounded dark:bg-gray-700" />
    			<div class="absolute px-4 -translate-x-1/2 bg-jefferson-light left-1/2 dark:bg-jefferson-dark">
        			<svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    					<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  					</svg>
   				</div>
		</div>
		<AboutMe2 />
		</div>
	)
}
  
// const socialLinks = [
// 	{
// 		id: 1,
// 		icon: <FiGlobe />,
// 		url: 'https://www.jeffersonfed.xyz/',
// 	},
// 	{
// 		id: 2,
// 		icon: <FiGithub />,
// 		url: 'https://github.com/jeffersonfed',
// 	},
// ];
// const LinkFooter = [
// 	{
// 		id: 1,
// 		icon: <FiGlobe />,
// 		url: 'https://www.jeffersonfed.xyz/',
// 	},
// 	{
// 		id: 2,
// 		icon: <FiGithub />,
// 		url: 'https://github.com/jeffersonfed',
// 	},
// ];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20  dark:border-secondary-dark">
				{/* Footer social links */}

				{/* <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						My Social
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div> */}
				<hr className=' mx-auto border-t-2 border-primary-dark dark:border-primary-light rounded-2xl' />
					<div className="mt-2 flex w-full flex-col text-center ">
						<AboutFooter />
						
					</div>
				{/* <AppFooterCopyright /> */}
				<hr className=' mx-auto border-t-2 border-primary-dark dark:border-primary-light rounded-2xl' />
        		<div className='grid grid-cols-1 sm:grid-cols-2'>
          			<div className='my-4 text-center font-light text-jefferson-dark dark:text-jefferson-light md:text-left '>
						RJ Jefferson &nbsp;
						
							<a
								href="https://github.com/jeffersonrj14"
								target="__blank"
								className="inline "
							>
								<FiGithub className="inline"/>
							</a>
							&nbsp;
							<a
								href="https://linkedin.com/in/jeffersonrj14"
								target="__blank"
								className="inline"
							>
								<FiLinkedin className="inline"/>
							</a>
							&nbsp;
							<a
								href="mailto:jefferson@jeffersonrj.com"
								target="__blank"
								className="inline"
							>
								<FiMail className="inline"/>
							</a>
						{/* <ul className="flex gap-4 sm:gap-8">
						{LinkFooter.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="decoration-slate-200 decoration-wavy decoration-2 underline-offset-4 transition-all hover:text-teal-500 hover:underline dark:hover:text-indigo-400"
								// dark:decoration-black??
								
								// text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300
							>
								<i className="text-base sm:text-lg md:text-xl">
									{link.icon}
								</i>
							</a>
						))}
						</ul> */}
					</div>


          			<div className='my-4 text-center font-light text-jefferson-dark dark:text-jefferson-light md:text-right'>&copy; {new Date().getFullYear()} Created using Next.js & Tailwind CSS </div>
        		</div>
			</div>
		</div>
	);
}

export default AppFooter;
