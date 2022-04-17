import { writeFileSync } from 'fs'

import { Idol } from 'types/idol'

import { getBrandColor } from './color'
import { fetchIdolData } from './fetch'

/** SPARQLクエリ (全アイドルの誕生日を取得) */
const query = `
PREFIX schema: <http://schema.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT DISTINCT ?d ?name ?birthdate ?brand ?color
WHERE {
  ?d rdf:type imas:Idol;
    rdfs:label ?name;
    schema:birthDate ?birthdate;
    imas:Brand ?brand.
    OPTIONAL { ?d imas:Color ?color. }
  }
ORDER BY ?name
`

;(async () => {
  // 秋月涼さんが重複するので、876の方を除外
  const data = (await fetchIdolData(query)).filter(
    (e) => !e.d.value.endsWith('Akizuki_Ryo_876')
  )

  const idols: Idol[] = data.map((e): Idol => {
    const id = e.d.value.match(/detail\/(.+)$/)![1].toLowerCase()
    const color = `#${e.color?.value || getBrandColor(e.brand.value)}`
    const birth = e.birthdate.value.match(/--(?<month>\d+)-(?<day>\d+)/)!

    return {
      id,
      name: e.name.value,
      color,
      birth: {
        month: parseInt(birth.groups!.month),
        day: parseInt(birth.groups!.day)
      }
    }
  })

  const json = JSON.stringify(idols, null, '  ')
  const result = `import { Idol } from 'types/idol'\n\nexport const idols: Idol[] = ${json}`

  writeFileSync('./data/idols.ts', result)

  console.log('[SUCCESS]')
})()
