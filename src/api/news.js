import axios from 'axios'

//获取轮播图数据
export const getBannerApi = ()=>{
  return axios.get('api/banner')
}