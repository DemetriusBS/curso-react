import { expect } from 'chai'
import reverse from './reverse-recursivo'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

it('reverse([1]) should return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1])
})

it('reverse([1,2]) should return [2,1]', () => {
    expect(reverse([1, 2])).to.be.deep.equal([2, 1])
})

it('reverse(["Demetrius", "Batista"]) should return ["Batista", "Demetrius"]', () => {
    expect(reverse(['Demetrius', 'Batista'])).to.be.deep.equal(['Batista', 'Demetrius'])
})