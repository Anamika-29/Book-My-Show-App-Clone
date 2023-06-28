import React, { useState } from "react";
import Calendar from "./calender";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';







const display = [
  { display: "New Delhi, Delhi, India (3603 hotels)", value: "NewDelhi" },
  { display: "Bengaluru, Karnataka, India (2781 hotels)", value: "Bengaluru" },
  { display: "Mumbai, Maharashtra, India (3188 hotels)", value: "Mumbai" },
  { display: "Pune, Maharashtra, India (1419 hotels)", value: "Pune" },
  { display: "Jaipur, Rajasthan, India (1822 hotels)", value: "Jaipur" },
  { display: "Goa, Goa, India (4125 hotels)", value: "Goa" },
  { display: "Kolkata, West Bengal, India (2466 hotels)", value: "Kolkata" },
  { display: "Bangkok, Thailand", value: "Bangkok" },
  { display: "Singapore, Singapore", value: "Singapore" },
];

function Hotels() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [selectedClass, setSelectedClass] = useState('Economy');
  
    
  
    const increaseAdultCount = () => {
      setAdultCount(adultCount + 1);
    };
  
    const decreaseAdultCount = () => {
      if (adultCount > 1) {
        setAdultCount(adultCount - 1);
      }
    };
  
    const increaseChildCount = () => {
      setChildCount(childCount + 1);
    };
  
    const decreaseChildCount = () => {
      if (childCount > 0) {
        setChildCount(childCount - 1);
      }
    };
  
    const increaseInfantCount = () => {
      setInfantCount(infantCount + 1);
    };
  
    const decreaseInfantCount = () => {
      if (infantCount > 0) {
        setInfantCount(infantCount - 1);
      }
    };
  
    const handleClassChange = (event) => {
      setSelectedClass(event.target.value);
    };
  
    const pluralizeTravelers = (count) => {
      return count === 1 ? 'Traveler' : 'Travelers';
    };
  const [selectedOption, setSelectedOption] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCalendarOpen2, setIsCalendarOpen2] = useState(false);


const Travelers = ({ label, adults, children, onAdultChange, onChildChange }) => {
    const handleAdultIncrease = () => {
      onAdultChange(adults + 1);
    };
  
    const handleAdultDecrease = () => {
      if (adults > 0) {
        onAdultChange(adults - 1);
      }
    };
  
    const handleChildIncrease = () => {
      onChildChange(children + 1);
    };
  
    const handleChildDecrease = () => {
      if (children > 0) {
        onChildChange(children - 1);
      }
    };
  
    const adultLabel = adults === 1 ? "Adult" : "Adults";
    const childLabel = children === 1 ? "Child" : "Children";
  
    return (
      <div className="row">
        <strong>{label} : </strong>
        <br />
        
        <div className="travelers-header col-1">
           <FontAwesomeIcon icon={faUser} />
         </div>
         <div className="col-5 text-center">
      <strong>{adultLabel}</strong>
      <br />
      
      
      <button className="btn btn-sm border " onClick={handleAdultDecrease}>
        -
      </button>
      <button className="btn btn-sm border" >
        {adults}
      </button>
      <button className="btn btn-sm border " onClick={handleAdultIncrease}>
        +
      </button>
    </div>

 
        <div className="col-6 text-center">
      <strong>{childLabel}</strong>
      <br />
      
      
      <button className="btn btn-sm border " onClick={handleChildDecrease}>
        -
      </button>
      <button className="btn btn-sm border" >
        {children}
      </button>
      <button className="btn btn-sm border " onClick={handleChildIncrease}>
        +
      </button>
    </div>
    

      </div>
    );
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = tomorrow.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const showAlert = () => {
    alert(`Travel to : ${selectedOption}, Check-in Date : ${selectedDate}, Check-out Date : ${selectedDateTom}, Number of Travellers = ${getTotalTravelers() }, Number of Rooms = ${getTotalRooms()}`)

  }

  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }));

  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

  const handleAdultChange = (index, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].adults = value;
    setRooms(updatedRooms);
  };

  const handleChildChange = (index, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].children = value;
    setRooms(updatedRooms);
  };

  const handleAddRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0 }]);
  };

  const handleRemoveRoom = () => {
    if (rooms.length > 1) {
      const updatedRooms = [...rooms];
      updatedRooms.pop();
      setRooms(updatedRooms);
    }
  };

  const getTotalTravelers = () => {
    let total = 0;
    for (const room of rooms) {
      total += room.adults + room.children;
    }
    return total;
  };

  const getTotalRooms = () => {
    return rooms.length;
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  const handleDateSelect2 = (day, month, year) => {
    setSelectedDateTom(`${day}-${month + 1}-${year}`);
  };

  function handleSelectDate(day, month, year) {
    console.log(day,month,year);
    console.log(`Selected date: ${day}-${month + 1}-${year}`);
    setSelectedDate(`${day}-${month + 1}-${year}`);
  }

  const toggleCalendar2 = () => {
    setIsCalendarOpen2(!isCalendarOpen2);
  };
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });  

  const [name,setName] = useState("");
  const [selectedDateTom, setSelectedDateTom] = useState(tomorrowDate);




  const options = { weekday: 'long' };
const currentDay = new Date().toLocaleDateString('en-US', options);
const tomorrowDay = tomorrow.toLocaleDateString('en-US', options);

  return (
    <div>
      <label htmlFor="hotelSelect">
        <b>Select city, location, Hotel name</b>
      </label>
      <br />
      <select
        id="hotelSelect"
        className="form-control"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select an option</option>
        {display.map((option) => (
          <option key={option.value} value={option.value}>
            {option.display}
          </option>
        ))}
      </select>

      <hr/>
      <div className='row'>
        
        <div className='col-6'>
          <b >Check-in Date</b>
          <h5 onClick={toggleCalendar}><b>{selectedDate}</b></h5>
          <div>{currentDay}</div>
          {isCalendarOpen && (
            <Calendar  index={5} year={2023} selectDate={handleSelectDate} />
            )}
          </div>

          <div className='col-6'>
      <b>Check-out Date</b><br/>

      
      <span>
        <div><h5 onClick={toggleCalendar2}><b>{selectedDateTom}</b></h5>
          <div>{tomorrowDay}</div>
          {isCalendarOpen2 && (
            <Calendar  index={5} year={2023} selectDate={handleDateSelect2} />
            )}</div>
      </span>
    </div>


        </div>
 
        <hr />
      <div>
      <div>
        <b>Traveller and Hotel</b>
        <h5>
          <b>
          {getTotalTravelers()} {getTotalTravelers() === 1 ? "Traveler" : "Travelers"}, {getTotalRooms()}{" "}
      {getTotalRooms() === 1 ? "Room" : "Rooms"}
          </b>
        </h5>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <FontAwesomeIcon
    icon={isExpanded ? faChevronUp : faChevronDown}
    onClick={toggleExpand}
    style={{ cursor: 'pointer' }}
  />
</div>
        {isExpanded && (
         <div className="travelers">
         
         <div className="rooms">
         {isExpanded && (
  <div>
    <div className="row">
      {rooms.map((room, index) => (
        <div className="col-12" key={index}>
          <Travelers
            label={`Room ${index + 1}`}
            adults={room.adults}
            children={room.children}
            onAdultChange={(value) => handleAdultChange(index, value)}
            onChildChange={(value) => handleChildChange(index, value)}
          />
        </div>
      ))}
    </div>
    <br />
    <div>
      <button className="btn btn-sm btn-outline-danger" onClick={handleAddRoom}>
        Add Room
      </button>
      {rooms.length > 1 && (
        <button className="btn btn-sm btn-outline-danger" onClick={handleRemoveRoom}>
          Remove Room
        </button>
      )}
    </div>
    
  </div>
)}

         </div>
         
       </div>
        )}
      </div>
      <br />
      
      
    </div>
      <br />
      
      <hr/>
      <div>
        <button className="btn btn-primary" style={{ padding: '10px 20px', margin: '10px 0' }} onClick={()=>showAlert()}>
          Search Rooms <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );


}

export default Hotels;
