import { Idol } from 'types/idol'

import Time from './time'
import Tweet from './tweet'

export type CountProps = {
  idol: Idol
  seconds: number
}

const Count = ({ idol, seconds }: CountProps): JSX.Element => (
  <>
    <div className="text-2xl">{`${idol.name}さんのお誕生日まで`}</div>
    <Time seconds={seconds} />
    <Tweet idol={idol} seconds={seconds} />
  </>
)

export default Count
