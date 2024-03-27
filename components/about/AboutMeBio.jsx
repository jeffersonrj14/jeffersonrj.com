import Image from 'next/image';
// import { useState } from 'react';
// import { aboutMeData } from '../../data/aboutMeData';

function AboutMeBio() {
	// const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		// <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		// 	<div className="w-full sm:w-1/4 mb-2 sm:mb-0">
		// 		<Image
		// 			src="/images/IMG_8803.JPG"
		// 			width={500}
		// 			height={500}
		// 			className="rounded-lg"
		// 			alt="Profile Image"
		// 		/>
		// 	</div>
		<div className='flex w-full flex-col items-center'>
        <section className='mt-16 w-full p-4'>
          <div className='relative mb-12 h-12 w-56 mx-auto'>
            <Image
              src="/author2.png"
              alt="Jefferson Profile Picture"
			  className='rounded-full'
              width={500}
			  height={500}
            />
          </div>

			

			{/* <div className="font-general-regular w-full sm:w-3/4 text-left">
				<h2 className="text-jefferson-dark dark:text-jefferson-light font-semibold text-3xl tracking-tight text-left ">
					About Me
				</h2>
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div> */}
			</section>
		</div>
	);
}

export default AboutMeBio;
