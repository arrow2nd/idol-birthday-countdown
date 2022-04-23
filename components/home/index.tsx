import { useRouter } from 'next/router'
import { GiPartyPopper } from 'react-icons/gi'
import Select from 'react-select'

import { Option } from 'types/select'

import Layout from 'components/common/layout'
import SEO from 'components/common/seo'

type Props = {
  options: Option[]
}

const Home = ({ options }: Props): JSX.Element => {
  const router = useRouter()

  return (
    <Layout>
      <SEO />
      <div className="flex flex-row items-center font-bold text-3xl">
        <GiPartyPopper className="mr-2 text-4xl" />
        アイマスアイドルのお誕生日まで...？
      </div>
      <p className="mt-2 text-gray-700">
        アイドルのお誕生日までの秒数をカウントダウンするサイトです。
      </p>
      <Select
        className="mt-8 w-72"
        placeholder="アイドルを選択してください..."
        options={options}
        onChange={(e) => {
          e?.value && router.push(e.value)
        }}
      />
    </Layout>
  )
}

export default Home
