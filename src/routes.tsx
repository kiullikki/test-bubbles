import React from 'react';
import { Route, Switch } from 'react-router';
import { ROUTES_PATHES } from './constants';
import { BubblesScreen, GitMappingScreen } from './screens';

export const routes =
  <Switch>
    <Route exact path={ROUTES_PATHES.BUBBLES} component={BubblesScreen} />
    <Route exact path={ROUTES_PATHES.GIT_MAPPING} component={GitMappingScreen} />
  </Switch>;
