import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers, {value: 0, imageNumber: 0}, window.devToolsExtension && window.devToolsExtension())

export default store
