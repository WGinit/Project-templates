<template>
  <div id="app">
    <miniPannel></miniPannel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/index.vue'

@Component({
  components: {
    miniPannel: Home
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/iconfont.scss';
@import './styles/base.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #F7F8FB;
}
</style>
