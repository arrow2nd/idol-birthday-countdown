import { useState } from 'react'

import type { ServerSideProps } from 'types/server-side-props'

import Layout from 'components/common/layout'
import SEO from 'components/common/seo'

import { useInterval } from 'hooks/useInterval'

import { calcSecondsToBirthday, getNowJstDate } from 'libs/date'

import Counter from './counter'
import Loading from './loading'

const CountDown = ({
  idol,
  ogpImageUrl,
  dateHash
}: ServerSideProps): JSX.Element => {
  const [prevDate] = useState(getNowJstDate().getDate())
  const [seconds, setSeconds] = useState<number>()

  const { state, stop } = useInterval(() => {
    // ハッシュを再計算するために日付が変わったらリロード
    if (getNowJstDate().getDate() !== prevDate) {
      console.log('reload')
      window.location.reload()
    }

    setSeconds(calcSecondsToBirthday(getNowJstDate(), idol.birth))
  })

  // お誕生日ならカウントダウンを止める
  if (state === 'running' && typeof seconds !== 'undefined' && seconds < 0) {
    stop()
  }

  return (
    <Layout navi>
      <SEO idol={idol} ogpImageUrl={ogpImageUrl} />
      <div className="space-y-12 text-center font-default">
        {typeof seconds !== 'undefined' ? (
          <Counter {...{ idol, seconds, dateHash }} />
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  )
}

export default CountDown
