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

import { removeArticle } from '../actions/data'

class DrawerView extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.renderArticleListItem = this.renderArticleListItem.bind(this)
    }

    renderArticleListItem(a) {
        const { removeArticle } = this.props
        return (
          <ListItem key={ a.url }>
              <ListItemContent>
                { a.title }
              </ListItemContent>
            <ListItemAction>
              <Link to={ `view?url=${a.url}` }>
                <IconButton name="remove_red_eye" />
              </Link>
              <IconButton onClick={ e => removeArticle(a) } name="check" />
            </ListItemAction>
          </ListItem>
        )
    }

    render() {
        const { articles } = this.props
        return (
          <div>
            <h1>Drawer</h1>   
              <List>
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
    removeArticle
})(DrawerView)