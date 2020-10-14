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
            inputUserName: '',
            inputPassword: '',
            errors: {}
        }
    }

    // changeUserName = () => {
    //     this.props.jsonServerStore.changeUserName({name: this.state.inputName}).then(
    //         this.props.jsonServerStore.getProfile().then(response => {
    //             this.props.userStore.setUser(response.data)
    //             this.setState({
    //                 user: response.data
    //             })
    //         })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     )
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }



    changeInputPassword = (event) => {
        // if ($("#password").val() == '') {
        //     $("#form_password").append("<div class=\"invalid-feedback\">Пожалуйста заполните поле с паролем.</div>");
        //     $("#password").addClass("is-invalid")
        // } else {
        //     $("#password").removeClass("is-invalid")
        //     // $("#form_password").$(".invalid-feedback").remove()
        //     $("#form_password").children(".invalid-feedback").remove()
        //     $("#password").addClass("is-valid")
        //     this.setState({
        //         inputPassword: event.target.value
        //     })
        // }
    }

    clickButtonLogin = () => {
        if ((this.state.inputUserName !== '') && (this.state.inputPassword !== '')) {
            this.props.authStore.login(this.state.inputUserName, this.state.inputPassword).then(
                response => {
                    redirectTo('/')
                    console.log(response)
                }
            )
        } else {

        }
    }

    loginChange = (event) => {
        let regexp = /^[a-z\s]+$/i;
        if (event.target.value.length !== 0) {
            if (!regexp.test(event.target.value)) {
                this.setState({
                    errors: { ...this.state.errors, ['userName']: 'Логин может состоять только из букв английского алфавита.' },
                })
            } else {
                this.setState({
                    errors: null,
                    inputUserName: event.target.value
                })
            }
        } else {
            this.setState({
                errors: { ...this.state.errors, ['userName']: 'Пожалуйста заполните поле с логином.' },
                inputUserName: event.target.value
            })
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
            <div className="modal-body my_border border shadow">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Логин"
                            name={'username'}
                            onChange={this.loginChange}
                            value={this.state.inputUserName}
                            isInvalid={this.state.errors?.userName}
                            isValid={this.state.inputUserName.length > 0}
                            onFocus={this.loginChange}
                            onBlur={this.loginChange}
                        />
                        {this.state.errors?.userName && <Form.Control.Feedback type={'invalid'}>{this.state.errors?.userName}</Form.Control.Feedback>}
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль" name={'password'} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.clickButtonLogin}>Submit</Button>
                </Form>
            </div>
        )
    }
}
