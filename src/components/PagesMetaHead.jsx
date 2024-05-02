import Head from 'next/head'
import { NextSeo } from 'next-seo'

function PagesMetaHead({ title, keywords, description }) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        keywords={keywords}
        openGraph={{
          image: '/author2.png',
          type: 'website',
          locale: 'en_US',
          url: 'https://jeffersonrj.com',
          siteName: 'Portfolio'
        }}
        twitter={{
          image: '/author2.png',
          cardType: 'summary_large_image',
          title,
          description,
          handle: '@jeffersonrj14',
          site: '@jeffersonrj14'
        }}
      />

      {/*next/head for other customizations */}
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={keywords} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/author2.png' />
      </Head>
    </>
  )
}

PagesMetaHead.defaultProps = {
  title: 'Ritch Johan Jefferson - Front-end developer',
  keywords: 'next.js',
  description: 'Ritch Johan Jefferson - Self-taught front-end developer.'
}

export default PagesMetaHead
