import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from '../src/vuex/store'

// Vuex 시작 / store --> 모든 컴포넌트들이 store.js를 참조할 수 있게된다.

createApp(App)
    .use(router)
    .use(store)
    .mount("#app");
