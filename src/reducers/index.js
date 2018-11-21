import {combineReducers} from 'redux'

import * as news from './news'
import * as home from './home'

export default combineReducers({
  ...news,
  ...home,
})