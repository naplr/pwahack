import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export default class SettingView extends Component {
    componentWillMount() {
    }

    render() {
        return (
          <div>
                            <h1>Setting</h1>
            <div>
                <p>
                <Link to="/">Home</Link>
                </p>
                <p>
                <Link to="/about">About</Link>
                </p>
                <p>
                <Link to="/setting">Settings</Link>
                </p>
            </div>
          </div>
        )
    }
}