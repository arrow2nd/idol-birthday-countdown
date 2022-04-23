import { BsEmojiExpressionless } from 'react-icons/bs'

import Layout from 'components/common/layout'

const NotFound = (): JSX.Element => (
  <Layout navi>
    <div className="flex flex-row items-center text-3xl">
      <BsEmojiExpressionless className="mr-2" />
      <span className="text-xl">404 Notfound</span>
    </div>
  </Layout>
)

export default NotFound
