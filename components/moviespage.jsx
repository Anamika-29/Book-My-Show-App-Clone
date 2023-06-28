import React, { Component } from "react";

import { Link } from "react-router-dom"; 
import { FaMobileAlt,FaHamburger } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import queryString from 'query-string'
import authSys from "./services/authSys";
import { connect } from "react-redux";
import http from "./services/httpServer"
class MoviesPage extends Component{ state = {Employees:[], cities: ["London", "Paris", "New Delhi", "Bangalore"], 
Filter: ["0-100",
  "  101-200",
   " 201-300",
   " More than 300"], 
FilterShow: ["Morning-00:00AM-11:59 AM",
  "Afternoon : 12:00PM-3:59 PM",
   "Evening : 4:00 PM-6:59 PM",
   "Night : 7:00 PM-11:59 PM"], 
   theater:[{room:
    "Cinepolis: DLF Place, Saket",
   time:[
   " 9:00 AM",
    "12:00 PM",
   
    "1:15 PM",
    "3:45 PM",
    "10:20 PM",],},
    {room:
        "Cinepolis: Janak Cinema, New Delhi",
       time:[
       " 9:00 AM",
        "12:00 PM",
       
        "1:15 PM",
        "3:45 PM",
        ],},
        {room: "Cinepolis:Pacific NSP2, Delhi",
           time:[
           " 9:00 AM",
            "12:00 PM",
           
            "1:15 PM",
            "3:45 PM",
            ],},
            {room:"Cinepolis:Savitri Complex GK2",
               time:[
               " 9:00 AM",
                "12:00 PM",
               
                "1:15 PM",
                "3:45 PM",
                "10:20 PM",],},
        {room: "Cinepolis: Unity One Mall Rohini, Delhi",
           time:[
           " 9:00 AM",
            "12:00 PM",
           
            "1:15 PM",
            "3:45 PM",
            "10:20 PM",],}],
ages:[25,30,35,40,45,50]};



render() {


 return (<React.Fragment><div className="head " style={{height:"100px",background:"#000000"}}></div>
 <div className="head bg-light" style={{height:"100px",background:"light"}}>
    <br />
    <div className="row">
        <div className="col-1 " style={{background:"#AEF359"}}>
<b >19 Today</b>
        </div>
        <div className="col-1 ">
        <b>20 nov</b>
        </div>
        <div className="col-1">
        <b>21 nov</b>
        </div>
        <div className="col-3">
       
        </div>
        <div className="col-1">
        <div class="dropdown">
  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Filter Price
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
 {this.state.Filter.map((st)=>
 <a class="dropdown-item" href="#"><input type="checkbox" name="price" id="" /> {
    st
 }</a>)}
  </div>
  
</div>

        </div>
        <div className="col-3">
       
       </div>
        <div className="col-1">
        <div class="dropdown">
  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Filter Showtime
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
 {this.state.FilterShow.map((st)=>
 <a class="dropdown-item" href="#"><input type="checkbox" name="FilterShow" id="" /> {
    st
 }</a>)}
  </div>
  
</div>
        </div>
    </div><br />
    <div className="head " style={{height:"100px",background:"#AEF359"}}>
        <div className="row">
            <div className="col-2" >
                <FaMobileAlt style={{fontSize:"large",margin:"30px"}}/><br/>
                E-ticket Available
            </div>
            <div className="col-5 m-1" >
  
       </div>
       <div class="vr m-2"></div>
       <div className="col-2 m-2" >
                <FaHamburger style={{fontSize:"large",margin:"30px"}}/><br/>
             Food Available
            </div>
        </div>
    </div>

    {this.state.theater.map((st)=>
    <div className="row">
<div className="col-4">
<div className="row">
    <div className="col-1"><AiOutlineHeart/></div>
    <div className="col-11"><h3>{st.room}</h3><br />
    <FaMobileAlt />
                E-ticket Available{"  "}
                {"  "}   {"  "}  
                <FaHamburger />
             Food Available
    </div>
    </div>

</div>
<div className="col-3"></div>
<div className="col-5">
    {st.time.map((st)=>
<button className="btn btn-outline-primary m-2 btn-lg">{st}</button>)}
<li>Cancellation available</li>
</div>


    </div>
    
    )}
    </div></React.Fragment>
);
}}
    export default  MoviesPage;