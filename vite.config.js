import { defineConfig } from 'vite'
//让vite可以处理.vue结尾的文件
//let the vite could address the file which end with ".vue"
import vue from '@vitejs/plugin-vue'
//defineConfig are used to set attributes of a config object,so it this method will return a config object.
//defineConfig被用作定义某一配置对象的属性.即他会返回一个config对象 
// https://vitejs.dev/config/
export default defineConfig({
  //plugins用来declare需要用到的plugins,这里使用的是来自@vitejs/plugin-vue的vue的plugin
  //plugins is used to declare the plugins which will be used in vite,in here the vue plugin are used which come from @vitejs/plugin-vue .
  plugins: [vue()],
}
)
