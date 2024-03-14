import Image from 'next/image';

// Languages
import NotionDark from '../../public/images/tech-logo/v2/notiondark.svg';
import HTML5 from '../../public/images/tech-logo/v2/01html.svg';
import CSS3 from '../../public/images/tech-logo/v2/01css-3.svg';
import JavaScript from '../../public/images/tech-logo/v2/01javascript.svg';
import TypeScript from '../../public/images/tech-logo/v2/01typescript.svg';
import LaTeX from '../../public/images/tech-logo/v2/01latex.svg';
import LangTL from '../../public/images/tech-logo/v2/language-translate-bubbles-icon.svg';

// Web Development
import React from '../../public/images/tech-logo/v2/01react.svg';
import Nextjs from '../../public/images/tech-logo/v2/01next-js.svg';
import Tailwind from '../../public/images/tech-logo/v2/01tailwind-css.svg';

// Infrastructure
import Cloudflare from '../../public/images/tech-logo/v2/01cloudflare.svg';
import GHAction from '../../public/images/tech-logo/v2/01GitHub-Actions-blue.svg';
import Netlify from '../../public/images/tech-logo/v2/01netlify.svg';
import Vercel from '../../public/images/tech-logo/v2/01vercel.svg';
import Windows10 from '../../public/images/tech-logo/v2/01windows10.svg';

// Development Tools
import Git from '../../public/images/tech-logo/v2/01git-icon.svg';
import VisualStudioCode from '../../public/images/tech-logo/v2/01visual-studio-code.svg';
import Figma from '../../public/images/tech-logo/v2/01figma.svg';

// Design
import Canva from '../../public/images/tech-logo/v2/canva-icon.svg';

function AppSkill() {

	return (
        <div className="mt-10 sm:mt-20  rounded-lg">
            
{/*
    Svg from 
        https://simpleicons.org/
        https://heroicons.com
        https://worldvectorlogo.com
	
	Pre-Built Components
		https://tailwindcomponents.com
*/}

<div class="max-w-screen-xl mx-auto pt-10 ">
                            <div class="flex flex-col">
                                <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left'>
                                    Skill
                                </h1>
                                <p class="mt-4 text-xl font-medium leading-8 tracking-tight">
                                    Here are some highlights of the things I know:
                                </p>
                            </div>
                            
            
                            <div class="grid divide-y divide-neutral-200  mx-auto mt-2">
            
                                <div class="py-5">
                        
                            {/* Languages */}
                                    <details class="group text-xl ">
                                        <summary class="flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-dark dark:bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-dark dark:hover:bg-jefferson-main dark:hover:text-jefferson-light  text-jefferson-light dark:text-jefferson-dark">
                                            <span>Languages</span>
                                                <span class="transition group-open:rotate-180">
                                                    
                                                    <svg fill="#DFE6E9" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                            </span>
                                        </summary>
            
                                        <p class="bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn  ">
                                            <ul class="list-disc  text-jefferson-dark">
                                                <span class="font-medium ">Web Development</span>
                                                <li >
                                                    ・<Image
                                                        src={HTML5}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;HTML5&nbsp;and&nbsp;
                                                    <Image
                                                        src={CSS3}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;CSS3&nbsp;
                                                </li>
                                                <li >
                                                    ・<Image
                                                        src={JavaScript}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;JavaScript&nbsp;and&nbsp;
                                                    <Image
                                                        src={TypeScript}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;TypeScript&nbsp;
                                                </li>
                                                
                                            <br />
            
                                                <span class="font-medium">Others</span>
                                                <li >
                                                    ・<Image
                                                        src={LaTeX}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;LaTeX&nbsp;
                                                </li>
            
                                            <br />
                                            
                                                <span class="font-medium">
                                                    <Image
                                                        src={LangTL}
                                                        width={40}
                                                        height={40}
                                                        className="inline"
                                                        alt="Language Logo"
                                                    />
                                                </span>
                                                <li >
                                                    ・&nbsp;Indonesia&nbsp;
                                                </li>
                                                <li >
                                                    ・&nbsp;English&nbsp;
                                                </li>
                                                <li >
                                                    ・&nbsp;Japanese&nbsp;
                                                </li>
                                            </ul>
                                        </p>
                                    </details>
            
                                    <br />
            
                        {/* Web Development */}
                                    <details class="group text-xl">
                                        <summary class="flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-dark dark:bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-dark dark:hover:bg-jefferson-main dark:hover:text-jefferson-light  text-jefferson-light dark:text-jefferson-dark">
                                            <span>Web Development</span>
                                                <span class="transition group-open:rotate-180">
                                                    
                                                    <svg fill="#DFE6E9" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                            </span>
                                        </summary>
            
                                        <p class="bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn ">
                                            <ul class="list-disc dark:text-jefferson-dark">
                                                <span class="font-medium">Frontend</span>
                                                <li >
                                                    ・<Image
                                                        src={React}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;React&nbsp;
                                                </li>
                                                <li >
                                                    ・<Image
                                                        src={Nextjs}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Next.js&nbsp;
                                                </li>
                                                <li >
                                                    ・<Image
                                                        src={Tailwind}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Tailwind CSS&nbsp;
                                                </li>
            
                                            <br />
            
                                                <span class="font-medium">Backend</span>
                                                <li >
                                                    ・<Image
                                                        src={React}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;-&nbsp;
                                                </li>
                                            </ul>
                                        </p>
                                    </details>
            
                                    <br />
            
                        {/* Infrastructure */}
                                    <details class="group text-xl">
                                        <summary class="flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-dark dark:bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-dark dark:hover:bg-jefferson-main dark:hover:text-jefferson-light  text-jefferson-light dark:text-jefferson-dark">
                                            <span>Infrastructure</span>
                                                <span class="transition group-open:rotate-180">
                                                    
                                                    <svg fill="#DFE6E9" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                            </span>
                                        </summary>
            
                                        <p class="bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn ">
                                            <ul class="list-disc dark:text-jefferson-dark">
                                                <span class="font-medium">Host</span>
                                                <li >
                                                    ・<Image
                                                        src={Cloudflare}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Cloudflare&nbsp;
                                                </li>
                                            
                                            <br />
            
                                                <span class="font-medium">CI/CD</span>
                                                <li>
                                                    ・<Image
                                                        src={GHAction}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Github Action&nbsp;
                                                </li>
                                            
                                            <br />
            
                                                <span class="font-medium">Serverless Solutions</span>
                                                    <li >
                                                        ・<Image
                                                            src={Cloudflare}
                                                            width={20}
                                                            height={20}
                                                            className="inline"
                                                            alt="Tech Logo"
                                                        />&nbsp;Cloudflare&nbsp;
                                                    </li>
                                                    <li >
                                                        ・<Image
                                                            src={Netlify}
                                                            width={20}
                                                            height={20}
                                                            className="inline"
                                                            alt="Tech Logo"
                                                        />&nbsp;Netlify&nbsp;
                                                    </li>
                                                    <li >
                                                        ・<Image
                                                            src={Vercel}
                                                            width={20}
                                                            height={20}
                                                            className="inline"
                                                            alt="Tech Logo"
                                                        />&nbsp;Vercel&nbsp;
                                                    </li>
            
                                            <br />
            
                                                <span class="font-medium">Operating Systems</span>
                                                    <li >
                                                        ・<Image
                                                            src={Windows10}
                                                            width={20}
                                                            height={20}
                                                            className="inline"
                                                            alt="Tech Logo"
                                                        />&nbsp;Windows&nbsp;
                                                    </li>
                                            </ul>
                                        </p>
                                    </details>
            
                                    <br />
                        
                        {/* Development Tools */}
                                    <details class="group text-xl">
                                        <summary class="flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-dark dark:bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-dark dark:hover:bg-jefferson-main dark:hover:text-jefferson-light  text-jefferson-light dark:text-jefferson-dark">
                                            <span>Development Tools</span>
                                                <span class="transition group-open:rotate-180">
                                                    
                                                    <svg fill="#DFE6E9" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                            </span>
                                        </summary>
            
                                        <p class=" bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn ">
                                            <ul class="list-disc text-jefferson-dark">
                                                <li >
                                                    ・<Image
                                                        src={Git}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Git&nbsp;
                                                </li>
                                                <li >
                                                    ・<Image
                                                        src={VisualStudioCode}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Visual Studio Code&nbsp;
                                                </li>
                                                <br />
                                                <li >
                                                    ・<Image
                                                            src={NotionDark}
                                                            width={20}
                                                            height={20}
                                                            className="inline"
                                                            alt="Tech Logo"
                                                        />&nbsp;Notion&nbsp;
                                                </li>
                                                <li >
                                                    ・<Image
                                                        src={Figma}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Figma&nbsp;
                                                </li>
                                            </ul>
                                        </p>
                                    </details>
            
                                    <br />
                        
                    
                    {/* Design */}	
                                    <details class="group text-xl">
                                        <summary class="flex justify-between items-center font-semibold cursor-pointer list-none shadow-lg px-2 py-2 rounded-lg bg-jefferson-dark dark:bg-jefferson-light  hover:bg-jefferson-main hover:text-jefferson-dark dark:hover:bg-jefferson-main dark:hover:text-jefferson-light  text-jefferson-light dark:text-jefferson-dark">
                                            <span>Design</span>
                                                <span class="transition group-open:rotate-180">
                                                    
                                                    <svg fill="#DFE6E9" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                                        <path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                            </span>
                                        </summary>
            
                                        <p class="bg-jefferson-light shadow-lg rounded-lg px-2 py-2 items-center mt-3 group-open:animate-fadeIn ">
                                            <ul class="list-disc text-jefferson-dark">
                                                <li >
                                                    ・<Image
                                                        src={Canva}
                                                        width={20}
                                                        height={20}
                                                        className="inline"
                                                        alt="Tech Logo"
                                                    />&nbsp;Canva&nbsp;
                                                </li>
                                            </ul>
                                        </p>
                                    </details>
            
            
            
                                </div>
                            </div>
                        </div>
            

            
                        <br/>
            
                        
            
                        
                    
		</div>
	);
}

export default AppSkill;
