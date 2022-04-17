import cloudinary from 'cloudinary'

import { Idol } from 'types/idol'

import { calcSecondsToBirthday, createJstDate } from './date'

/**
 * OGP画像URLを取得
 * @param idol アイドルデータ
 * @param timestamp タイムスタンプ
 * @param hash ハッシュ値
 * @returns OGP画像URL
 */
export function getOgpImageUrl(
  idol: Idol,
  timestamp: number,
  hash: string
): string {
  // TODO: ハッシュ値からタイムスタンプが正しいか検証

  // タイムスタンプからお誕生日までの秒数を算出
  const jstDate = createJstDate(timestamp)
  const seconds = calcSecondsToBirthday(jstDate, idol.birth)

  console.log('[OGP] 残り秒数: ' + seconds)

  // TODO: OGP画像を生成
  return ''
}
