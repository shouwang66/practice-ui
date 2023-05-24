// import  { Plugin, App } from 'vue'
import PInput from "./input";
import type { App } from '@vue/runtime-core'

//存在所有组件
const components = [PInput]
const install = (app: App):void => {
  components.forEach(e => {
    app.use(e)
  });
}

const practiceUi = {
  version: '0.0.1',
  install
}

export {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  // 以下是具体的组件列表
  PInput
}
export default practiceUi