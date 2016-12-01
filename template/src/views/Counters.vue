<template>
  <div class='counters'>
    <h1>Counters!</h1>
    <input type="button" value="Add Counter" @click='addCounter' />
    <counter v-for="(counter, index) in counters" :counter-id="index" :count="counter" track-by="index"></counter>
  </div>
</template>

<script>
  import counter from '../components/Counter.vue'
  import { mapActions } from 'vuex'
	import assign from 'lodash.assign'

  export default {
    name: 'counters',
    metaInfo: {
      title: 'Counters'
    },
    computed: {
      counters() {
        return this.$store.state.counters
      }
    },
    methods: assign(mapActions(['addCounter']), { testMe: function(){ return 1} }),
    components: {
      counter
    }
  }
</script>

<style lang="scss"></style>