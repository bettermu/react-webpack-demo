import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './index.less'
import Connect from 'connect'

@Connect
class Swiper extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { getBanner } = this.props
    getBanner().then(()=>{
      this.setWrapWidth()
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
    })
  }

  componentDidMount() {
  }
  componentWillUpdate(){
    
  }


  setWrapWidth() {
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
      </div>

    )
  }
}

export default Swiper