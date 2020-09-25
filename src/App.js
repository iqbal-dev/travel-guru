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
import NoMatch from './component/NoMatch/NoMatch';
import News from './component/News/News';
import PrivateRouteDestination from './component/PrivateRoute2/PrivateRouteDestination';
import Contact from './component/Contact/Contact';
import Blog from './component/Blog/Blog';
export const Context = createContext()
function App() {
  const [indexId, setIndexId] = useState(0);
  const [user, setUser] = useState({
    name1: '',
    name2: '',
    email: '',
    password: '',
    photo: '',
    error: '',
  })
 
  return (
    <Context.Provider value={{ idNo: [indexId, setIndexId], userElement: [user, setUser] }} >
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
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
          <Route path="/news">
            <News></News>
          </Route>
          <PrivateRoute path="/destination">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
        </Router>
    </Context.Provider>
  );
}

export default App;
