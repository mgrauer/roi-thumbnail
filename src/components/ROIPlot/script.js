export default {
  name: 'ROIPlot',
  computed: {
    width () {
      return this.$store.state.roiPlot.width;
    },

    height () {
      return this.$store.state.roiPlot.height;
    },

    rois () {
      return this.$store.state.data;
    }
  },
  mounted () {
    const el = this.$el;
    const canvas = el.getElementsByTagName('canvas')[0];

    const ctx = canvas.getContext('2d');

    const img = ctx.createImageData(this.width, this.height);
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const idx = i * this.width + j;

        img.data[4 * idx + 0] = 0;
        img.data[4 * idx + 1] = 0;
        img.data[4 * idx + 2] = 0;
        img.data[4 * idx + 3] = 255;
      }
    }

    const rois = this.rois;

    for (let i = 0; i < rois.length; i++) {
      for (let j = 0; j < rois[i].length; j++) {
        const x = rois[i][j][0];
        const y = rois[i][j][1];
        const idx = x * this.width + y;

        img.data[4 * idx + 1] = 255;
      }
    }

    ctx.putImageData(img, 0, 0);
  }
}
