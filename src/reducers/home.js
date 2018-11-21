import {handleActions} from 'redux-actions'

const state = {
  hot:[]
}

export const home = handleActions({
  'GET_HOT_DATA':(state,action)=>{
    state.hot = action.payload
    return {
      ...state
    }
  }
},state)