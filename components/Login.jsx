import React, { useState } from "react";
import { Link} from "react-router-dom";
import App from "./Facevook";
import {FaFacebookF} from "react-icons/fa"
import queryString from "query-string";
import {FiDelete} from "react-icons/fi"
import { LoginSocialFacebook} from "react-social-login"
 import { FacebookLoginButton } from "react-social-login-buttons"
 import authSys from "./services/authSys";
import http from "./services/httpServer";
const LoginPopup = (props) => {
  const [email, setEmail] = useState("");
 
  async function  postData(url, obj) {
    try {
    let response = await http.post(url, obj);
    let {data}=response
    console.log(data)
authSys.login(data)

window.location=`/home/${props.location1}/Movies`
} 
     catch (ex) {
    if (ex.response && ex.response.status==500){
    let errors={}; 
    errors.name= "Login Failed. Check the username and password";
    this.setState({errors: errors });
    }
}
    }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    let obj={email}
     console.log(obj)
 postData("/login",obj)
 console.log(obj)
  };

  return (
    <div className="popup" style={{width:"100%"}}>
        <div style={{fontSize:"large", float:"right"}}>
          {props.time==undefined?  <Link to={`/home/${props.location1}/Movies`}>
         <button className="btn btn-outline-dark">X</button></Link>:
            <Link to={`/home/${props.location1}/Movies/${props.time}?q=${props.q}&room=${props.room}&date=${props.date}`}>
         <button className="btn btn-outline-dark">X</button></Link>}</div> <br />
         <br />
<App location1={props.location1}/>
      <form className="popup__form" onSubmit={handleSubmit}>
         
      
        <label className="popup__label" htmlFor="email">
          Email:
        </label>
        <input
          className="popup__input"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      
        
        <button className="popup__button" type="submit" style={{width:"90px",text:"center"}}>
          Sign in
        </button>

      </form>
    </div>
  );
};

export default LoginPopup;
