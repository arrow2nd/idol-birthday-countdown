import type { Birth } from 'types/birth'

/**
 * タイムスタンプからJSTのDateを作成
 * @param timestamp タイムスタンプ
 * @return Dateオブジェクト (JST)
 */
export function createJstDate(timestamp: number): Date {
  // UTCからの日本時間の時差 (分)
  const jstTimeDiffMin = 9 * 60

  // 実行環境で生成したタイムスタンプ + 実行環境の時差 + JSTの時差 (ミリ秒)
  const jstTimeStamp =
    timestamp + (new Date().getTimezoneOffset() + jstTimeDiffMin) * 60 * 1000

  return new Date(jstTimeStamp)
}

/**
 * 現在のJSTのDateを取得
 * @return Dateオブジェクト
 */
export function getNowJstDate(): Date {
  return createJstDate(Date.now())
}

/**
 * お誕生日までの秒数を計算
 * @param date 基準の日付
 * @param birth お誕生日
 * @return 残り秒数
 */
export function calcSecondsToBirthday(date: Date, birth: Birth): number {
  const { month, day } = birth

  const baseYear = date.getFullYear()
  const baseMonth = date.getMonth() + 1
  const baseDay = date.getDate()

  // 既にお誕生日を過ぎているなら来年にする
  const birthdayYear =
    baseMonth > month || (baseMonth === month && baseDay >= day + 1)
      ? baseYear + 1
      : baseYear

  const nextBirthday = new Date(birthdayYear, month - 1, day, 0, 0, 0)

  return Math.floor((nextBirthday.getTime() - date.getTime()) / 1000)
}

/**
 * Dateオブジェクトから日付文字列を作成
 * @param date Dateオブジェクト
 * @returns 日付文字列
 */
export function createDateString(date: Date): string {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('')
}
