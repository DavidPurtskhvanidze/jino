var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

import Vue from 'vue'
import VueFullPage from 'vue-fullpage'

Vue.use(VueFullPage);

new Vue({
    el: '#full',
    render: h => h(App)
});