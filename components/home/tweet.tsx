import { Idol } from 'types/idol'

import { site } from 'data/site'

type Props = {
  idol: Idol
  seconds: number
}

const Tweet = ({ idol, seconds }: Props): JSX.Element => {
  const url = new URL('https://twitter.com/intent/tweet')
  url.searchParams.append(
    'text',
    `${idol.name}さんのお誕生日まで、残り ${seconds} 秒です！`
  )
  url.searchParams.append('url', `${site.url}/${idol.id}?t=${seconds}`)

  return (
    <a
      className="inline-block px-12 py-1 text-lg text-white rounded-full shadow-md"
      href={url.href}
      style={{ backgroundColor: idol.color }}
    >
      ツイート
    </a>
  )
}

export default Tweet
