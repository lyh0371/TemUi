import pkg from '../../package.json'

import Tooltip from './tooltip/index'
import Switch from './switch/index'
import Button from './Button/index'

const components = [Tooltip, Switch, Button]

const compList = require.context('./', true, /\.vue$/)

const comp = compList.keys()

const install = function(app) {
  components.forEach(component => {
    app.component('x' + component.name, component)
    app.component('t' + component.name, component)
  })

  // comp.forEach(item => {
  //   const itemName = item.split('/')[1]
  //   const compName = itemName.replace(itemName[0], itemName[0].toUpperCase())

  //   console.log(compName)
  //   app.component('t' + compName, compName)
  // })

  applyOptions(app)
}

function applyOptions(app) {}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: pkg.version,
  install,
  ...components
}
