import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

import App from './components/app.js';
import Summoner from './components/showSummoner.js';
import SummonerProfile from './components/summonerProfile.js';
// import NavBar from './components/navBar.js'

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleWare(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

const router =(
	<Provider store={store}>
		<Router history={browserHistory} >
    	<Route path='/' component={App}>
      	<IndexRoute component={Summoner} />
        <Route path='/summonerProfile' component={SummonerProfile} />
      </Route> 
    </Router>
  </Provider>
)

  ReactDOM.render(
    router, document.getElementById('app')
  );