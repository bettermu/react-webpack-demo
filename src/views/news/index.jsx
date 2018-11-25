import React , {Component} from 'react'
import Swiper from 'components/swiper'

class News extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div>我是news</div>
        <Swiper></Swiper>
      </div>
      
    )
  }
}

export default News