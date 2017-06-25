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
import { selectArticle, getNewArticles } from '../actions/data'

class HomeView extends Component {
    constructor(props) {
        super(props)
        console.log('cons')
        this.state = {
            selectedSource: 'hacker-news',
            noCard: _.isEmpty(props.newArticles)
        }

        this.getMore = this.getMore.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEmpty(nextProps.newArticles)) {
            this.setState({
                noCard: false
            })
        }
    }

    swipeLeft(a) {
        console.log('left')
    }

    swipeRight(a) {
        this.props.selectArticle(a)
    }

    getMore() {
        this.props.getNewArticles(this.state.selectedSource)
    }

    done() {
        this.setState({
            noCard: true
        })
    }

    render() {
        const { newArticles } = this.props
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
              { newArticles.map(h => {
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
        selectedArticles: state.data.selectedArticles,
        newArticles: state.data.newArticles
    }
}

export default connect(mapStateToProps, {
    selectArticle,
    getNewArticles
})(HomeView)
