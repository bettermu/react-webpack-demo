//var element = document.getElementById('root')

//element.innerHTML = 'hello world!'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'

//ReactDom.render(<App />,document.getElementById('root'))

import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom'
    
    
    
const SliderComponent = () => (
  <Switch>
    <Route exact path='/' component={App} />
  </Switch>
)
    
ReactDOM.render((
  <HashRouter history={hashHistory}>
    <SliderComponent />
  </HashRouter>
), document.getElementById('root'));