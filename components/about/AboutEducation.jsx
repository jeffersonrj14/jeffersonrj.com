import Link from 'next/link';

const MyLinks = ({ href, text, rel }) => {
	return (

		<a
		  href={href}
		  rel={rel}
          target="a_blank"
		  className="decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-maindark dark:hover:text-jefferson-main"
		>
		  {text}
		</a>

	)
  }

function AboutEducation (){
    return (
    <div>
        <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left'>
                Education
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
            <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 class="text-xl md:text-2xl  font-bold">Web Development</h5>
                <h6 class="text-lg font-bold"><MyLinks href='https://zerotomastery.io' text='Zero To Mastery ' /></h6>
                <p>Oct 2023 - Present</p>
            </div>
            <div class="flex flex-col col-span-4 text-xl">
                <p>
                    <span className="font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark dark:hover:text-jefferson-light">Current Course:</span>
                        <li className="my-2">The Complete Web Developer in 2024: Zero to Mastery</li>
                        <li className="my-2">JavaScript: The Advanced Concepts</li>
                    <br/>
                    <span className="font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark dark:hover:text-jefferson-light">Taking another course later:</span>
                        <li className="my-2">The Complete Career Toolkit: Personal Branding, Resume Building + more</li>
                        <li className="my-2">The Complete Junior to Senior Web Developer Roadmap (2024)</li>
                        <li className="my-2">Master the Coding Interview: Data Structures + Algorithms</li>
                        <li className="my-2">Complete Web & Mobile Designer in 2024: UI/UX, Figma + more</li>
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-6 my-10">
            <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                <h5 class="text-xl md:text-2xl  font-bold">Diploma Web System</h5>
                <h6 class="text-lg font-bold"><MyLinks href='https://ncp.ac.jp' text='Institute computer Japan' /></h6>
                <p>Apr 2021 - Mar 2023</p>
            </div>
            <div class="flex flex-col col-span-4 text-xl">
                <p>
                    <ul>
                        <li className="my-2 font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark dark:hover:text-jefferson-light">Location: Osaka</li>
                        <li className="my-2">Grade: Cumulative GPA: 3.7/4.0</li>
                        <li className="my-2 font-semibold decoration-wavy decoration-2 underline-offset-4 hover:underline text-jefferson-maindark dark:text-jefferson-main hover:text-jefferson-dark dark:hover:text-jefferson-light">Relevant Courses</li>
                            <ul>
                                <li className="my-2">1. Web System - Javascript, PHP, Python, Java, C#</li>
                                <li className="my-2">2. Web Design - HTML, CSS, Jquery, API</li>
                                <li className="my-2">3. Database -MySQL</li>
                            </ul>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    )
}
export default AboutEducation;