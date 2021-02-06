import { createStore } from 'redux'

const initialState = {}
const reducer = (state = initialState, actions) => {
  const { type, payload } = actions
  switch (type) {
    case 'SET_NAME':
      return {
        ...state,
        name: payload
      }
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store