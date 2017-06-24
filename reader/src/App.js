import React, { Component } from 'react'
import { Router, browserHistory, Route, Link, IndexRoute } from 'react-router'
import logo from './logo.svg'
import './App.css'
import { getHeadlines } from './common/helper'
import SettingView from './views/setting'
import HomeView from './views/home'
import DrawerView from './views/drawer'
import AppLayout from './components/AppLayout'

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
)

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={ AppLayout }>
          <IndexRoute component={ HomeView } />
          <Route path="/drawer" component={ DrawerView } />
          <Route path="/setting" component={ SettingView } />
        </Route>
      </Router>
    );
  }
}

export default App
