import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import { LMap, LTileLayer, LMarker, LIcon, LWMSTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-wms-tile-layer', LWMSTileLayer)
Vue.component('l-marker', LMarker);
Vue.component('l-icon', LIcon);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
