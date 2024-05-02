import Head from 'next/head'

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/author2.png' />
      <title>{title}</title>
    </Head>
  )
}

PagesMetaHead.defaultProps = {
  title: 'Ritch Johan Jefferson - Front-end developer',
  keywords: 'next.js',
  description: 'Ritch Johan Jefferson - Self-taught front-end developer.'
}

export default PagesMetaHead
