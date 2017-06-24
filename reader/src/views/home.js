import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export default class HomeView extends Component {
    componentWillMount() {
    }
            // <nav className="navbar navbar-light bg-faded" style={ styles.navbar }>
            //     home
            //     {/*<h3>Home!</h3>*/}
            // </nav>

    render() {
        return (
          <div>
            <div>
                <p>
                <Link to="/">Home</Link>
                </p>
                <p>
                <Link to="/drawer">About</Link>
                </p>
                <p>
                <Link to="/setting">Settings</Link>
                </p>
            </div>
          </div>
        )
    }
}