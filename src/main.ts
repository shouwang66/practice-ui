import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import practiceUI from "../packages/index";
import practiceUI from 'practing-ui'
import '../dist/style.css'

const app = createApp(App);
app.use(router)

app.use(practiceUI)
app.mount('#app')
