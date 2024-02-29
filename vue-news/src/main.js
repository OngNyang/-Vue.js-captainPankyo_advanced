import { createApp } from 'vue'
// import Vue from 'vue'
// import Vuex from 'vuex';
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';

// createApp(App).mount('#app')

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(Vuex);
app.mount('#app');


// Vue.config.productionTip = false

// new Vue({
//     render: h => h(App),
//     router,
//    store,
// }).$mount('#app')