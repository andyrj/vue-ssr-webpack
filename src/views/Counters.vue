<template>
  <div class='counters'>
    <h1>Counters!</h1>
    <input type="button" value="Add Counter" @click='addCounter' />
    <counter v-for="(counter, index) in counters" :counter-id="index" :count="counter" track-by="index"></counter>
  </div>
</template>

<script>
  import counter from '../components/Counter.vue'
  //import { addCounter } from '../actions'
  //import { mapActions } from 'vuex'

  export default {
    name: 'counters',
    computed: {
      counters() {
        return this.$store.state.counters
      }
    },
    //methods: mapActions(['addCounter']),
    components: {
      counter
    }
  }
</script>

<style></style>