import React, { Component } from 'react'
import { Router, browserHistory, Route, Link } from 'react-router'
import logo from './logo.svg'
import './App.css'
import { getHeadlines } from './common/helper'

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
);

const Home = (props) => (
  <Page title="Home"/>
);

// const About = (props) => (
//   <Page title="About"/>
// );

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headlines: []
        }
    }

    componentWillMount() {
        getHeadlines('hacker-news', 'top')
            .then(res => {
                this.setState({
                    headlines: res.articles
                })
            })
    }

    render() {
        return (
          <div>
            <iframe src="http://www.google.com" width="300" height="300"></iframe>
            <ul>
              { this.state.headlines.map(h => {
                return (
                    <li key={ h.url }><a href={ h.url }>{ h.title} }</a></li>
                )
              })}
            </ul>
          </div>
        )
    }
}

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
