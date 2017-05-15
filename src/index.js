import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import Index from './components/Index'
import About from './components/About'
import Profile from './components/Profile'
import './styles/app.css'
import configureStore from './store/configureStore'
import { Router, Route,IndexRoute, browserHistory } from 'react-router'

const store = configureStore();

render(
  <Provider store={store}>
    <div className='app'>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
        <IndexRoute component={Index}/>
        <Route path='profile' component={Profile}/>
        <Route path='about' component={About}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)