import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from './components/app.jsx'
import Summoner from './components/showSummoner.jsx'
import SummonerProfile from './components/summonerProfile.jsx'

const AppRoot = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App}/>
          <Route exact path="/" component={Summoner}/>
          <Route exact path="/summonerProfile" component={SummonerProfile}/>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default AppRoot
