import {action, observable} from "mobx";

class UserStore {
  @observable user: object = {}

  @action setUser(user: object) {
    this.user = user;
  }

  @action getUser(){
    return this.user
  }
}

export default UserStore;
