import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './share/http.js'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './scss/reset.css'
import './scss/global.scss'
Vue.config.productionTip = false
Vue.prototype.$http = http;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')