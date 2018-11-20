<template>
  <div style="float:left;">
    <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg"></svg>
  </div>
</template>

<script>
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { line as d3line } from 'd3-shape';

// Compute the range of all Dff values.
function minmax (data) {
  // First compute the min/max of each sequence.
  const minmaxes = data.map(d => [Math.min.apply(null, d), Math.max.apply(null, d)]);

  // Then get the min-min and the max-max.
  return [
    Math.min.apply(null, minmaxes.map(d => d[0])),
    Math.max.apply(null, minmaxes.map(d => d[1]))
  ];
}

export default {
  name: 'DffPlot',
  computed: {
    dff () {
      return this.$store.state.dff;
    },
    focus () {
      return this.$store.state.focus;
    }
  },
  watch: {
    focus (focus) {
      select(this.$el)
        .selectAll('path')
        .each(function (d, i) {
          if (i === focus) {
            select(this)
              .attr('stroke', 'green')
              .attr('stroke-width', 3);
          } else {
            select(this)
              .attr('stroke', 'black')
              .attr('stroke-width', 1.5);
          }
        });
    }
  },
  mounted () {
    // Collect the first 50 traces and their value range.
    const data = this.dff;
    const range = minmax(data);

    // Create scales for ploting the line charts.
    const x = scaleLinear()
      .domain([0, data[0].length])
      .range([0, 512]);

    const y = scaleLinear()
      .domain([range[0], range[1]])
      .range([512 / 50, -512 / 50]);

    // Create a d3 line generator.
    const line = d3line()
      .x((d, i) => x(i))
      .y(y);

    // Construct a series of g elements for holding each plot.
    const svg = select(this.$el)
      .select('svg');

    const that = this;
    const groups = svg.selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(0, ${i * 512 / 50})`)
      .on('mouseover', function (d, i) {
        that.$store.commit('focus', i);
      });

    groups.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 512)
      .attr('height', 512 / 50)
      .attr('stroke', 'none')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('pointer-events', 'fill');

    groups.selectAll('path')
      .data(d => [d])
      .enter()
      .append('path')
      .attr('stroke', 'black')
      .attr('stroke-width', 1.5)
      .attr('fill', 'none')
      .attr('d', line);
  }
};

</script>
