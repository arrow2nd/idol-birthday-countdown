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
export function getBrandColor(brandName: string | undefined) {
  // ブランドカラーが存在しない場合、アイマス全体のイメージカラーを返す
  return (brandName && brandColors.get(brandName)) || 'FF74B8'
}
