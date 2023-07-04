import React, { Component,useState } from "react";
import { FaUserAlt,FaUserCircle,FaHireAHelper } from 'react-icons/fa';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { VscSignOut } from 'react-icons/vsc';
import Dropdown from 'react-dropdown-select';
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
        handleDropdownChange = (selectedItem) =>{
          // Handle dropdown item selection here
          const selectedValue = selectedItem?.value;
          switch (selectedValue) {
            case 'editProfile':
              this.props.history.push('/myProfile/Edit Profile');
              break;
            case 'purchaseHistory':
              this.props.history.push('/myProfile/Purchase History');
              break;
            case 'bookASmile':
              this.props.history.push('/myProfile/→BookASmile');
              break;
            case 'helpAndSupport':
              this.props.history.push('/myProfile/Help And Support');
              break;
            case 'signOut':
              this.props.history.push('/myProfile/Sign Out');
              break;
            default:
              break;
          }
        };
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
<Link key={n1} className="dropdown-item" to={`/home/${n1}/movies`} onClick={()=>this.loca(n1)} >
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
     <button className="btn btn-danger" style={{background:"#00000",marginLeft:"290px"}} onClick={()=>this.togglePopup()}><b> Sign in</b></button>    
</Link>
</li>)}
{user && user.role === 'customer' && (
          <li>
            <Dropdown
              options={[
                { value: 'editProfile', label: 'Edit Profile', icon: <FaUserCircle /> },
                { value: 'purchaseHistory', label: 'Your Orders', icon: <BiPurchaseTagAlt /> },
                // { value: 'bookASmile', label: 'BookASmile', icon: '→' },
                { value: 'helpAndSupport', label: 'Help And Support', icon: <FaHireAHelper /> },
                { value: 'signOut', label: 'Sign Out', icon: <VscSignOut /> }
              ]}
              value=""
              placeholder={`HI, ${user.email}`}
              style={{ width: '220px', borderRadius: '4px', padding: '6px 10px', backgroundColor: '#f1f1f1', color: '#333' }}
              dropdownGap={4}
              dropdownPosition="bottom"
              onChange={()=>this.handleDropdownChange()}
              itemRenderer={({ item, itemIndex, props }) => (
                <Link to={`/myProfile/${item.value}`} {...props}>
                  <div>
                    <div>{item.icon}</div>
                    <div>{item.label}</div>
                  </div>
                </Link>
              )}
            />
          </li>
        )}


</ul>
</div>

 </div>


</nav>


 

</React.Fragment>)}}

export default  NavBar3;