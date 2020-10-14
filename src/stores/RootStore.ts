import AuthStore from "./AuthStore";
import $axios from "../utils/Axios";
import JsonServerStore from "./JsonServerStore";
import UserStore from "./UserStore";

class RootStore {
  authStore: AuthStore;
  jsonServerStore: JsonServerStore;
  userStore: UserStore;

  constructor(initialData) {
    this.authStore = new AuthStore($axios, initialData?.authStore);
    this.jsonServerStore = new JsonServerStore(process.env.NEXT_PUBLIC_API_URL, $axios);
    this.userStore = new UserStore();
  }
}

export default RootStore
