import {createAction} from 'redux-actions'
import axios from 'axios'
export const getHotData = () => dispatch => {
  return new Promise((resolve,reject)=>{
    dispatch(createAction('SHOW_LOADING')(true))
    axios.get('api/search/hot').then(res=>{
      console.log(res.data)
      dispatch(createAction('HIDE_LOADING')(false))
      dispatch(createAction('GET_HOT_DATA')(res.data.result.hots))
    })
  })
}