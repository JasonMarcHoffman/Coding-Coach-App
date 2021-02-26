import { createStore } from 'vuex'

import coachesModules from './modules/coaches/index.js'
import requestModules from './modules/requests/index.js'

const store = createStore({
  modules: {
    // the keys here (coaches, requests) are important for namespacing
    coaches: coachesModules,
    requests: requestModules
  }
})

export default store