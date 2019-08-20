<template>
  <div id="app">
    <div id="nav">
      <!-- <v-header/> -->
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    // 'v-header': Header
  }
}
</script>

<style>
@import './assets/styles/variables.css';
/* @import './assets/styles/fonts.css'; */
@import './assets/styles/typography.css';
@import './assets/styles/base.css';
@import './assets/styles/utils.css';
#app {
  font-family: 'Noto Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
</style>
