import axios from 'axios'


export const getHotDataApi = () => {
  return axios.get('api/search/hot')
}