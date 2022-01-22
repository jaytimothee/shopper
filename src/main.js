import {createApp} from 'vue';
import App from './App.vue'
import store from './store'
import {applyPolyfills, defineCustomElements} from "h8k-components/loader";

applyPolyfills()
    .then(() => {
        defineCustomElements()
    })

const app = createApp(App)
app.use(store)
app.mount('#app')
