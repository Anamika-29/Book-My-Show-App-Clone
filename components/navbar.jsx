import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchClick = () => {
    props.setSearchValue(searchValue);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  const handleInputClick = () => {
    const inputValue = window.prompt('Please enter a search term:', searchValue);
    if (inputValue !== null) {
      props.setSearchValue(inputValue);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b466e9f-26b4-4f40-a5ff-7eaa4b314014/dfady0s-54ea7126-3a05-4619-b38f-fb23a2bcb887.jpg/v1/fill/w_1523,h_525,q_70,strp/bookmyshow_logo_by_aisackparrafans_dfady0s-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI0IiwicGF0aCI6IlwvZlwvOGI0NjZlOWYtMjZiNC00ZjQwLWE1ZmYtN2VhYTRiMzE0MDE0XC9kZmFkeTBzLTU0ZWE3MTI2LTNhMDUtNDYxOS1iMzhmLWZiMjNhMmJjYjg4Ny5qcGciLCJ3aWR0aCI6Ijw9MTgxMSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GR9fAvFJOdiV3hj_kPQHBhX7UKNciW5JmpKnPE1JpmY"
          alt="BookMyShow Logo"
        />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            onKeyPress={handleInputKeyPress}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleSearchClick} />
        </div>
      </div>
      <div className="right-content">
        <select className="location-dropdown" onChange={(e) => props.updateLocation(e.currentTarget.value)}>
          <option value="">Select location</option>
          <option value="NCR">NCR</option>
          <option value="Banglore">Banglore</option>
          <option value="Gurgaon">Gurgaon</option>
          <option value="Noida">Noida</option>
        </select>
        <button className="btn btn-danger sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
