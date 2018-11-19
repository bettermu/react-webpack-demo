import React,{Component} from 'react'
import './index.styl'

class Tab extends Component {
  constructor(props){
    super(props)
    //this.handleChange = this.handleChange.bind(this)
    this.state =  {
      data:[{name:'哈哈'},{name:'呵呵'},{name:'嘿嘿'}],
      activeIndex:0
    }
    
  }

  handleChange(index){
    this.setState({
      activeIndex:index
    })
  }
  

  render(){
    const {data,activeIndex} = this.state
    return(
      <div className="tab-wrap">
        <ul>
          {
            data.map((item,i)=>(
              <li onClick={()=>{this.handleChange(i)}} key={i} className={i===activeIndex?'fl active':'fl'}>{item.name}</li>
            ))
          }
          
        </ul>
      </div>
    )
  }
}

export default Tab