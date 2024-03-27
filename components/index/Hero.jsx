// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { FiArrowDownCircle, FiLinkedin } from 'react-icons/fi';
// import useThemeSwitcher from '../../hooks/useThemeSwitcher';

// function AppBanner() {
// 	const [activeTheme] = useThemeSwitcher();

// 	return (
// 		<motion.section
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
// 			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
// 		>
// 			<div className="w-full md:w-3/5 text-left">
// 				<motion.h1
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{
// 						ease: 'easeInOut',
// 						duration: 0.9,
// 						delay: 0.1,
// 					}}
// 					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-jefferson-dark dark:text-jefferson-light uppercase"
// 				>
// 					Hi, I&#39;m <br />Ritch Johan Jefferson
// 				</motion.h1>
// 				{/* <motion.p
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{
// 						ease: 'easeInOut',
// 						duration: 0.9,
// 						delay: 0.2,
// 					}}
// 					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
// 				>
// 					ZTM Academy Students
// 				</motion.p> */}
// 				<motion.p
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{
// 						ease: 'easeInOut',
// 						duration: 0.9,
// 						delay: 0.2,
// 					}}
// 					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
// 				>
// 					A Front End Developer
// 				</motion.p>
// 				<motion.div
// 					initial={{ opacity: 0 }}
// 					animate={{ opacity: 1 }}
// 					transition={{
// 						ease: 'easeInOut',
// 						duration: 0.9,
// 						delay: 0.3,
// 					}}
// 					className="flex justify-center sm:block"
// 				>
// 					<a
// 						download="Resume.pdf"
// 						target="a_blank"
// 						href="/files/Jeff-Resume.pdf"
// 						className="font-general-medium flex justify-center items-center w-36 sm:w-36 mt-2 max-h-14 mb-6 sm:mb-0 text-lg border border-jefferson-light dark:border-jefferson-dark py-2.5 sm:py-3 shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 bg-jefferson-dark dark:bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-dark dark:hover:bg-jefferson-main dark:hover:text-jefferson-light  text-jefferson-light dark:text-jefferson-dark duration-500"
// 						aria-label="Download Resume"
// 					>
// 						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
// 						<span className="text-sm sm:text-lg duration-100">
// 							Resume (In Progress)
// 						</span>
// 					</a>
// 					<a
// 						href="https://www.linkedin.com/in/jeffersonrj14"
// 						target="a_blank"
// 						className="font-general-medium flex justify-center items-center w-36 sm:w-36 mt-2 max-h-14 mb-6 sm:mb-0 text-lg border border-jefferson-light dark:border-jefferson-dark py-2.5 sm:py-3 shadow-lg rounded-lg focus:ring-1 focus:ring-indigo-900 bg-jefferson-dark dark:bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-dark dark:hover:bg-jefferson-main dark:hover:text-jefferson-light  text-jefferson-light dark:text-jefferson-dark duration-500"
// 						aria-label="Linkedin Profile"
// 					>
// 						<FiLinkedin className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiLinkedin>
// 						<span className="text-sm sm:text-lg duration-100">
// 							Linkedin
// 						</span>
// 					</a>
// 				</motion.div>
				
// 			</div>

			


// 			<motion.div
// 				initial={{ opacity: 0, y: -180 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
// 				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
// 			>
				// <img
				// 	layout="responsive"
				// 	src={
				// 		activeTheme === 'dark'
				// 			? '/images/learning.svg'
				// 			: '/images/learning-dark.svg'
				// 	}
				// 	alt="Developer"
				// />
// 			</motion.div>
			
// 		</motion.section>
		
// 	);
// }

// export default AppBanner;

import { motion } from 'framer-motion';
import React from "react";
import Link from 'next/link'
import {
    SiGithub,
    SiTwitter,
    SiLinkedin,
    SiInstagram,
  } from 'react-icons/si'

  import { IoMail, IoLogoDiscord, IoDocumentText } from 'react-icons/io5'

  
  
  function SocialLink({ icon: Icon, ...props }) {
    return (
      <Link className="-m-1 p-1 " {...props}>
        <Icon className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-jefferson-dark dark:hover:fill-jefferson-light" />
      </Link>
    )
  }

  const IntlDateFormatter = new Intl.DateTimeFormat('en-US', {
	timeStyle: 'short',
	timeZone: 'Asia/Jakarta',
	hour12: false
  })

  const availablestatus = date => {
	if (date == null) return { color: "", string: "" }
	const h = parseInt(IntlDateFormatter.format(date).split(":")[0])
  
	if (h < 2) {
	  return { color: "bg-green-500", string: "Available" }
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

  const CurrentTime = () => {
	const [currentTime] = React.useState()
	return (
	  <>
		<p className="mt-2  tabular-nums tracking-tight inline ">
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
		<div className="flex items-center font-medium tracking-tight text-lg ">
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
  function Hero () {
    // const [activeTheme] = useThemeSwitcher();
    return (
      <>
      <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
        <div className="pt-5 mb-5 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I&apos;m RJ Jefferson
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              As a Front-End Developer based in Indonesia, I&apos;m learning every day to improve my skills, practicing problem-solving, and honing my CSS skills on Frontend Mentor. I&apos;m looking for new opportunities to expand my skills as I learn new languages.
            </p>
            <div className="mt-6 flex gap-6">
                <SocialLink
                    href="https://discordapp.com/users/606481557615542273"
                    aria-label="Check out my Discord"
                    icon={IoLogoDiscord}
                />
                <SocialLink
                    href="https://instagram.com/jeffersonrj14"
                    aria-label="Check out my Instagram"
                    icon={SiInstagram}
                />
                <SocialLink
                    href="https://github.com/jeffersonrj14"
                    aria-label="Check out my Github"
                    icon={SiGithub}
                />
                <SocialLink
                    href="https://twitter.com/jeffersonrj14"
                    aria-label="Check out my Twitter"
                    icon={SiTwitter}
                />
                {/* <SocialLink
                    href="https://linkedin.com/in/jeffersonrj14"
                    aria-label="Connect with me on LinkedIn"
                    icon={SiLinkedin}
                /> */}
                <SocialLink
                    href="/Resume.pdf"
                    aria-label="Check out my Resume"
                    icon={IoDocumentText}
                />
                <SocialLink
                    href="mailto:jefferson@jeffersonrj.com"
                    aria-label="Send me an email"
                    icon={IoMail}
                />
            </div>
            <div className='pt-5 text-lg '>
              Indonesia • <CurrentTime />
		  	      <Available />
          </div>
      </div>
      </motion.div>
      </>
    )
  }
  
  export default Hero;
  