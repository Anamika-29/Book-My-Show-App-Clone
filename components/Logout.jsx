import React, { Component } from "react";
import authSys from "./services/authSys";
 class logout extends Component {
state = {

};

componentDidMount(url, obj) {
authSys.logout();
window.location="/home/Banglore/movies";
    }

render() {
   
    return ;
}}
export default logout;