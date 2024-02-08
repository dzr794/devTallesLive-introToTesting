
import { expect, test } from 'vitest'
import { sum } from '../../src/01-basic/sum';


test('adds 1 + 2 to equal 3', () => {
  
  //! No cumple con el AAA
  expect(sum(1, 2)).toBe(3)
})