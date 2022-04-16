import type { NextPage } from 'next'

import Home from 'components/home'

const HomePage: NextPage = () => (
  <Home
    idol={{
      id: 'rinze_morino',
      name: '杜野凛世',
      color: '#1da1f2',
      birth: { month: 10, day: 19 }
    }}
    ogpImageUrl=""
  />
)

export default HomePage
