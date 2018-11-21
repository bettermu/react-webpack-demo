import {combineReducers} from 'redux'

import * as news from './news'
import * as home from './home'
import * as common from './common'

export default combineReducers({
  ...news,
  ...home,
  ...common,
})