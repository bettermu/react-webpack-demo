import {createStore,compose,applyMiddleware} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'
import DevTools from '../utils/devTools'

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  compose(applyMiddleware(thunk),DevTools.instrument())
)

export default configureStore()