import App from "next/app";
import Cookies from 'cookies';
import React from 'react';
import {observer, Provider} from "mobx-react";
import '../styles/globals.css';
import '../styles/bootstrap.min.css'
import RootStore from "../src/stores/RootStore";
import initRootStore from "../src/stores";
import TokenStore from "../src/stores/TokenStore";


import MyHead from "../src/components/layout/MyHead";
import Header from "../src/components/layout/Header";

@observer
class MyApp extends App {
    rootStore: RootStore;
    props: any;

    constructor(props) {
        super(props);
        const isServer = typeof window === 'undefined';
        this.rootStore = isServer ? props.initialState : initRootStore(props.initialState);
    }


    static async getInitialProps(appContext) {
        const rootStore = initRootStore({} as RootStore);
        appContext.ctx.rootStore = rootStore;


        if (appContext.ctx.req) {
            const cookies = new Cookies(appContext.ctx.req, appContext.ctx.res)
            let token = cookies.get('Authorization')

            TokenStore.set(token, true)
        }
        await rootStore.authStore.fetchCurrentUser()
        return {
            initialState: rootStore,
        };
    }

    render() {
        const {Component, pageProps, err} = this.props;
        return (
            <Provider {...this.rootStore}>
                <div className={"MainStyle"}>
                    <MyHead/>
                    <Header/>
                    <div className={'container'}>
                        <Component {...pageProps} />
                        <footer>123</footer>
                    </div>
                </div>
            </Provider>)
    }
}

export default MyApp
