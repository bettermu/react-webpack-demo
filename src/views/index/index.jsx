import React , {Component} from 'react'
import Tab from 'components/tab/index'

class Index extends Component {
  constructor(props){
    super(props)
    this.skipToNews = this.skipToNews.bind(this)
  }

  //跳转News
  skipToNews(){
    const {history} = this.props
    history.push('/news')
  }

  render(){
    
    return(
      <div>
        <div className="header">头部
          <img className="headerImg" src={require('../../img/avatar.jpg')} alt=""/>
          <button onClick={this.skipToNews}>点我跳转</button>
        </div>
        <div className="main"><Tab /></div>
        <div className="footer">脚部</div>
      </div>
    )
  }
}

export default Index