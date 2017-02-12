import test from 'ava'
import dm from '../src/deepmerge'

test('concats two arrays', t => {
  const res = dm([1], [2])
  t.deepEqual(res, [1, 2])
})

test('removes non-unique items from arrays', t => {
  const res = dm([1, 2], [2, 3])
  t.deepEqual(res, [1, 2, 3])
})

test('merges two objects', t => {
  const res = dm({ id: 1 }, { name: 'Mark' })
  t.deepEqual(res, { id: 1, name: 'Mark' })
})

test('deeply merges two objects', t => {
  const res = dm({ ids: [1, 2] }, { ids: [2, 3] })
  t.deepEqual(res, { ids: [1, 2, 3] })
})

test('returns the second of two values', t => {
  let res = dm('a', 1)
  t.is(res, 1)
})
