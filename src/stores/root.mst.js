import { makeAutoObservable } from 'mobx';
import RouterStoreInstance from './router.store';
import CommonStore from './common.store';

export class RootStore {
  common = new CommonStore();
  router = RouterStoreInstance;

  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
