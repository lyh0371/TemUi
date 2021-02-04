import { data } from './data.json'
let routers = []

data.forEach(item => {
  console.log('@TemUi/docs/' + item.fileName)
  routers.push({
    path: item.routePath,
    name: item.componentName,
    component: () => import('@TemUi/docs/' + item.fileName)
  })
})

export default routers
