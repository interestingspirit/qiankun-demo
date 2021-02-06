import store from '../store'

class Shared {
  getName() {
    const state = store.getState()
    return state.name || ''
  }

  setName(name) {
    const { dispatch } = store
    dispatch({
      type: 'SET_NAME',
      payload: name
    })
  }
}

const shared = new Shared()

export default shared