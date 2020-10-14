import App from "next/app";
import Cookies from 'cookies';
import React from 'react';
import {observer, Provider} from "mobx-react";
import '../styles/globals.css';
import '../styles/bootstrap.min.css'
import RootStore from "../src/stores/RootStore";
import initRootStore from "../src/stores";
import TokenStore from "../src/stores/TokenStore";
import redirectTo from "../src/utils/redirectTo";


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

    // if (appContext.ctx.req) {
    //   const cookies = new Cookies(appContext.ctx.req, appContext.ctx.res)
    //   let token = cookies.get('token')
    //
    //   const passportSession = cookies.get('passportSession')
    //   if (passportSession) {
    //     const serializedCookie = Buffer.from(passportSession, 'base64').toString()
    //     const {
    //       passport: {user},
    //     }: {
    //       passport: { user: string }
    //     } = JSON.parse(serializedCookie)
    //
    //     if (user) {
    //       token = user
    //       const today = new Date()
    //       const tomorrow = new Date(today)
    //       tomorrow.setDate(tomorrow.getDate() + 7)
    //       cookies.set('token', user, {expires: tomorrow, httpOnly: false})
    //       cookies.set('passportSession')
    //     }
    //   }
    //   TokenStore.set(token, true)
    // }

    // if (appContext.ctx.pathname.startsWith('/profile') && !TokenStore.get()) {
    //   redirectTo('/login', {res: appContext.ctx.res, status: 301})
    // }

    // await rootStore.authStore.fetchCurrentUser()

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
          <Header />
          <div className={'container'}>
          <Component {...pageProps} />
          <footer>123</footer>
            </div>
        </div>
      </Provider>)
  }
}

export default MyApp
