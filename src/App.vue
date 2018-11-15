<template>
  <div id="app">
    <ROIPlot v-bind:width="width" v-bind:height="height" v-bind:rois="rois" />
  </div>
</template>

<script>
import ROIPlot from './components/ROIPlot/'

export default {
  name: 'app',
  components: {
    ROIPlot
  },
  data () {
    return {
      width: 512,
      height: 512,
      rois: [2, 3, 4, 5]
    };
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
