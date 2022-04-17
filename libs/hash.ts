import { createHash } from 'crypto'

import { createDateString, createJstDate, getNowJstDate } from './date'

/**
 * ハッシュ化
 * @param text テキスト
 * @returns ハッシュ値
 */
export function md5(text: string): string {
  return createHash('md5').update(text).digest('hex')
}

/**
 * ハッシュを検証
 * @param hash 検証するハッシュ値
 * @param timestamp タイムスタンプ
 * @param secret シークレット
 * @returns 結果
 */
export function verification(
  hash: string | undefined,
  timestamp: number | undefined,
  secret: string
): boolean {
  const now = getNowJstDate().getTime()

  if (!hash || !timestamp || now < timestamp) {
    return false
  }

  const date = createDateString(createJstDate(timestamp))

  return md5(date + secret) === hash
}
