import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Cards, { Card } from 'react-swipe-card'
import _ from 'lodash'
import { 
    Card as MdlCard, 
    CardTitle,
    CardText,
    Button } from 'react-mdl'

import { getHeadlines } from '../common/helper'
import { selectArticle } from '../actions/data'

class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSource: 'hacker-news',
            headlines: [],
            noCard: true
        }

        this.getNewHeadlines = this.getNewHeadlines.bind(this)
    }

    getNewHeadlines() {
        // TODO: Move this to redux, so no need for reload everytime we change tab.
        const { articles } = this.props
        getHeadlines('hacker-news', 'latest')
            .then(res => {
                console.log(articles)
                const newArticles = res.articles.map(a => {
                    if (!_.includes(articles, a)) {
                        return a
                    }
                })

                this.setState({
                    headlines: newArticles,
                    noCard: false
                })
            })
    }

    componentWillMount() {
        this.getNewHeadlines()
    }

    swipeLeft(a) {
        console.log('left')
    }

    swipeRight(a) {
        this.props.selectArticle(a)
    }

    getMore() {
        this.getNewHeadlines()
    }

    done() {
        this.setState({
            noCard: true
        })
    }

    render() {
        const { selectArticle } = this.props
        if (_.isEmpty(this.state.headlines)) {
            return <div>Loading..</div>
        }

        if (this.state.noCard) {
            return (
                <div className="rd-app">
                  <Button raised accent ripple onClick={ e => this.getMore() }>Get More</Button>
                </div>
            )
        }

        return (
          <div style={{ height: '80vh' }}>
            <Cards onEnd={ e => this.done() } className='master-root'>
              { this.state.headlines.map(h => {
                  return (
                    <Card 
                      onSwipeLeft={ e => this.swipeLeft(h) }
                      onSwipeRight={ e => this.swipeRight(h) }
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
