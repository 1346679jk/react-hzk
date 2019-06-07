import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Login from './components/loigin/login.js'
import Home from './components/home/home.js'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Redirect to="/login"> </Redirect>
      </Switch>
    </Router>
  )
}
export default AppRouter
