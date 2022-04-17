import axios from 'axios'

interface IImasAPIResponse {
  results: {
    bindings: { [variable: string]: { value: string } }[]
  }
}

/**
 * imasparql にクエリを投げる
 * @param query SPARQLクエリ
 * @returns 検索結果配列
 */
export async function fetchIdolData(query: string) {
  const trimedQuery = query.replace(/[\n\r|\s+]/g, ' ')

  const url = new URL('https://sparql.crssnky.xyz/spql/imas/query?output=json')
  url.searchParams.append('query', trimedQuery)

  try {
    const res = await axios.get<IImasAPIResponse>(url.href, { timeout: 5000 })
    return res.data.results.bindings
  } catch (err) {
    throw err
  }
}
