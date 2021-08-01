import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home'
import { SingleHotel } from "./containers/SinglePage";
import Cities from './containers/TopDestinations/cities';
import Reservation from "./containers/Reservation";

function App() {
  return (
    <Switch>
      <Route exact path='/' exact component={Home} />
      <Route exact path='/book-hotel/:id' exact component={SingleHotel} />
      <Route exact path='/book-hotel/cities/:id' exact component={Cities} />
      <Route exact path='/test' exact component={Reservation} />
    </Switch>
  );
}

export default App;
