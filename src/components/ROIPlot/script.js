import CanvasImage from './CanvasImage';

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
      return this.$store.state.rois;
    }
  },
  mounted () {
    const el = this.$el;
    const canvas = el.getElementsByTagName('canvas')[0];

    this.img = new CanvasImage(canvas, {
      width: this.width,
      height: this.height
    });

    this.img.clear(0, 0, 0, 255);

    const rois = this.rois;
    for (let i = 0; i < rois.length; i++) {
      for (let j = 0; j < rois[i].length; j++) {
        this.img.setPixel(rois[i][j][0], rois[i][j][1], {
          g: 255,
          update: false
        });
      }
    }

    this.img.update();
  }
}
