import { useRef } from 'react'

import { getNowJstDate } from 'libs/date'

import { site } from 'data/site'

import { CountProps } from './index'

const Tweet = ({ idol, seconds, dateHash }: CountProps): JSX.Element => {
  const linkRef = useRef<HTMLAnchorElement>({} as HTMLAnchorElement)

  const handleClick = () => {
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

    linkRef.current.href = url.href
  }

  return (
    <a
      className="inline-block px-12 py-1 text-lg text-white rounded-full shadow-md cursor-pointer hover:brightness-75 transition-all"
      onClick={handleClick}
      ref={linkRef}
      style={{ backgroundColor: idol.color }}
    >
      ツイート
    </a>
  )
}

export default Tweet
