<template>
  <div style="float:left;">
    <canvas v-bind:width="width" v-bind:height="height" v-on:click="click"></canvas>
  </div>
</template>

<script>
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

      if (newFocus !== null) {
        this.drawROI(newFocus, {
          r: 0,
          g: 255,
          b: 0
        });
      }

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

    const rois = this.rois;
    for (let i = 0; i < rois.length; i++) {
      const color = i < 50 ? { r: 100, g: 100, b: 100 } : { r: 50, g: 50, b: 50 };
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
    },

    click () {
      // Time out here to give canvas element a chance to pick up the mouse
      // click and record its coordinates.
      window.setTimeout(() => {
        const mouse = this.img.click;

        // Find a match.
        const rois = this.rois;
        let i;
loop:
        for (i = 0; i < rois.length; i++) {
          for (let j = 0; j < rois[i].length; j++) {
            if (rois[i][j][0] === mouse.x && rois[i][j][1] === mouse.y) {
              break loop;
            }
          }
        }

        this.$store.commit('focus', i < 50 ? i : null);
      }, 0);
    }
  }
}
</script>
