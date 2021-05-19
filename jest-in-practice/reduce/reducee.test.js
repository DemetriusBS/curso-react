import { expect } from 'chai'
import reducee from './reducee'

it('reducee should be a function', () => {
    expect(reducee).to.be.a('function')
})

it('reducee([1,2,3], (acc, item) => acc + item, 0) should return 6', () => {
    let before = reducee([1, 2, 3], (acc, item) => acc + item, 0)
    let after = 6
    expect(before).to.be.equal(after)
})

it('reducee([4,5,6], (acc, item) => acc + item, 0) should return 15', () => {
    let before = reducee([4, 5, 6], (acc, item) => acc + item, 0)
    let after = 15
    expect(before).to.be.equal(after)
})

it('reducee([4,5,6], (acc, item) => acc + item) should return 15', () => {
    let before = reducee([4, 5, 6], (acc, item) => acc + item)
    let after = 15
    expect(before).to.be.equal(after)
})

it('reducee([1,2], (acc, item, index) => acc + index, 0) should return 1', () => {
    let before = reducee([1, 2], (acc, item, index) => acc + index, 0)
    let after = 1
    expect(before).to.be.equal(after)
})

it('reducee([1,2], (acc, item, index, arr) => acc + arr[index], 0) should return 3', () => {
    let before = reducee([1, 2], (acc, item, index, arr) => acc + arr[index], 0)
    let after = 3
    expect(before).to.be.equal(after)
})
