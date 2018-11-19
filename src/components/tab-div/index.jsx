import React , {Component} from 'react'

class TabDiv extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[{name:111},{name:222},{name:333}]
    }
  }

  render(){
    const {activeIndex} = this.props
    const {data} = this.state
    console.log(data)
    return(
      <ul>
        {
          data.map((item,i)=>(
            <li className={i===activeIndex?'':'dn'} key={i} >{item.name}</li>
          ))
        }
      </ul>
    )
  }
}

export default TabDiv