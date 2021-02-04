const dem = require.context('../../tem-ui/docs', false, /\.md$/)
const list = dem.keys()

let routers = []

list.forEach(fileName => {
  const name = fileName.slice(2, fileName.length - 3).split('.')
  routers.push({
    path: name[0].toLowerCase(),
    name: name[0],
    title: name[1],
    component: () => import('@TemUi/docs/' + name[0] + '.' + name[1] + '.md')
  })
})

// import('@TemUi/docs/' + name[0] + name[1] + '.md')
export default routers
