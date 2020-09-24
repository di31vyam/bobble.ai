import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignUp from './SignUp';
import Home from './Home';


const Main = () => (
<BrowserRouter >
    <Switch>
    <Route exact path="/" component={SignUp}/>
    <Route path="/home" component={Home}/>
   </Switch>
</BrowserRouter>
);
export default Main;