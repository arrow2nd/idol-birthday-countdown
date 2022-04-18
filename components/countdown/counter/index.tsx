import { Idol } from 'types/idol'

import HPB from './hpb'
import Time from './time'
import Tweet from './tweet'

export type CountProps = {
  idol: Idol
  seconds: number
  dateHash: string
}

const Counter = ({ idol, seconds, dateHash }: CountProps): JSX.Element => (
  <>
    {seconds > 0 ? (
      <Time name={idol.name} seconds={seconds} />
    ) : (
      <HPB idolName={idol.name} />
    )}
    <Tweet {...{ idol, seconds, dateHash }} />
  </>
)

export default Counter
