import Counters from '../../src/views/Counters.vue'

describe('Counters View', function() {
	it('Counters.testMe should return 1', function() {
		expect(Counters.methods.testMe()).to.equal(1)
	})
})

