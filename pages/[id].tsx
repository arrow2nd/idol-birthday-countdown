import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
  NextPage
} from 'next'

import type { ServerSideProps } from 'types/server-side-props'

import NotFound from 'components/404'
import Home from 'components/home'

import { createDateString, getNowJstDate } from 'libs/date'
import { md5 } from 'libs/hash'
import { getIdol } from 'libs/idols'
import { createOgpImageUrl } from 'libs/ogp'
import { parseQuery } from 'libs/parse'

// ----------------------------------

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const HomePage: NextPage<Props> = (props) =>
  props ? <Home {...props} /> : <NotFound />

export default HomePage

// ----------------------------------

export const getServerSideProps = ({
  query
}: GetServerSidePropsContext): GetServerSidePropsResult<ServerSideProps> => {
  const { id, hash, timestamp } = parseQuery(query)

  // IDから該当するアイドルを探す
  const idol = getIdol(id)
  if (!idol) {
    throw new Error('Invalid ID')
  }

  // OGP画像URLを作成
  const ogpImageUrl = createOgpImageUrl(
    idol,
    timestamp,
    hash,
    process.env.APP_SECRET!
  )

  // 検証用のハッシュ値を作成
  const dateStr = createDateString(getNowJstDate())
  const dateHash = md5(dateStr + process.env.APP_SECRET)

  return {
    props: {
      idol,
      ogpImageUrl,
      dateHash
    }
  }
}
