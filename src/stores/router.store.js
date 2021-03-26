import URL from 'url';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { makeAutoObservable, computed } from 'mobx';

let instance = null;

export class Router extends RouterStore {
  constructor() {
    super();
    if (instance) return instance;

    const appHistory = createBrowserHistory();
    syncHistoryWithStore(appHistory, this);
    instance = this;
  }

  get query() {
    const { search } = this.location;
    return search ? URL.parse(search, true).query : {};
  }
}

export default new Router();
