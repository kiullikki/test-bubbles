import React, { ReactElement } from 'react';
import { withRouter } from 'react-router-dom';
import * as RoutesModule from './routes';

const routes = RoutesModule.routes;

function App(): ReactElement {
  return (
    <>
      {routes}
    </>
  );
}

export default withRouter(App);