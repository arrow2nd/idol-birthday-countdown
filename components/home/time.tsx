type Props = {
  seconds: number
}

const Time = ({ seconds }: Props) => (
  <div className="space-x-2 text-2xl">
    <span>残り</span>
    <span className="text-5xl font-bold">{seconds}</span>
    <span>秒</span>
  </div>
)

export default Time
