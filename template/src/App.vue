<template>
  <div id="app">
    <router-link to='/'>Home</router-link>
    <router-link to='/counters'>Counters!</router-link>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'SSR Vue',
    // all titles will be injected into this template
    titleTemplate: '%s | SSR Vue'
  }
}
</script>

<style lang="sass">
  @import 'bourbon';
  @import 'neat';
</style>
