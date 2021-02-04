import { createApp } from 'vue'
import App from './App.vue'
import TemUi from 'TemUi'
import router from './router'
import '@TemUi/theme/relax.scss'
import demoBlock from '@TemUi/config/demoBlock.vue'
import '@/style/global.scss'
createApp(App)
  .use(TemUi)
  .use(router)
  .component('demo-block', demoBlock)
  .mount('#app')
