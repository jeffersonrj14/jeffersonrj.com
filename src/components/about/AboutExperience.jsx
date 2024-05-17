const MyLinks = ({ href, text, rel }) => {
  return (
    <a
      href={href}
      rel={rel}
      target='a_blank'
      className='decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline hover:text-jefferson-main'
    >
      {text}
    </a>
  )
}

function AboutExperience() {
  return (
    <div>
      <h1 className='font-header text-5xl font-bold tracking-tight text-center md:text-left'>
        Work Experience
      </h1>

      <br />
      <div className='grid grid-cols-1 md:grid-cols-6 my-10 '>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl font-bold'>Hotel Inspector</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks href='https://maps.app.goo.gl/bMDccdY22MzwMhyA7' text='M Plus Hotel' />
          </h6>
          <p>Oct 2020 - Feb 2023 (Kyoto, Japan)</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <li className='my-2'>Worked in hotel as a part time job during studies</li>
            <li className='my-2'>
              Conducted formal conversations in Japanese to address customer inquiries and ensure
              guest satisfaction.
            </li>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-6 my-10 '>
        <div className='flex flex-col col-span-2 mb-4 md:mb-0'>
          <h5 className='text-xl md:text-2xl font-bold'>Cashier, Food Services</h5>
          <h6 className='text-lg font-bold'>
            <MyLinks
              href='https://maps.app.goo.gl/xHk3aF9pkEcKEeJj6'
              text='Nichigetsuan (Traditional Japanese Restaurant)'
            />
          </h6>
          <p>Oct 2019 - Oct 2022 (Kyoto, Japan)</p>
        </div>
        <div className='flex flex-col col-span-4 text-xl'>
          <div>
            <li className='my-2'>
              Worked in food services company as a part time job during studies
            </li>
            <li className='my-2'>
              Provided excellent customer service by conversing with customers in both English and
              Japanese, serving a varied customer base including tourists.
            </li>
            <p className='my-2 italic'>
              Note: <span className='font-medium'>The restaurant closed</span> in October 2022 due
              to government regulations related to the COVID-19 pandemic and the closure of tourist
              attractions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutExperience
