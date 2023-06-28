import React, { Component,useState } from "react";
import { FaUserAlt,FaUserCircle,FaHireAHelper } from 'react-icons/fa';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { VscSignOut } from 'react-icons/vsc';

import {Link} from "react-router-dom";

import logo from "./IMge/logo.png"
import "./app.css"
import "./nav.css"
import authSys from "./services/authSys";

  
class NavBar3 extends Component {
    state={
      style:"block",
        loc:"NCR",
        showPopup:false,
    }

     togglePopup = () => {
    

     this.state.showPopup=true
     this.state.showPopup=this.props.showPopup

     this.setState(this.state)
    };
    onMouseOver=(e)=>{
 this.state.style="block"
 this.setState(this.state)
    }
    leave=(e)=>{
 this.state.style=""
 this.setState(this.state)
    }
   handleChange = (event) => {
    console.log(event)
    
           this.setState({loc: event.target.value});
           } 
   handleChange1 = (event) => {
    console.log(event)
    
           this.setState({Movies: event.target.value});
        //   window.location=(`/home/${this.state.loc}/Movies?Search=${event.target.value}`)

           } 
   handleChange2 = (event) => {
    console.log(event)
    
    window.top.location =(`/home/${this.state.loc}/Movies?Search=${this.state.Movies}`)

           } 
         loca=(a)=>{
         
            this.setState({loc: a})
        }
render() {  
  
      
    let {loc,style}=this.state

    let user=authSys.getUser()
    console.log(user)
    let ss=
   [ "NCR",
    "Ahmedabad",
    "Banglore",
    "Chennai",
    "Mumbai",
    "Hyderabad",]
    let Shoes = ["Movies",
     "Events",
     "Plays",
     "Activities",
     "Fanhood"];
        let QURY=["English" ]
      
       let data=[
        "Edit Profile",
        "Purchase History",
       "→BookASmile",
       " Help And Support",
       " Sign Out"]
         // Handles state change
         
return (<React.Fragment>

<nav className="navbar navbar-expand-sm navbar-dark" style={{background:"#000000",width:"100%"}}>
     <div className="row" style={{width:"100%"}}>
<div className="col-2">
    <ul className="navbar-nav mr-auto" style={{width:"100%"}}>
    <li className="nav-item">
<Link to={`/home/${loc}`} className="navbar-brand">
<img src={logo} alt="" srcset="" style={{width:"100px"}}/>
</Link></li></ul></div>
<div className="col-4">
<ul className="navbar-nav mr-auto" style={{width:"100%"}}>
<li className="nav-item"style={{width:"100%",marginTop:"2px"}} >

    <input class="form-control " type="search" placeholder="Search for Movies" aria-label="Search" onChange={this.handleChange1} 
    onBlur={this.handleChange2}/>

</li>
</ul></div>
<div className="col-2"></div>
<div className="col-1 text-center">


  
      <ul class="nav navbar-nav" >
        <li class="dropdown">
          <a href="#" className="dropdown-toggle text-white" data-toggle="dropdown" role="button" aria-haspopup="true"
           aria-expanded="false"  style={{textDecoration:"none"}}>
            <h style={{fontSize:"large"}} onChange={this.handleChange} >{loc} </h></a>
          <ul class="dropdown-menu">
          {ss.map((n1) => (
<Link key={n1} className="dropdown-item" to={`/home/${n1}`} onClick={()=>this.loca(n1)} >
<b >{n1}</b>
</Link>
))}
          </ul>
        </li>
      </ul>


</div>
<div className="col-3">
<ul className="navbar-nav mr-auto" style={{width:"100%"}}>
{!user&&(<li className="nav-item" style={{width:"100%"}}>
<Link to={`/home/${loc}/Movies?login=yes`}>
     <button className="btn   navbar-brand " style={{background:"#00000"}} onClick={()=>this.togglePopup()}><b> Sign in</b></button>    
</Link>
</li>)}
{user && user.role=="customer"&&(
     <li className="nav-item dropdown">
     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"large",color:"white"}}>
     <FaUserAlt/>{"HI,"}{user.email}
     </a>
     <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown" style={{color:"white"}}>
       <li style={{color:"white"}}><Link className="dropdown-item" to={`/myProfile/Edit Profile`} style={{color:"white"}}><FaUserCircle />&nbsp;Edit Profile</Link></li>
      
       <li><Link className="dropdown-item" to={`/myProfile/Purchase History`} style={{color:"white"}}><BiPurchaseTagAlt/>&nbsp;Purchase History</Link></li>
      
       <li><Link className="dropdown-item" to={`/myProfile/→BookASmile`} style={{color:"white"}}>→&nbsp;BookASmile</Link></li>
       <li><Link className="dropdown-item" to={`/myProfile/Help And Support`} style={{color:"white"}}><FaHireAHelper/>&nbsp;Help And Support</Link></li>
       <li><Link className="dropdown-item" to={`/myProfile/ Sign Out`} style={{color:"white"}}><VscSignOut/>&nbsp; Sign Out</Link></li>
     </ul>
   </li>

)}
</ul>
</div>

<div className="col-2"></div>
{Shoes.map((n1) => (
    <div className="col-2">
<Link key={n1} className="nav-link"  to={`/home/${loc}/${n1}`}>
 <p style={{color:"white"}}>{n1}</p>
</Link></div>
))}
<div className="col-2"></div>
 </div>


</nav>


 

</React.Fragment>)}}

export default  NavBar3;