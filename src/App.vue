<template>
  <div id="app">
    <ROIPlot />
  </div>
</template>

<script>
import ROIPlot from './components/ROIPlot/'

export default {
  name: 'app',
  components: {
    ROIPlot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
