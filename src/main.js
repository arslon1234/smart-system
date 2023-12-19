import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import "./tailwind.css"
import "./assets/style/index.css";
import validation from "./plugins/vee-validate";
import VueTheMask from "vue-the-mask"

const app = createApp(App)


app
    .use(router)
    .use(createPinia())
    .use(VueTheMask)
    .use(validation)
    .mount('#app')

