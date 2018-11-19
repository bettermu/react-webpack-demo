import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom'
import React,{Component} from 'react'
import App from 'src/app'
import Index from 'views/index'
import News from 'views/news'
    
    
const SliderComponent = () => (
  <Switch>
    <Route exact path='/' component={Index} />
    <Route exact path='/news' component={News} />
  </Switch>
)

class Router extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <HashRouter history={hashHistory}>
      <Route render={()=>{
        return(
          <App>
            <SliderComponent />
          </App>
        )
      }}/>
      </HashRouter>
    )
  }
}

export default Router