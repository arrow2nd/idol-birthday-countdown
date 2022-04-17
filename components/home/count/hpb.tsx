import { useReward } from 'react-rewards'

const HPB = (): JSX.Element => {
  const { reward: confettiReward, isAnimating: isConfettiAnimating } =
    useReward('confettiReward', 'confetti')

  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } =
    useReward('balloonsReward', 'balloons', {
      lifetime: 200,
      spread: 60,
      startVelocity: 5,
      elementSize: 40
    })

  return (
    <div
      className="text-3xl md:text-4xl font-bold"
      aria-disabled={isConfettiAnimating || isBalloonsAnimating}
      onClick={() => {
        confettiReward()
        balloonsReward()
      }}
    >
      <p>杜野凛世さんは</p>
      <p className="text-5xl md:text-6xl">本日がお誕生日</p>
      <p>です！！！🎉🎉🎉</p>
      <span id="confettiReward" />
      <span id="balloonsReward" />
    </div>
  )
}

export default HPB
