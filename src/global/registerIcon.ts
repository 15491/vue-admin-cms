

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

/**
 * @description 注册element-plus图标
 * @param app vue实例
 */
export const registerIcon = (app: App<Element>) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
