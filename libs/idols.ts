import { Idol } from 'types/idol'

import { idols } from 'data/idols'

/**
 * IDからアイドルデータを取得
 * @param id アイドルID
 * @returns アイドルデータ
 */
export function getIdol(id?: string): Idol | undefined {
  return id ? idols.find((e) => e.id === id) : undefined
}
