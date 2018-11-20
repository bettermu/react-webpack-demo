//var element = document.getElementById('root')

//element.innerHTML = 'hello world!'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'

import Router from './router'
//ReactDom.render(<App />,document.getElementById('root'))
   
ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router />
    </div>
  </Provider>
  
), document.getElementById('root'));