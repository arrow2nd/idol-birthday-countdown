const brandColors = new Map([
  ['istVision', 'F34F6D'],
  ['765AS', 'F34F6D'],
  ['DearlyStars', 'FF74B8'],
  ['MillionLive', 'FFC30B'],
  ['SideM', '0FBE94'],
  ['CinderellaGirls', '2681C8'],
  ['ShinyColors', '8dBBFF'],
  ['Other', 'FF74B8']
])

/**
 * ブランドのイメージカラーを取得
 * @param brandName ブランド名
 * @returns カラーコード
 */
export function getBrandColor(brandName: string | undefined): string {
  // ブランドカラーが存在しない場合、アイマス全体のイメージカラーを返す
  return (brandName && brandColors.get(brandName)) || 'FF74B8'
}

/**
 * 白っぽい色かどうか
 * @param color カラーコード
 * @return 結果
 */
export function isWhitishColor(color: string): boolean {
  const [r, g, b] = color.match(/[0-9A-Fa-f]{2}/g)!.map((v) => parseInt(v, 16))

  // グレースケールに変換
  const grayscale = Math.floor((r * 0.299 + g * 0.587 + b * 0.114) / 2.55)

  return grayscale > 65
}
