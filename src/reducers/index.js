import {combineReducers} from 'redux'

import * as news from './news'

export default combineReducers({
  ...news,
})