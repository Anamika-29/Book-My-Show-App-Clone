import React, { Component } from "react";
import { Link } from "react-router-dom";
 class NavBar1 extends Component {
render() {
    let arr=["Now Showing" ,"Coming Soon", "Exclusive"]
 
   

return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" >
    <div>{""}</div>
    <a class="navbar-brand" href="#">Movies</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <Link class="nav-link" to={`/home/${this.props.location}/Now Showing`}>Now Showing</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to={`/home/${this.props.location}/Coming Soon`}>Coming Soon</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to={`/home/${this.props.location}/Exclusive`}>Exclusive</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)}}
export default NavBar1
//  {arr.map((st)=><li >
//         <Link className="nav-link" to={`/home/${this.props.location}/${st}`}>
//  <p className="text-dark">{st}</p>
// </Link>
// </li>)}