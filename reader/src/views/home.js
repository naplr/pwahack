import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Cards, { Card } from 'react-swipe-card'
import _ from 'lodash'

import { getHeadlines } from '../common/helper'
import { selectArticle } from '../actions/data'

class HomeView extends Component {
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
        const { selectArticle } = this.props
        if (_.isEmpty(this.state.headlines)) {
            return <div>Loading..</div>
        }

        return (
          <div>
            <Cards onEnd={ e => alert('done') } className='master-root'>
              { this.state.headlines.map(h => {
                  return (
                    <Card
                      onSwipeLeft={e => console.log('left')}
                      onSwipeRight={ e => selectArticle(h) }
                    >
                      { h.title }
                    </Card>
                  )
              })}
            </Cards>
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
    selectArticle,
})(HomeView)
