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
      data: []
    },
    mutations: {
      setData (state, data) {
        state.data = data;
      },

      setROISize (state, dim) {
        state.roiPlot.width = dim.width;
        state.roiPlot.height = dim.height;
      }
    }
  });

  const rois = await json('rois.json');

  store.commit('setROISize', {
    width: 512,
    height: 512
  });

  store.commit('setData', rois);

  new Vue({
    store,
    render: h => h(App),
  }).$mount('#app')
}

main();
