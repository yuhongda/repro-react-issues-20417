import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

const render = (AppContainer) => {
  ReactDOM.render(<AppContainer />, document.getElementById('app'));
};
render(App);

if (import.meta.hot) {
  import.meta.hot.accept();
}