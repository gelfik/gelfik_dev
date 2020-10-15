import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import redirectTo from "../src/utils/redirectTo";
import { Button, Form } from 'react-bootstrap';

@inject('authStore')
@inject('userStore')
@observer
export default class Home extends Component {
    props: any;
    state: any;

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            token: null,
        }
    }





    componentDidMount() {
        // this.props.jsonServerStore.getProfile().then(response => {
        //     console.log(response)
        //     this.props.userStore.setUser(response.data)
        //     this.setState({
        //         user: response.data
        //     })
        // })
    }

    render() {
        return (
            <div className="modal-body border shadow my_border">
                fdth
            </div>
        )
    }
}
