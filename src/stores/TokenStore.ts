import Cookie from "mobx-cookie";
import {action, extendObservable, observable} from "mobx";

class TokenStore {
    token: Cookie;
    @observable server_token: string

    constructor() {
        extendObservable(this, {
            token: new Cookie('Authorization'),
        });
    }

    @action get() {
        return this.server_token || this.token.value
    }

    @action set(token: string, server=false) {
        if (server) {
            this.server_token = token
        } else {
            this.token.set(token);
        }
    }

    @action remove() {
        this.token.remove()
    }
}

export default new TokenStore();
