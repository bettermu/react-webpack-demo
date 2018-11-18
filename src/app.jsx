import React ,{Component} from 'react'

import './styles/index.scss'
import './styles/index.less'
import './styles/index.styl'

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="wrapper">
        <div className="header">头部</div>
        <div className="main">内容</div>
        <div className="footer">脚部</div>
      </div>
    )
  }
}

export default App