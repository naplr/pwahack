import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import { 
    Content, 
    Header,
    HeaderRow,
    HeaderTabs,
    Layout,
    IconButton,
    Tab } from 'react-mdl'

export default class WebView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'http://www.google.com'
        }

        this.onClick = this.onClick.bind(this)
    }

    componentWillMount() {
        const url = this.props.location.query.url
        this.setState({ url: url })
    }

    onClick(link) {
        browserHistory.push('/drawer')
    }

    render() {
        return (
          <div style={{height: '100vh', position: 'relative'}}>
            <Layout fixedHeader fixedTabs>
                <Header>
                    <IconButton name="arrow_back" onClick={ this.onClick } />
                </Header>
                <Content>
                  <div className="rd-webview">
                    <iframe src={ this.state.url } width="100%" height="100%"></iframe>
                  </div>
                </Content>
            </Layout>
          </div>
        )
    }
}

// WebView.propTypes = {
//     url: PropTypes.string.isRequired
// }