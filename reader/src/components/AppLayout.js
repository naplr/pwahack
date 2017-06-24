import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { 
    Content, 
    Drawer, 
    Header,
    HeaderRow,
    HeaderTabs,
    Layout,
    Tab } from 'react-mdl'

export default class AppLayout extends Component {
    onTabChange(tabId) {
        console.log(tabId)
        switch(tabId) {
            case 0:
                browserHistory.push('/setting')
                break
            case 1:
                browserHistory.push('/')
                break
            case 2:
                browserHistory.push('/drawer')
                break
        }
    }

    render() {
        return (
          <div style={{height: '300px', position: 'relative'}}>
            <Layout fixedHeader fixedTabs>
                <Header>
                    <HeaderRow title="Title" />
                    <HeaderTabs ripple activeTab={1} onChange={ this.onTabChange }>
                        <Tab>Setting</Tab>
                        <Tab>Home</Tab>
                        <Tab>Drawer</Tab>
                    </HeaderTabs>
                </Header>
                <Drawer title="Title" />
                <Content>
                    { this.props.children }
                    {/*<div className="page-content">You can add logic to update the content of this container based on the "activeTab" receive in the `onChange` callback.</div>*/}
                </Content>
            </Layout>
          </div>
        )
    }
}