import Vue from 'vue'
import * as path from 'path'

const files = require.context('../components/common', true, /\.vue$/)
const components = {}

files.keys().forEach(key => {
  const ext = path.extname(key)
  const componentName = path.basename(key, ext)
  components[componentName] = files(key).default
})

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
