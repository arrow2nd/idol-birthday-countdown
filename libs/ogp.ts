import cloudinary from 'cloudinary'

import { Idol } from 'types/idol'

import { site } from 'data/site'

import { calcSecondsToBirthday, createJstDate } from './date'
import { verification } from './hash'

/**
 * OGP画像URLを作成
 * @param idol アイドルデータ
 * @param timestamp タイムスタンプ
 * @param hash ハッシュ値
 * @param secret シークレット
 * @returns OGP画像URL
 */
export function createOgpImageUrl(
  idol: Idol,
  timestamp: number,
  hash: string,
  secret: string
): string {
  const { defaultOgpImageUrl } = site

  // ハッシュ値からタイムスタンプが正しいか検証
  if (!verification(hash, timestamp, secret)) {
    return defaultOgpImageUrl
  }

  // タイムスタンプからお誕生日までの秒数を算出
  const jstDate = createJstDate(timestamp)
  const seconds = calcSecondsToBirthday(jstDate, idol.birth)

  console.log('[OGP] 残り秒数: ' + seconds)

  // TODO: OGP画像を生成
  return ''
}
