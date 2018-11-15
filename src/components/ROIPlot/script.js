export default {
  name: 'ROIPlot',
  props: {
    rois: Array,
    width: Number,
    height: Number
  },
  mounted () {
    console.log('roni');

    const el = this.$el;
    const canvas = el.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(64, 150, 150)';
    ctx.fillRect(10, 10, 50, 50);
  }
}
