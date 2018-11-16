<template>
  <div>
    <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg"></svg>
  </div>
</template>

<script>
import { select } from 'd3-selection';

export default {
  name: 'DffPlot',
  computed: {
  },
  mounted () {
    const svg = select(this.$el)
      .select('svg');

    svg.append('circle')
      .attr('cx', 10)
      .attr('cy', 10)
      .attr('r', 5)
      .style('fill', 'red');
  }
};

</script>
