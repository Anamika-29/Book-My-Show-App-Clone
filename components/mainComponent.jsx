import React, { useState } from 'react';
import Navbar from './navbar';
import NavbarNew from './newNav';
import CarouselComponent from './carousel';
import MovieList from './movieList';

const MainComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [view,setView] = useState(0);

  const locations = ['NCR', 'Gurgaon', 'Noida', 'Bangalore']; // Replace with your actual locations
  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };
 

  const selectLocation = () => {
    
  let selectedLocation = null;
    while (!selectedLocation || !locations.includes(selectedLocation)) {
      selectedLocation = window.prompt(`Please select a location:${locations.join(",")}`
    );
    }
  
    setSelectedLocation(selectedLocation);
  };
  

  const updateLocation = (newLocation) => {
    setSelectedLocation(newLocation);
  };

  // Call the selectLocation function when the component mounts
  React.useEffect(() => {
    selectLocation();
  }, []);

  return (
    <div>
      <Navbar updateLocation={updateLocation} setSearchValue={setSearchValue} searchValue={searchValue} />
      <NavbarNew />
      {view===0 ?
      <CarouselComponent /> : ""
    }

      {view===4 ? <h6>Tickets</h6> : selectedLocation ? (
        <MovieList location={selectedLocation} searchValue={searchValue} setSearchValue={setSearchValue} setMainView={setView} />
      ) : (
        <div style={{ opacity: 0.5 }}>
          <h3>Please select a location</h3>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
