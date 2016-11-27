<template>
  <div id="app">
    <router-link to='/'></router-link>
    <router-link to='/counters'>Counters!</router-link>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
  @import 'bourbon';
  @import 'neat';
</style>
