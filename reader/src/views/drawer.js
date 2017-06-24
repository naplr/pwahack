import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class DrawerView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedUrl: 'http://www.google.com'
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(link) {
        this.setState({
            selectedUrl: link
        })
    }

    render() {
        const { articles } = this.props
        return (
          <div>
            <h1>Drawer</h1>   
            <iframe src={ this.state.selectedUrl } width="300" height="100vw"></iframe>
              <ul>
                { articles.map(a => {
                    return (
                        <li key={ a.url } onClick={ e => this.onClick(a.url) }>{ a.title} }</li>
                    )
                }) }
            </ul>
          </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        articles: state.data.selectedArticles
    }
}

export default connect(mapStateToProps, {
})(DrawerView)