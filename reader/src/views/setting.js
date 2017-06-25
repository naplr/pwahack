import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { 
    DataTable,
    TableHeader } from 'react-mdl'

import { SOURCES } from '../common/constants'

export default class SettingView extends Component {
    componentWillMount() {
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
              onSelectionChanged={ e => {console.log(e)} }
            >
                <TableHeader name="name">Source</TableHeader>
                <TableHeader name="filter">Type</TableHeader>
            </DataTable>
          </div>
        )
    }
}