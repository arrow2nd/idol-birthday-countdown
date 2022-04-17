import Head from 'next/head'

import type { Idol } from 'types/idol'

import { site } from 'data/site'

type SEOProps = {
  idol: Idol
  ogpImageUrl: string
}

const SEO = ({ idol, ogpImageUrl }: SEOProps) => {
  const { titleTemplate, descTemplate, url, twitterUsername } = site

  const insertText = idol.name ? idol.name + 'さん' : 'アイマスアイドル'

  const title = titleTemplate.replace('%s', insertText)
  const desc = descTemplate.replace('%s', insertText)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={ogpImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogpImageUrl} />
    </Head>
  )
}

export default SEO
