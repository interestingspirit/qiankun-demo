const emptyAction = () => {
  console.error('这个action是空的')
}
class Actions {
  actions = {
    setGlobalState: emptyAction,
    onGlobalStateChange: emptyAction,
  }

  setActions(actions) {
    if (actions) {
      const { setGlobalState, onGlobalStateChange } = actions
      this.actions.setGlobalState = setGlobalState
      this.actions.onGlobalStateChange = onGlobalStateChange
    }
  }

  setGlobalState(...args) {
    return this.actions.setGlobalState(...args)
  }

  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args)
  }
}

const actions = new Actions()

export default actions