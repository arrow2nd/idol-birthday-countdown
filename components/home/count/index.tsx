import { Idol } from 'types/idol'

import Time from './time'
import Tweet from './tweet'

export type CountProps = {
  idol: Idol
  seconds: number
  dateHash: string
}

const Count = (props: CountProps): JSX.Element => (
  <>
    <div className="text-2xl">{`${props.idol.name}さんのお誕生日まで`}</div>
    <Time seconds={props.seconds} />
    <Tweet {...props} />
  </>
)

export default Count
