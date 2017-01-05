import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import pokeList from './components/pokeList'
import pokeProfile from './components/pokeProfile'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={pokeProfile} />
      <Route path="/profile/:id" component={pokeProfile} />
    </Route>
  </Router>
), document.getElementById('root'))

