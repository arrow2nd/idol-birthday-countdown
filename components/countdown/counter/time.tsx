type Props = {
  name: string
  seconds: number
}

const Time = ({ name, seconds }: Props) => (
  <>
    <div className="text-2xl">{`${name}さんのお誕生日まで`}</div>
    <div className="space-x-2 text-2xl">
      <span>残り</span>
      <span className="text-5xl font-bold">{seconds}</span>
      <span>秒</span>
    </div>
  </>
)

export default Time
