import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Cards, { Card } from 'react-swipe-card'
import _ from 'lodash'
import { 
    Card as MdlCard, 
    CardTitle,
    CardText } from 'react-mdl'

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
          <div style={{ height: '80vh'}}>
            <Cards onEnd={ e => alert('done') } className='master-root'>
              { this.state.headlines.map(h => {
                  return (
                    <Card 
                      onSwipeLeft={e => console.log('left')}
                      onSwipeRight={ e => selectArticle(h) }
                      key={ h.url }
                    >
                    <MdlCard shadow={0} style={{ width: '70vw', margin: 'auto'}}>
                      {/*<CardTitle style={{color: '#fff', height: '176px', background: `url(${h.urlToImage}) center / cover` }}>*/}
                      <CardTitle style={{ color: 'white', height: '176px', background: "rgb(63, 81, 181)" }}>
                        { h.title }
                      </CardTitle>
                      <CardText>
                        { h.description }
                      </CardText>
                    </MdlCard>
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
