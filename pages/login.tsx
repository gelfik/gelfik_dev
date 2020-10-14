import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import redirectTo from "../src/utils/redirectTo";
import $ from "jquery";

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


    changeInputUserName = (event) => {
        if ($("#username").val() == '') {
            $("#username").removeClass("is-invalid")
            $("#form_username").children(".invalid-feedback").remove()
            $("#form_username").append("<div class=\"invalid-feedback\">Пожалуйста заполните поле с логином.</div>");
            $("#username").addClass("is-invalid")
        } else {
            let regexp = /^[a-z\s]+$/i;
            $("#username").removeClass("is-invalid")
            // $("#form_password").$(".invalid-feedback").remove()
            $("#form_username").children(".invalid-feedback").remove()
            if (!regexp.test($("#username").val())) {
                $("#form_username").append("<div class=\"invalid-feedback\">Логин может состоять только из букв английского алфавита.</div>");
                $("#username").addClass("is-invalid")
            } else {
                $("#username").removeClass("is-invalid")
                $("#form_username").children(".invalid-feedback").remove()
                $("#username").addClass("is-valid")
                this.setState({
                    inputUserName: event.target.value
                })
            }
        }
    }

    changeInputPassword = (event) => {
        if ($("#password").val() == '') {
            $("#form_password").append("<div class=\"invalid-feedback\">Пожалуйста заполните поле с паролем.</div>");
            $("#password").addClass("is-invalid")
        } else {
            $("#password").removeClass("is-invalid")
            // $("#form_password").$(".invalid-feedback").remove()
            $("#form_password").children(".invalid-feedback").remove()
            $("#password").addClass("is-valid")
            this.setState({
                inputPassword: event.target.value
            })
        }
    }

    clickButtonLogin = () => {
        if ((this.state.inputUserName != '') && (this.state.inputPassword != '')) {
            this.props.authStore.login(this.state.inputUserName, this.state.inputPassword).then(
                response => {
                    redirectTo('/')
                    console.log(response)
                }
            )
        } else {

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
                <form>
                    <div className="form-row" id="form_username">
                        <label htmlFor="username">Логин</label>
                        <input onChange={this.changeInputUserName} type="username" className="form-control"
                               id="username" name="username" required/>
                    </div>
                    <div className="form-row" id="form_password">
                        <label htmlFor="password">Пароль</label>
                        <input onChange={this.changeInputPassword} type="password" className="form-control"
                               id="password" name="password" required/>
                    </div>
                    <div className="form-row align-items-center mt-3 justify-content-center mobile-auth">
                        <button className="btn btn-dark" type="button" onClick={this.clickButtonLogin}>Войти</button>
                    </div>
                </form>
            </div>
        )
    }
}
