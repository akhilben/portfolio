import Vue from 'vue';
import Vuex from 'vuex';
import VueCookie from 'vue-cookie';

import router from './router';
import App from '@Component/App/App.vue';
import VuexStoreConfig from './vuex/store';

import { enableAnalytics, analyticsKey, disableAnalyticsInDebug } from './config';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

import VueObserveVisibility from 'vue-observe-visibility';

library.add(
  faBars,
  faEnvelope,
  faTimes,
  faAngleDoubleDown,
  faArrowCircleRight,
  faArrowCircleLeft,
  faGithub,
  faLinkedin,
  faFacebook,
  faAngular,
  faHtml5,
  faCss3,
  faSass,
  faSketch,
  faFigma,
  faBootstrap,
  faVuejs,
  faReact,
  faNodeJs,
  faGitAlt
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

if (enableAnalytics) {
  const VueAnalytics = require('vue-analytics').default;
  Vue.use(VueAnalytics, {
    id: analyticsKey,
    router,
    debug: {
      enabled: process.env.NODE_ENV !== 'production',
      sendHitTask: process.env.NODE_ENV === 'production' || !disableAnalyticsInDebug,
    },
  });
}

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueCookie);
Vue.use(VueObserveVisibility);

const store = new Vuex.Store(VuexStoreConfig);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
