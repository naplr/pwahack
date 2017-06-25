import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { 
    List, 
    ListItem,
    ListItemContent,
    ListItemAction,
    IconButton,
    Icon } from 'react-mdl'

class DrawerView extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.renderArticleListItem = this.renderArticleListItem.bind(this)
    }

    renderArticleListItem(a) {
        return (
          <ListItem key={ a.url }>
              <ListItemContent>
                { a.author }
              </ListItemContent>
            <ListItemAction>
              <Link to={ `view?url=${a.url}` }>
                <IconButton name="remove_red_eye" />
              </Link>
              <IconButton name="check" />
            </ListItemAction>
          </ListItem>
        )
    }

    render() {
        const { articles } = this.props
        return (
          <div>
            <h1>Drawer</h1>   
              <List threeline>
                { articles.map(a => this.renderArticleListItem(a))}
              </List>
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