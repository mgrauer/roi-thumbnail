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
    },

    focus () {
      return this.$store.state.focus;
    }
  },
  watch: {
    focus: function (newFocus, oldFocus) {
      if (oldFocus !== null) {
        this.drawROI(oldFocus, {
          r: 100,
          g: 100,
          b: 100
        });
      }

      this.drawROI(newFocus, {
        r: 0,
        g: 255,
        b: 0
      });

      this.img.update();
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

    for (let i = 0; i < 50; i++) {
      const color = {
        r: 100,
        g: 100,
        b: 100
      };
      this.drawROI(i, color, false);
    }

    this.img.update();
  },

  methods: {
    drawROI (which, color, update) {
      const rois = this.rois;
      for (let j = 0; j < rois[which].length; j++) {
        this.img.setPixel(rois[which][j][0], rois[which][j][1], {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a,
          update: false
        });
      }

      if (update) {
        this.img.update();
      }
    }
  }
}
