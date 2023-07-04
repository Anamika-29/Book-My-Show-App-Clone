import React, { useState } from 'react';

function Purchase({ booking }) {
  const [activeTab, setActiveTab] = useState('recent-bookings');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderRecentBookings = () => {
    if (booking) {
      return booking.map((bookingItem, index) => (
        <div className='row text-center bg-light m-2' key={index}>
          <div className='col-1'>
            <span className='text-danger'>Movie</span>
            <br />
            <span>{bookingItem.Movies}</span>
          </div>
          <div className='col-1'>
            <span className='text-danger'>Hall</span>
            <br />
            <span>{bookingItem.MoviesHall}</span>
          </div>
          <div className='col-2'>
            <span className='text-danger'>Amount</span>
            <br />
            <span>{bookingItem.amount}</span>
          </div>
          <div className='col-2'>
            <span className='text-danger'>Seats</span>
            <br />

            <span>{bookingItem.ticket.map((st) => st.seat).join(",")}</span>
          </div>
          <div className='col-2'>
            <span className='text-danger'>Start Time</span>
            <br />
            <span>{bookingItem.time[0].showtime[0]}</span>
          </div>
          <div className='col-2'>
            <span className='text-danger'>Date</span>
            <br />
            <span>{bookingItem.data}</span>
          </div>
          <div className='col-2'>
            <span className='text-danger'>Payment Method</span>
            <br />
            <span>{bookingItem.paymentMethod}</span>
          </div>
        </div>
      ));
    } else {
      return <h5 className='text-center'>No Recent Bookings</h5>;
    }
  };

  return (
    <div style={{ marginLeft: '150px', marginRight: '150px' }}>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <div className='container'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className={`nav-link ${activeTab === 'recent-bookings' ? 'active' : ''}`}
                href='#recent-bookings'
                onClick={() => handleTabClick('recent-bookings')}
              >
                Recent Bookings
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${activeTab === 'pre-bookings' ? 'active' : ''}`}
                href='#pre-bookings'
                onClick={() => handleTabClick('pre-bookings')}
              >
                Pre Bookings
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={`nav-link ${activeTab === 'add-ons' ? 'active' : ''}`}
                href='#add-ons'
                onClick={() => handleTabClick('add-ons')}
              >
                Add Ons
              </a>
            </li>
          </ul>
        </div>
        <style>
          {`
            .navbar-nav .nav-link.active {
              border-bottom: 3px solid red;
            }
          `}
        </style>
      </nav>
      {activeTab === 'recent-bookings' && booking ? renderRecentBookings() : <h5 className='text-center'>No Recent Bookings</h5>}
    </div>
  );
}

export default Purchase;
