import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { StoreContext, useStore } from '@/stores';
import Routes from '@/router';

const App = () => {
  const store = useStore();
  const history = store.router.history;

  return (
    <StoreContext.Provider value={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </StoreContext.Provider>
  );
};

export default App;
