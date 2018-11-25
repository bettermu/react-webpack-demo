import React, { Component } from 'react'
import BScroll from 'better-scroll'
import './index.less'
import Connect from 'connect'

@Connect
class Swiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      interval: 3000,
      scrollObj: null,
      timer: null
    }
  }

  componentWillMount() {
    const { getBanner } = this.props
    getBanner().then(() => {

      this._setWrapWidth()
      this._initSwiper()
      this._play(this.state.activeIndex)

    })
  }

  _initSwiper() {

    let scroll = new BScroll('.swiper-outwrap', {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: true,
      snapLoop: true,
      snapThreshold: 0.3,
      snapSpeed: 400,
    })

    this.setState({
      scrollObj: scroll
    })

    scroll.on('scrollEnd', () => {
      let pageIndex = scroll.getCurrentPage().pageX
      //console.log(pageIndex)
      pageIndex -= 1
      this.setState({
        activeIndex: pageIndex
      }, () => {
        //console.log()
        this._play(this.state.activeIndex)
      })


    })

    scroll.on('beforeScrollStart', () => {
      //console.log(11)
      clearTimeout(this.state.timer)
    })

  }

  _play(activeIndex) {
    //console.log(activeIndex)

    let pageIndex = activeIndex + 1
    pageIndex += 1

    this.setState({
      timer: setTimeout(() => {
        this.state.scrollObj.goToPage(pageIndex, 0, 400)
      }, this.state.interval)
    })



  }

  componentDidMount() {

    setTimeout(() => {

    }, 20)

  }
  componentWillUpdate() {

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
      <div className="swiper-outwrap">
        <div ref={(inner) => { this.inner = inner }} className="swiper-wrap">
          {
            banners.map((item, i) => (
              <img key={i} src={item.picUrl} alt="" />
            ))
          }
        </div>
        <div className="dots">
          {
            banners.map((item, i) => (
              <span key={i} className={this.state.activeIndex === i ? 'active' : ''}></span>
            ))
          }
        </div>
      </div>

    )
  }
}

export default Swiper