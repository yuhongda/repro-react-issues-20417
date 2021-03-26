import RootStore from '@/stores';
import { AxiosResponse } from 'axios';
import 'react';
import 'axios';

declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */

  type IRootStore = InstanceType<typeof RootStore>;

  interface IProps {
    store?: IRootStore;
    match?: Record<string, any>;
  }
}

declare module 'react' {
  // eslint-disable-next-line
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

declare module 'axios' {
  // eslint-disable-next-line
  interface AxiosRequestConfig {
    errorTitle?: string;
  }
}
