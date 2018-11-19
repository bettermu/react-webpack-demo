import React ,{Component} from 'react'

import './styles/index.scss'
import './styles/index.less'
import './styles/index.styl'
import './styles/common.styl'



class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="wrapper">
        {this.props.children}
        
      </div>
    )
  }
}

export default App