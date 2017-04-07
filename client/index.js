import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'

import App from './components/app.js';
import AddClasses from './components/addClasses.js';
import ShowClasses from './components/showclasses.js';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleWare(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);
export const dispatch = store.dispatch;

const router =(
	<Provider store={store}>
		<Router history={browserHistory} >
    	<Route path='/' component={App}>
      	<IndexRoute component={AddClasses} />
				<Route path='/showclasses' component={ShowClasses}/>
      </Route> 
    </Router>
  </Provider>
)

  ReactDOM.render(
    router, document.getElementById('app')
  );