import RootStore from "./RootStore";
import {useStaticRendering} from "mobx-react-lite";

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initRootStore(initialData: RootStore) {
    if (isServer) {
        return new RootStore(initialData)
    }
    if (store === null) {
        store = new RootStore(initialData)
    }

  return store;
}
