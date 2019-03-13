import React, { Component } from 'react'
import Layout from "./layout"

const placeholder = {
    width: 200,
    height: 200,
    backgroundColor: "#aaaaaa"
}

export default class Active extends Component {

    componentWillMount() {
        console.log('aaaaaaaa')
    }

    render() {
        if (1) {
            return (
                <Layout>
                   <p>This is active page</p>
                </Layout>
            )
        } else {
            return (
                <div style={placeholder}></div>
            )
        }
    }
}