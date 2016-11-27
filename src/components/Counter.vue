<template>
  <div class='counter'>
    {{ count }}
    <input type='button' value='+' @click='incrementCounter(counterId)'/>
    <input type='button' value='-' @click='decrementCounter(counterId)'/>
    <input type='button' value='X' @click='removeCounter(counterId)' />
   </div>
</template>

<script>
  // import { mapActions } from 'vuex'
  // import { incrementCounter, decrementCounter, removeCounter } from '../actions'
  
  export default {
    name: 'counter',
    props: ['counterId', 'count']
    // methods: mapActions(['incrementCounter', 'decrementCounter', 'removeCounter'])
  }
</script>

<style lang="sass"></style>