import type { ParsedUrlQuery } from 'node:querystring'

type ParsedQuery = {
  id: string | undefined
  hash: string
  timestamp: number
}

function getParam(param: string | string[] | undefined) {
  return Array.isArray(param) ? undefined : param
}

/**
 * URLクエリをパース
 * @param query URLクエリ
 * @returns ID, ハッシュ, 秒数
 */
export function parseQuery(query: ParsedUrlQuery): ParsedQuery {
  const timestampStr = getParam(query.t)

  return {
    id: getParam(query.id),
    hash: getParam(query.h) || '',
    timestamp: timestampStr ? parseInt(timestampStr) : 0
  }
}
