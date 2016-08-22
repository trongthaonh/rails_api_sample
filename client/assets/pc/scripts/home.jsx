import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import configureStore from './store/configureStore';
import FeedView from './containers/feeds';
import MypageView from './containers/mypage';
import SearchView from './containers/search';

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDom.render((
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={FeedView} />
      <Route path="mypage" component={MypageView} />
      <Route path="search" component={SearchView}>
        <Route path="/search/:term" component={SearchView} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('homeView')
);
