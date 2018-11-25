import {createAction} from 'redux-actions'
import {getHotDataApi} from 'api/home'
export const getHotData = () => dispatch => {
  return new Promise((resolve,reject)=>{
    dispatch(createAction('SHOW_LOADING')(true))

    getHotDataApi().then(res=>{
      console.log(res.data)
      dispatch(createAction('HIDE_LOADING')(false))
      dispatch(createAction('GET_HOT_DATA')(res.data.result.hots))
    })
  })
}