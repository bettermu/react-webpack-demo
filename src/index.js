//var element = document.getElementById('root')

//element.innerHTML = 'hello world!'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

import Router from './router'
import DevTools from './utils/devTools'
//ReactDom.render(<App />,document.getElementById('root'))
   
//console.log(process.env.NODE_ENV)

const renderByEnv = env =>{
  if(env === 'development'){
    return(
      <Provider store={store}>
        <div>
          <Router />
          <DevTools />
        </div>
      </Provider>
    )
  } else {
    return(
      <Provider store={store}>
        <div>
          <Router />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render((
  renderByEnv(process.env.NODE_ENV) 
), document.getElementById('root'));