import {action, observable} from "mobx";
import {AxiosInstance, AxiosResponse} from "axios";
import TokenStore from "./TokenStore";

export interface User {
  name: string;
}

class AuthStore {
  client: AxiosInstance;
  @observable user: User = null;

  constructor(client: AxiosInstance, initialData) {
    this.client = client;
    this.user = initialData?.user;
  }

  fetchCurrentUser(): Promise<User> {
    if (TokenStore.get()) {
      return this.client.get<User>(
        '/api/user/'
      ).then((response) => {
        this.setUser(response.data)
        return this.user
      }).catch(() => {
        return new Promise((resolve, reject) => {
          this.setUser(null)
          resolve(null as User);
        });
      })
    }

    return new Promise((resolve, reject) => {
      this.setUser(null)
      resolve(null as User);
    });
  }

  // login(username: string, password: string): Promise<User> {
  //   return this.client.post<User>(
  //     '/api/login/',
  //     JSON.stringify({username, password})
  //   ).then((response) => {
  //     this.handleAuth(response);
  //     this.setUser(response.data);
  //     return this.user
  //   })
  // };

  login(username: string, password: string): Promise<User> {
    return this.client.post<User>(
      '/api/login/',
      JSON.stringify({username, password})
    ).then((response) => {
      this.handleAuth(response);
      this.setUser(this.fetchCurrentUser());
      return this.user
    })
  };

  registration(phone: string, password: string, first_name: string): Promise<any> {
    return this.client.post<User>(
      '/api/auth/registration/',
      JSON.stringify({phone, password, first_name})
    )
  };


  handleAuth(response: AxiosResponse) {
    this.setToken(response.data.token);
  };

  getSocial() {
    return this.client.get(
      '/api/socials/'
    )
  }

  @action setToken(token: string) {
    TokenStore.set(token);
  };

  @action setUser(user) {
    this.user = user
  }

  @action logOut() {
    this.user = null;
    TokenStore.remove()
  }
}

export default AuthStore;
