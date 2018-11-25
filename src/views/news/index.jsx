import React , {Component} from 'react'
import Swiper from 'components/swiper'
import Connect from 'connect'

@Connect
class News extends Component {
  constructor(props){
    super(props)
  }

  

  render(){
    
    return (
      <div>
        <div>我是news</div>
        <Swiper>
        </Swiper>
      </div>
      
    )
  }
}

export default News