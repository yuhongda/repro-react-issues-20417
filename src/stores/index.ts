import { createContext, useContext } from 'react';
import store from './root.mst';

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export default store;
