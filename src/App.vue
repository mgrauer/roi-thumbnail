<template>
  <div id="app">
    <ROIPlot />
    <DffPlot />
  </div>
</template>

<script>
import DffPlot from '@/components/DffPlot';
import ROIPlot from '@/components/ROIPlot'

export default {
  name: 'app',
  components: {
    DffPlot,
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
