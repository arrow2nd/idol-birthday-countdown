import { useState } from 'react'

import type { ServerSideProps } from 'types/server-side-props'

import SEO from 'components/common/seo'

import { useInterval } from 'hooks/useInterval'

import { calcSecondsToBirthday, getNowJstDate } from 'libs/date'

import Count from './count'
import Loading from './loading'

const Home = ({
  idol,
  ogpImageUrl,
  dateHash
}: ServerSideProps): JSX.Element => {
  const [seconds, setSeconds] = useState<number>()

  // TODO: 誕生日になったらストップする
  useInterval(() => {
    setSeconds(calcSecondsToBirthday(getNowJstDate(), idol.birth))
  })

  return (
    <div className="flex flex-col justify-center items-center min-h-screen select-none">
      <SEO idol={idol} ogpImageUrl={ogpImageUrl} />
      <div className="space-y-12 text-center font-default">
        {typeof seconds !== 'undefined' ? (
          <Count {...{ idol, seconds, dateHash }} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default Home
