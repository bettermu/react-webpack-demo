import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom'
import React,{Component} from 'react'
import App from '../app'
    
    
const SliderComponent = () => (
  <Switch>
    <Route exact path='/' component={App} />
  </Switch>
)

class Router extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <HashRouter history={hashHistory}>
        <SliderComponent />
      </HashRouter>
    )
  }
}

export default Router