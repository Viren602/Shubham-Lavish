import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validationRules: {

            },
            validState: {
                isValid: true,
                error: {},
            },
        }
    }



    render() {
        return (
            <>

                <div className='contact-page'>

                </div>
            </>
        );
    }
}

export default Contact;