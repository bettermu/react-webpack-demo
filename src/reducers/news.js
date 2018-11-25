import {handleActions} from 'redux-actions'

const state = {
  number:0,
  banner:[]
}

export const news = handleActions({
  'ADD_NUMBER':(state,action)=>{
    return {
      ...state,
      number:state.number+action.payload
    }
  },
  'GET_BANNER':(state,action)=>{
    return {
      ...state,
      banner:action.payload
    }
  }
},state)