import SEO, { SEOProps } from 'components/common/seo'

import Time from './time'
import Tweet from './tweet'

type Props = {}

const Home = ({ idolName, ogpImageUrl }: Props & SEOProps): JSX.Element => (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <SEO {...{ idolName, ogpImageUrl }} />
    <div className="space-y-12 text-center font-default">
      <div className="text-2xl">{`${idolName}さんのお誕生日まで`}</div>
      <Time />
      <Tweet />
    </div>
  </div>
)

export default Home
