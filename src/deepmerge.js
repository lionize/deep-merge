import { uniq, concat, mergeWith } from 'ramda'

export default function deepMerge(v1, v2) {
  if (Array.isArray(v1) && Array.isArray(v2)) {
    return uniq(concat(v1, v2))
  }

  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return mergeWith(deepMerge, v1, v2)
  }

  return v2
}
