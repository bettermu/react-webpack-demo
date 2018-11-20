import {handleActions} from 'redux-actions'

const state = {
  number:0
}

export const news = handleActions({
  'ADD_NUMBER':(state,action)=>{
    return {
      ...state,
      number:state.number+action.payload
    }
  }
},state)