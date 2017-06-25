import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { 
    DataTable,
    TableHeader } from 'react-mdl'

import { SOURCES } from '../common/constants'
import { updateSources } from '../actions/data'

class SettingView extends Component {
    componentWillMount() {
    }

    onChange(e) {
        this.props.updateSources(e)
    }

    render() {
        return (
          <div>
            <DataTable
              selectable
              shadow={0}
              style={{ width: '100vw' }}
              rowKeyColumn="source"
              rows={ Object.keys(SOURCES).map(key => SOURCES[key]) }
              onSelectionChanged={ e => { this.onChange(e) } }
            >
                <TableHeader name="name">Source</TableHeader>
                <TableHeader name="filter">Type</TableHeader>
            </DataTable>
          </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        sources: state.data.sources
    }
}

export default connect(mapStateToProps, {
    updateSources,
})(SettingView)