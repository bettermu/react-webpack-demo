

import {createAction} from 'redux-actions'
import {getBannerApi} from 'api/news'

export const addNumber=createAction('ADD_NUMBER')

export const getBanner = ()=> dispatch => {
  return new Promise((resolve,reject)=>{
    dispatch(createAction('SHOW_LOADING')(true))
    getBannerApi().then((res)=>{
      dispatch(createAction('HIDE_LOADING')(false))
      dispatch(createAction('GET_BANNER')(res.data.banners))
      resolve()
    })
  })
}