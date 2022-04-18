import type { InferGetStaticPropsType, NextPage } from 'next'

import { Option } from 'types/select'

import Home from 'components/home'

import { idols } from 'data/idols'

// ----------------------------------

type Props = InferGetStaticPropsType<typeof getStaticProps>

const HomePage: NextPage<Props> = (props: Props) => <Home {...props} />

export default HomePage

// ----------------------------------

export const getStaticProps = async () => {
  const options: Option[] = idols.map(({ id, name }) => ({
    id,
    value: id,
    label: name
  }))

  return {
    props: {
      options
    }
  }
}
