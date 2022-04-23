import Link from 'next/link'
import { GiPartyPopper } from 'react-icons/gi'

type Props = {
  navi?: boolean
  children: React.ReactNode
}

const Layout = ({ navi = false, children }: Props): JSX.Element => (
  <div className="flex flex-col justify-center items-center p-8 min-h-screen select-none">
    {navi && (
      <Link href="/" passHref>
        <a className="inline-flex flex-row items-center fixed top-8 left-8 text-2xl text-gray-500 hover:text-gray-800 transition-colors">
          <GiPartyPopper />
        </a>
      </Link>
    )}
    {children}
  </div>
)

export default Layout
