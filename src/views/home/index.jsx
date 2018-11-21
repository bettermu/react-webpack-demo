import React , {Component} from 'react'
import Tab from 'components/tab/index'
import Loading from 'components/loading'
import Connect from 'connect'

@Connect
class Index extends Component {
  constructor(props){
    super(props)
    this.skipToNews = this.skipToNews.bind(this)
    this.getHotData = this.getHotData.bind(this)
  }

  componentDidMount(){
    const {addNumber} = this.props
    addNumber(5)
  }

  //跳转News
  skipToNews(){
    const {history} = this.props
    history.push('/news')
  }


  //获取数据
  getHotData(){
    const {getHotData} = this.props

    getHotData()
  }

  render(){
    const number = this.props.state.news.number
    const hots = this.props.state.home.hot
    const loading = this.props.state.common.loading
    //console.log(hots)
    
    return(
      <div>
        <div className="header">头部
          <img className="headerImg" src={require('../../img/avatar.jpg')} alt=""/>
          <button onClick={this.skipToNews}>点我跳转</button>
          <button onClick={this.getHotData}>点我获取数据</button>
          <span>{number}</span>
        </div>
        <div className="main"><Tab /></div>
        <div className="footer">
          {
            loading?(<Loading />):''
          }
          <ul>
            {
              hots.map((item,i)=>(
                <li key={i}> {item.first}</li>
              ))
            }
            
          </ul>
        </div>
      </div>
    )
  }
}

export default Index