import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
  NextPage
} from 'next'

import type { ServerSideProps } from 'types/server-side-props'

import NotFound from 'components/404'
import Home from 'components/home'

import { getIdol } from 'libs/idols'
import { getOgpImageUrl } from 'libs/ogp'
import { parseQuery } from 'libs/parse'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const HomePage: NextPage<Props> = (props) =>
  props ? <Home {...props} /> : <NotFound />

export default HomePage

export const getServerSideProps = ({
  query
}: GetServerSidePropsContext): GetServerSidePropsResult<ServerSideProps> => {
  const { id, hash, timestamp } = parseQuery(query)

  const idol = getIdol(id)
  if (!idol) {
    throw new Error('Invalid ID')
  }

  return {
    props: {
      idol,
      ogpImageUrl: getOgpImageUrl(idol, timestamp, hash)
    }
  }
}
