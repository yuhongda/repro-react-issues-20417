import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/components/Home';

const Routes = () => (
  <Suspense fallback={'loading...'}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
