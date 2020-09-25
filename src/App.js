import React, { createContext, useState } from 'react';
import './App.css';
import HomePage from './component/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Booking from './component/Booking/Booking';
import LogIn from './component/LogIn/LogIn';
import SignUp from './component/SignUp/SignUp';
import Hotel from './component/Hotel/Hotel';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
export const Context = createContext()
function App() {
  const [indexId, setIndexId] = useState(0);
  const [user, setUser] = useState({
    name1: '',
    name2: '',
    displayName: function () {
      return this.name1 + this.name2;
    },
    email: '',
    password: '',
    photo: '',
  })
  return (
    <Context.Provider value={{idNo:[indexId, setIndexId],userElement:[user, setUser]}} >
            <Router>
      <Switch>
        <Route path="/booking/:id">
          <Booking></Booking>
          </Route>
          <PrivateRoute path="/startbooking">
            <Hotel></Hotel>
          </PrivateRoute>
          <Route path="/hotel">
            <Hotel></Hotel>
          </Route>
          <Route path="/create">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/login2">
            <LogIn></LogIn>
          </Route>
          <Route path="/signup/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route >

          </Route>
      </Switch>
        </Router>
    </Context.Provider>
  );
}

export default App;
