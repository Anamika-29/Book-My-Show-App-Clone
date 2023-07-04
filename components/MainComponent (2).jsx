import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import NavBar from "./navbar (2)";
import MAINPAGE from "./MAINPAGE";
import TicketBook from "./ticketBook";
import Ticket from "./ticket";
import CarouselComponent from "./carousel";
import NavbarNew from "./newNav";
import LoginPopup from "./Login";
import AddPerson from "./editProf";
import Purchase from "./purchase";
import Help from "./Help";
import logout from "./Logout";
import BookAsmile from "./BookAsmile";

const MainComponent = ({ history }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [view, setView] = useState(0);
  const [booking,setBooking] = useState([]);

  const locations = ['NCR', 'Ahmedabad', 'Chennai',"Mumbai",'Hyderabad', 'Bangalore']; // Replace with your actual locations

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    updateLocation(location);
    history.push(`/home/${location}/movies`); // Redirect to the new location
  };

  const selectLocation = () => {
    let selectedLocation = null;
    while (!selectedLocation || !locations.includes(selectedLocation)) {
      selectedLocation = window.prompt(`Please select a location: ${locations.join(", ")}`);
    }

    setSelectedLocation(selectedLocation);
    updateLocation(selectedLocation);
    history.push(`/home/${selectedLocation}/movies`); // Redirect to the new location
  };

  const updateLocation = (newLocation) => {
    setSelectedLocation(newLocation);
    history.push(`/home/${newLocation}/movies`); // Redirect to the new location
  };

  useEffect(() => {
    const promptShown = localStorage.getItem("promptShown");
    if (!promptShown) {
      selectLocation();
      localStorage.setItem("promptShown", "true");
    }
  }, []); 

  console.log(showPopup);

  const recentBooking = (book) =>{
    let bookingNew = [...booking,book]
    setBooking(bookingNew);
  }

  console.log("Booking",booking);

  return (
    <React.Fragment>
      <NavBar showPopup={showPopup} setSearchValue={setSearchValue} searchValue={searchValue}  />
      <NavbarNew />
      {view === 0 ? <CarouselComponent /> : null}

      <Switch>
        <Route path="/home/login" render={(props) => <LoginPopup {...props} LoginPopup={LoginPopup} />} />
        <Route path="/home/:location1/:Movies/:time/Payment" render={(props) => <TicketBook {...props} TicketBook={TicketBook} recentBooking={recentBooking} />} />
        <Route path="/home/:location1/:Movies/:time" render={(props) => <Ticket {...props} Ticket={Ticket} />} />
        <Route path="/home/:location1/:Movies" render={(props) => <MAINPAGE {...props} MAINPAGE={MAINPAGE} setView={setView} />} />
        <Route path="/home/:location1" render={(props) => <MAINPAGE {...props} MAINPAGE={MAINPAGE} setView={setView} />} />
        <Route path="/myProfile/editProfile" render={(props) => <AddPerson {...props} AddPerson={AddPerson} />} />

        <Route path="/myProfile/purchaseHistory" render={(props) => <Purchase {...props} booking={booking}  />} />
        <Route path="/myProfile/bookASmile" component={BookAsmile} />
        <Route path="/myProfile/signOut" component={logout} />
        <Route path="/myProfile/helpAndSupport" component={Help} />
      </Switch>

      <Switch></Switch>
    </React.Fragment>
  );
};

export default withRouter(MainComponent);
