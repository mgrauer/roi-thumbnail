<template>
  <div id="app">
    <DffPlot />
    <ROIPlot />

    <input type="radio" id="selection" value="selection" v-model="mode">
    <label for="selection">Selection Mode</label>
    <br>
    <input type="radio" id="time" value="time" v-model="mode">
    <label for="time">Time Mode</label>
    <br>
    <span> {{ mode }} </span>

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
  },
  watch: {
    mode: function (mode) {
      console.log(mode);
    }
  },
  data () {
    return {
      mode: 'selection'
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
