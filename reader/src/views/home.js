import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getHeadlines } from '../common/helper'

export default class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headlines: []
        }
    }

    componentWillMount() {
        // TODO: Move this to redux, so no need for reload everytime we change tab.
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
            <h1>Home</h1>
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