import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);

async function json (url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main () {
  const store = new Vuex.Store({
    state: {
      roiPlot: {
        width: 0,
        height: 0
      },
      rois: [],
      dff: [],
      focus: null
    },
    mutations: {
      setData (state, { which, data }) {
        state[which] = data;
      },

      setROISize (state, dim) {
        state.roiPlot.width = dim.width;
        state.roiPlot.height = dim.height;
      },

      focus (state, which) {
        state.focus = which;
      }
    }
  });

  // Grab the ROIs and Dff data parallel-asynchronously.
  const roisReq = json('rois.json');
  const dffReq = json('dff.json');
  const [rois, dff] = [await roisReq, await dffReq];

  store.commit('setROISize', {
    width: 512,
    height: 512
  });

  store.commit('setData', {
    which: 'rois',
    data: rois
  });

  store.commit('setData', {
    which: 'dff',
    data: dff
  });

  new Vue({
    store,
    render: h => h(App),
  }).$mount('#app')
}

main();
