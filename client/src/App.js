import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import { SingleHotel } from "./containers/SinglePage";
import Cities from "./containers/TopDestinations/cities";
import SearchHotels from './containers/Home/searchHotels';
import Reservation from "./containers/Reservation";
import { Login, Register } from "./containers/Auth";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Profile from "./containers/Profiles";
import { SearchHotel } from "./redux/actions/actionConstant";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register"? <Header />:null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book-hotel/:id" component={SingleHotel} />
        <Route exact path="/book-hotel/cities/:id" component={Cities} />
        <Route exact path="/search-hotel/results" component={SearchHotels} />
        <Route exact path="/booking-confirmation/:id" component={Reservation} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/register" exact component={Register} />
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/register"? <Footer />:null}
    </>
  );
}

export default App;
