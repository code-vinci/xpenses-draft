import React from 'react';
import { Router } from 'react-router';

import history from './history';

import App from './App';
import Balance from './pages/Balance';
import Incomes from './pages/Incomes';
import Outcomes from './pages/Outcomes';

export const routes = {
  path: '/',
  component: App,

  childRoutes: [
    { path: '/balance', component: Balance, title: 'Balanço' },
    { path: '/incomes', component: Incomes, title: 'Entradas' },
    { path: '/outcomes', component: Outcomes, title: 'Saídas' },
  ],
};

export default () => (<Router history={history} routes={routes}/>);
