import type { App } from 'vue'
import PInput from './index.vue'

// const install = (app:App):void => {
//   app.component(PInput.name,PInput)
// }
// PInput.install = install
// // export default PInput
// export {
//   PInput
// } 

export default {
  install: (app: App): void => {
    app.component(PInput.name, PInput)
  }
}