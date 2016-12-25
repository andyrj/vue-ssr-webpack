<template>
  <div id="app">
		<ul>
			<li><router-link to='/'>Home</router-link></li>
    	<li><router-link to='/counters'>Counters!</router-link></li>
    </ul>
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

<style lang="scss">
</style>
