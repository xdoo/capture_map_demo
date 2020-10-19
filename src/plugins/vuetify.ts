import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import Dummy from "@/components/icons/Dummy.vue"

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      dummy: {
        component: Dummy,
        props: {
          name: "dummy"
        }
      }
    }
  }
});