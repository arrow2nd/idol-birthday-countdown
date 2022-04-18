import cloudinary from 'cloudinary'

import { Idol } from 'types/idol'

import { site } from 'data/site'

import { calcSecondsToBirthday, createJstDate } from './date'
import { verification } from './hash'

/**
 * Cloudinary用に文字列をエンコード
 * @param text 文字列
 * @returns エンコードされた文字列
 */
export const encodeForCloudinary = (text: string) => {
  return encodeURIComponent(
    text.replace(/\,/g, '%2C').replace(/\//g, '%2F').replace(/!/g, '%21')
  )
}

/**
 * 残り秒数のOGP画像を作成
 * @param name アイドル名
 * @param seconds 秒数
 * @param color イメージカラー
 * @returns OGP画像URL
 */
function createCountdownOgpImageUrl(
  name: string,
  seconds: number,
  color: string
) {
  return cloudinary.v2.url('idol-birthday-countdown/countdown.png', {
    secure: true,
    sign_url: true,
    transformation: [
      {
        variables: [
          ['$idol', `!${encodeForCloudinary(name)}!`],
          ['$seconds', `!${seconds}!`],
          ['$color', `!rgb:${color.replace('#', '')}!`]
        ]
      },
      {
        transformation: ['idol-countdown']
      }
    ]
  })
}

/**
 * お誕生日のOGP画像を作成
 * @param name アイドル名
 * @param color イメージカラー
 * @returns OGP画像URL
 */
function createHpbOgbImageUrl(name: string, color: string) {
  return cloudinary.v2.url('idol-birthday-countdown/hpb.png', {
    secure: true,
    sign_url: true,
    transformation: [
      {
        variables: [
          ['$idol', `!${encodeForCloudinary(name)}!`],
          ['$color', `!rgb:${color.replace('#', '')}!`]
        ]
      },
      {
        transformation: ['idol-hpb']
      }
    ]
  })
}

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

  // OGP画像を生成
  const ogpImageUrl =
    seconds <= 0
      ? createHpbOgbImageUrl(idol.name, idol.color.hex)
      : createCountdownOgpImageUrl(idol.name, seconds, idol.color.hex)

  return ogpImageUrl
}
