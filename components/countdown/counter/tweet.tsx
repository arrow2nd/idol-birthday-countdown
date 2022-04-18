import { getNowJstDate } from 'libs/date'

import { site } from 'data/site'

import { CountProps } from './index'

const Tweet = ({ idol, seconds, dateHash }: CountProps): JSX.Element => {
  const url = new URL('https://twitter.com/intent/tweet')

  const timestamp = getNowJstDate().getTime()
  const text =
    seconds > 0
      ? `${idol.name}さんのお誕生日まで、残り ${seconds} 秒です！`
      : `${idol.name}さんは、本日がお誕生日です！！！！！🎉🎉🎉`

  url.searchParams.append('text', text)
  url.searchParams.append(
    'url',
    `${site.url}/${idol.id}?t=${timestamp}&h=${dateHash}`
  )

  return (
    <a
      className={`inline-block px-12 py-1 text-lg ${
        idol.color.isWhitish
          ? 'text-black border border-gray-300'
          : 'text-white'
      } rounded-full shadow-md cursor-pointer hover:brightness-75 transition-all`}
      href={url.href}
      style={{ backgroundColor: idol.color.hex }}
    >
      ツイート
    </a>
  )
}

export default Tweet
