import { expect } from 'chai'
import reduce from './reduce'

it('reduce should be a function', () => {
    expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
    const before = (reduce([1, 2, 3], (acc, item) => acc + item, 0))
    const after = 6
    expect(before).to.be.equal(after)
})

it('reduce([2,3,4], (acc, item) => acc + item, 0) should return 9', () => {
    const before = (reduce([2, 3, 4], (acc, item) => acc + item, 0))
    const after = 9
    expect(before).to.be.equal(after)
})