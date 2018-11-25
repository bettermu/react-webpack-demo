import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './index.less'
import Connect from 'connect'

@Connect
class Swiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex:0,
    }
  }

  componentWillMount() {
    const { getBanner } = this.props
    getBanner().then(()=>{
      
      this._setWrapWidth()
      this._initSwiper()
      
    })
  }

  _initSwiper(){

    let scroll = new BScroll('.swiper-outwrap', {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop:true
      },
      //snapLoop: true,
      snapThreshold: 0.3,
      snapSpeed: 400,
    })

    this.setState({
      scrollObj:scroll
    })

    scroll.on('scrollEnd',()=>{
      let pageIndex = scroll.getCurrentPage().pageX
      //console.log(pageIndex)
      this.setState({
        activeIndex:pageIndex
      })
    })


  }

  

  componentDidMount() {

    

  }
  componentWillUpdate(){
    
  }


  _setWrapWidth() {
    let wrapWidth = 0
    let len = this.inner.children.length + 2
    let slideWidth = this.inner.children[0].clientWidth

    wrapWidth = slideWidth * len
    
    //console.log(this.inner.children[0].clientWidth)

    this.inner.style.width = wrapWidth + 'px'

  }

  render() {
    const banners = this.props.state.news.banner
    return (
      <div  className="swiper-outwrap">
        <div ref={(inner)=>{this.inner = inner}} className="swiper-wrap">
          {
            banners.map((item, i) => (
              <img key={i} src={item.picUrl} alt="" />
            ))
          }
        </div>
        <div className="dots">
          {
            banners.map((item,i)=>(
              <span key={i} className={this.state.activeIndex === i?'active':''}></span>
            ))
          }
        </div>
      </div>

    )
  }
}

export default Swiper