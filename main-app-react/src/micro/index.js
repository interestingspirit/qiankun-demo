import NProgress from 'nprogress'
import { start, registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'

registerMicroApps([
  {
    name: 'MicroAppVue',
    entry: '//localhost:3100',
    container: '#container',
    activeRule: '/vue'
  },
  {
    name: 'MicroAppReact',
    entry: '//localhost:3200',
    container: '#container',
    activeRule: '/react'
  },
], {
  beforeLoad(app) {
    NProgress.start()
    console.log('before load', app.name)
    return Promise.resolve()
  },
  afterMount(app) {
    NProgress.done()
    console.log('after mount', app.name)
    return Promise.resolve()
  }
})

export default start