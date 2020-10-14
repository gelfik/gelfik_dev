import {action, observable, IAction} from "mobx";
import {AxiosInstance, AxiosResponse} from "axios";
import {inject} from "mobx-react";

class JsonServerStore {
    client: AxiosInstance;
    url: string;
    getProfile: (() => Promise<AxiosResponse<any>>) & IAction;
    getPostById: ((id) => Promise<AxiosResponse<any>>) & IAction;
    changeUserName: ((name) => Promise<AxiosResponse<any>>) & IAction;

    constructor(url: string, client: AxiosInstance) {
        this.client = client;
        this.url = url;
        this.getProfile = action(() => {
            return this.client.get(this.url + '/api/user')
        })

        this.getPostById = action((id) => {
            return this.client.get(this.url + `/posts/${id}`)
        })

        this.changeUserName = action((name) => {
            return this.client.patch(this.url + `/profile/`, name)
        })
    }


}

export default JsonServerStore;