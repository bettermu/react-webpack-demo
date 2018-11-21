import {handleActions} from 'redux-actions'

const state = {
  loading:false
}

export const common = handleActions({
  SHOW_LOADING:(state,action)=>{
    //state.loading = true
    state.loading = action.payload
    return {...state}
  },
  HIDE_LOADING:(state,action)=>{
    //state.loading = false
    state.loading = action.payload
    return {...state}
  }
},state)