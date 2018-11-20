import {createStore,compose,applyMiddleware} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  compose(applyMiddleware(thunk))
)

export default configureStore()