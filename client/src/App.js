import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home'
import SingleHotel from "./containers/SinglePage";

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/:id' exact component={SingleHotel} />
    </Switch>
  );
}

export default App;
