import Vue from 'vue'
import store from '../../src/store'
// import { expect, assert } from 'chai'

describe('Store', function() {
	let counters = store.state.counters

	it('should have an array of counters', function(){
		assert(Array.isArray(counters))
	})

	it('addCounter should add a counter to the counters list', function(){
		let len = counters.length
		store.dispatch('addCounter')
		expect(counters.length - len).to.equal(1)
	})

	it('removeCounter should remove a counter from the counters list', function(){
		store.dispatch('addCounter')
		let len = counters.length
		store.dispatch('removeCounter', counters.length - 1)
		expect(len - counters.length).to.equal(1)
	})

	it('incrementCounter should increment a counter by 1', function(){
		store.dispatch('addCounter')
		let index = counters.length - 1
		let val = counters[index]
		store.dispatch('incrementCounter', index)
		expect(counters[index]).to.equal(val + 1)
	})

	it('decrementCounter should decrement a counter by 1', function(){
		store.dispatch('addCounter')
		let index = counters.length - 1
		let val = counters[index]
		store.dispatch('decrementCounter', index)
		expect(counters[index]).to.equal(val - 1)
	})
})