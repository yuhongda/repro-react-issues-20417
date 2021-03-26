import { makeAutoObservable} from 'mobx';


export default class CommonStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count++;
  }
}
