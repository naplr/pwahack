import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class DrawerView extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(link) {
        this.setState({ selectedUrl: link })
    }

    render() {
        const { articles } = this.props
        return (
          <div>
            <h1>Drawer</h1>   
              <ul>
                { articles.map(a => {
                    return (
                        <Link to={ `/view?url=${a.url}` } key={ a.url }><li>{ a.title} }</li></Link>
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