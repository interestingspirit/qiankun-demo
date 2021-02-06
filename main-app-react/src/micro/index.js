import NProgress from 'nprogress'
import { start, registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import shared from '../shared'

registerMicroApps([
  {
    name: 'MicroAppVue',
    entry: '//localhost:3100',
    container: '#container',
    activeRule: '/vue',
    props: {
      shared
    }
  },
  {
    name: 'MicroAppReact',
    entry: '//localhost:3200',
    container: '#container',
    activeRule: '/react',
    props: {
      shared
    }
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

addGlobalUncaughtErrorHandler(event => {
  console.error(event)
})

export default start