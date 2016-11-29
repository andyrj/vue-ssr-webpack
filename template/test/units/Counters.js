import Vue from 'vue'
import Vuex from 'vuex'
import Counters from '../../src/views/Counters.vue'
import store from '../../src/store'


describe('Counters View', function() {
	Vue.use(Vuex)

	it('Counters.testMe should return 1', function() {
		expect(Counters.methods.testMe()).to.equal(1)
	})

	it('should place a div with class=counters on dom', function() {
		let app = new Vue({
			template: `<counters></counters>`,
			components: {
				Counters
			},
			store
		}).$mount('#app')
		var element =  document.getElementsByClassName('counters');
		//console.log(element)
		// console.log(html)
		// console.log(document)
		expect(element).to.not.equal('undefined')
		expect(element).to.not.equal(null)
	})
})

