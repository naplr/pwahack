import React, { Component } from 'react'
import { Router, browserHistory, Route, Link, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import SettingView from './views/setting'
import HomeView from './views/home'
import DrawerView from './views/drawer'
import WebView from './views/web'
import AppLayout from './components/AppLayout'
import { initDB } from './common/dbclient'
import { initArticles } from './actions/data'

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
    componentWillMount() {
        initDB(this.props.initArticles)
    }

    render() {
        return (
            <Router history={ browserHistory }>
              <Route path="/" component={ AppLayout }>
                <IndexRoute component={ HomeView } />
                <Route path="/drawer" component={ DrawerView } />
                <Route path="/setting" component={ SettingView } />
              </Route>
              <Route path="/view" component={ WebView } />
            </Router>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps, {
    initArticles
})(App)