'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import Home from './components/Home'
import RainyDays from './components/RainyDays'
import SunnyDays from './components/SunnyDays'
import ShowMemory from './components/ShowMemory'
import ShowMyPictures from './components/ShowMyPictures'
import ShowMyPicture from './components/ShowMyPicture'
import NewEntryContainer from './components/NewEntry'

// for Google's Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { yellow200, indigo800 } from 'material-ui/styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo800,
    primary2Color: yellow200
  },
});

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
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRedirect to="/login" />
          <Route path="/login" component={Login}/>
          <Route path="/choose" />
          <Route path="/sunny" component={SunnyDays}/>
          <Route path="/rainy" component={RainyDays}/>
          <Route path="/showMemory" component={ShowMemory}/>
          <Route path="/showMyPictures" component={ShowMyPictures}/>
          <Route path="/showMyPicture" component={ShowMyPicture}/>
          <Route path='/newEntry' component={NewEntryContainer}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)




// MUST INCLUDE: <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>