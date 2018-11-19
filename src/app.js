import React ,{Component} from 'react'

import './styles/index.scss'
import './styles/index.less'
import './styles/index.styl'
import './styles/common.styl'

import Tab from 'components/tab/index'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="wrapper">
        <div className="header">头部
          <img className="headerImg" src={require('./img/avatar.jpg')} alt=""/>
        </div>
        <div className="main">内容</div>
        <div className="footer">脚部</div>
        <Tab />
      </div>
    )
  }
}

export default App