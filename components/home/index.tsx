import type { ServerSideProps } from 'types/server-side-props'

import SEO from 'components/common/seo'

import Time from './time'
import Tweet from './tweet'

const Home = (props: ServerSideProps): JSX.Element => {
  const seconds = 120000

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <SEO {...props} />
      <div className="space-y-12 text-center font-default">
        <div className="text-2xl">{`${props.idol.name}さんのお誕生日まで`}</div>
        <Time seconds={seconds} />
        <Tweet idol={props.idol} seconds={seconds} />
      </div>
    </div>
  )
}

export default Home
