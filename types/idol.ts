import { Birth } from './birth'

export type Idol = {
  id: string
  name: string
  color: {
    hex: string
    isWhitish: boolean
  }
  birth: Birth
}
