import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Cards, { Card } from 'react-swipe-card'
import _ from 'lodash'
import { SelectField, Option } from 'react-mdl-extra'
import { 
    Card as MdlCard, 
    CardTitle,
    CardText,
    Button } from 'react-mdl'

import { getHeadlines } from '../common/helper'
import { selectArticle, getNewArticles } from '../actions/data'
import { SOURCES } from '../common/constants'

class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedSource: '',
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

    selectSource(e) {
        this.setState({
            selectedSource: e
        })
    }

    render() {
        const { newArticles, sources } = this.props
        if (this.state.noCard) {
            return (
                <div>
                <center style={{ marginTop: "15px" }}>
                <SelectField label={'Select Source'} value={ this.state.selectedSource } onChange={ e => this.selectSource(e) }>
                  { sources.map(s => {
                      return (
                        <Option key={s} value={s}>{ SOURCES[s].name }</Option>
                      )
                  })}
                </SelectField>
                </center>
                <div className="rd-app">
                  <Button raised accent ripple onClick={ e => this.getMore() }>Get More</Button>
                </div>

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
        newArticles: state.data.newArticles,
        sources: state.data.sources
    }
}

export default connect(mapStateToProps, {
    selectArticle,
    getNewArticles
})(HomeView)
