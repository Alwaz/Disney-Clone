import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Components/Details';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
      <Router>
         <Header/>
         <Switch>
           <Route path='/details/:id'>
             <Details/>
          </Route>

          <Route path='/login'>
              <Login/>
          </Route>

          <Route path='/'>
              <Home/>
          </Route>
          
         </Switch>
      </Router> 
    </div>
  )
}

export default App
