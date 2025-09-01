import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    render() {
        return (
            <div className='header'>
            </div>
        )
    }
}
