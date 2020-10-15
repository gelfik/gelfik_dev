import React, {Component} from 'react';
import {AxiosInstance, AxiosResponse} from "axios";
import {inject, observer} from "mobx-react";
import Link from 'next/link'

@inject('authStore')
@inject('userStore')
@observer
class Header extends Component {
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

    componentDidMount() {
        this.props.authStore.fetchCurrentUser()
        this.setState({
            user: this.props.authStore.user
        })
        console.log(this.props.authStore.user)
        // this.props.authStore.fetchCurrentUser().then((response) => {
        //     this.setState({
        //         user: response
        //     })
        // })

        // this.props.jsonServerStore.getProfile().then(response => {
        //     console.log(response)
        //     this.props.userStore.setUser(response.data)
        //     this.setState({
        //         user: response.data
        //     })
        // })
    }

    render() {
        console.log(this.state.user)

        return (
            <div className={'bg-dark header d-print-none'}>
                <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Проекты</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link href="/"><a className="nav-link">Home</a></Link>
                            </li>
                            {this.state.user?.username &&
                            <li className="nav-item active">
                                <Link href="/user"><a
                                    className="nav-link">{this.state.user?.username ? this.state.user?.username : 'Profile'}</a></Link>
                            </li>}
                            {!this.state.user?.username &&
                            <li className="nav-item active">
                                <Link href="/login"><a className="nav-link">login</a></Link>
                            </li>}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;