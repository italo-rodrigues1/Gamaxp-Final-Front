import React from 'react';
import Home from './Home';
import listBooks from './listBooks';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/list-books" component={listBooks} />
    </Switch>
  </BrowserRouter>
)

export default Routes;