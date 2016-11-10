'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import Home from './components/Home'
import RainyDays from './components/RainyDays'
import SunnyDays from './components/SunnyDays'

const App = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

// import Jokes from './components/Jokes'
// import Login from './components/Login'
// import GoogleLogin from './components/GoogleLogin'
// import WhoAmI from './components/WhoAmI'

// const App = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav>
//       {children}
//     </div>
// )

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to={Home} />
        <Route path="/rainydays" component={RainyDays} />
        <Route path="/sunnydays" component={Sunnydays} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)