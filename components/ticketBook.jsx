import React, { Component } from "react";

import { Link } from "react-router-dom";
import { BiSquareRounded } from "react-icons/bi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import queryString from "query-string";
import QRCode from "react-qr-code";
import authSys from "./services/authSys";
import { connect } from "react-redux";
import http from "./services/httpServer";
import { rows, rows2 } from "./data";
import "./col.css";
import Book1my from "./IMge/Book1my.jpg"
class TicketBook extends Component {
  state = {

  

    time2: "",
    theater: [],
    ticket:[]
  };
  async fetchData() {
    let response = await http.get(`/ticket1`);

    console.log("response", response);

    let { data } = response;
    console.log(data);
    this.setState({ ticket:data });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) this.fetchData();
  }
  async postData(url, obj) {
    let response = await http.post(url, obj);
  }
 
  back=()=>{
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    window.location=(`/home/${location1}/${Movies}`)
  }



 
  render() {
    let queryParams = queryString.parse(this.props.location.search);
 let vi=this.state.ticket== []?[]:this.state.ticket.map((st)=>
" Movie Name :"+st.Movies+
", Movie Hall:"+st.MoviesHall+
", Total Tickets:"+st.ticket.length+
", Tickets:"+st.ticket.map((st)=>st.seat)+
", Date :"+st.data+", Time"+st.time[0].showtime+
", Amount Paid :"+ st.amount
  )
  console.log("v1",vi)
  console.log("v1",this.state.ticket)
    return (
      <React.Fragment>
        <div className="container bg-dark" style={{ height: "100%" }}>
          <div className="row">
          <div className="col-1">
        <h2 className="text-white" style={{fontSize:"large",margin:"15px"}} onClick={()=>this.back()}><MdOutlineArrowBackIosNew /></h2> 
         </div>
          <div className="col-11">
          <h1
            className="text-white "
            style={{ margin: "4px", fontSize: "large" }}
          >
            {queryParams.q} <b style={{ float: "right" }}> <b className="col-1" onClick={()=>this.back1()}>
        X
         </b> </b>
          </h1>
          <h3
            className="text-white "
            style={{ margin: "4px", fontSize: "large" }}
          >
            {queryParams.room}{" "}
          </h3></div></div>
        </div>
        <div className="container">
        <div className="row">
            <div className="col-8">
       <img src={Book1my} alt="" />
       </div>
            <div className="col-4 border">
     {this.state.ticket.map((st)=>
     <div className="row ">
        <h3 className="text-danger">BOOKING SUMMARY</h3>
     <div className="col-6" ><b style={{fontSize:"small"}}>Movie Name <br />
Movie Hall<br />
<br />
Total Tickets<br />
Tickets<br />
Date <br />
Time <br /></b>
<br /> </div>
     <div className="col-6"><b style={{fontSize:"large",float:"right"}}>{st.Movies} </b><br />
     <b style={{fontSize:"small",float:"right"}}>{st.MoviesHall} </b><br />
     <br />
     <b style={{fontSize:"small",float:"right"}}> {st.ticket.length} </b><br />
     <b style={{fontSize:"small",float:"right"}}> {st.ticket.map((st)=>st.seat).join(" ")} </b><br />
     <b style={{fontSize:"small",float:"right"}}>{st.data} </b><br />
     <b style={{fontSize:"small",float:"right"}}>{st.time[0].showtime} </b><br />  
   </div> 
    <b style={{background:"#AEF359",fontSize:"large"}}>
    Amount Paid <b style={{marginLeft:"80px",float:"right"}}>Rs.{st.amount}</b></b>
    
     </div>
     
     
     )}
       </div>

       <div className="row" >
        <div className="col-8" style={{  width: "100%" }}></div>
        <div className="col-4" style={{marginLeft:"70%" ,marginTop:"50px",maxWidth: 164, width: "100%",float:"right" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={vi.toString()}
    viewBox={`0 0 256 256`}
    />
   
    </div> 
    <p style={{marginLeft:"70%" ,marginTop:"50px" }}>You can cancel the tickets 4 hour(s) before the show.<br/>
     Refunds will be done according to Cancellation Policy.</p>
</div>
       </div>
       </div>
      </React.Fragment>
    );
  }
}
export default TicketBook;
