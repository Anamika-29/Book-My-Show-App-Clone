import React, { Component } from "react";
import authSys from "./services/authSys";
import http from "./services/httpServer";
import {FaUserCircle } from "react-icons/fa"
 class Purchase extends Component {
    state = {
       view:0,
       ticket:[]
      
 };
 async fetchData() {
    let response = await http.get(`/ticket2`);

    console.log("response", response);

    let { data } = response;
    console.log(data);
    this.setState({ ticket: data});
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) this.fetchData();
  }

        view=(a)=>{
           let s1={...this.state}
           s1.view=a
           this.setState(s1)
        }
    render() { 
const user=authSys.getUser()
   let stu=this.state.ticket.filter((st)=>st.email==user.email)
   console.log(stu)
    let {index} = this.props.match.params;
    return(
      <React.Fragment>

                <div className="row bg-dark" style={{width:"100%" ,height:"200px"}}>
              <div className="col-5" style={{marginTop:"180px"}}>
                  <b className="text-secondary" >BOOKING HISTORY</b></div>
                  <div className="col-5" style={{marginTop:"180px"}}>
                  <b className="text-secondary" >Setting</b></div>
                </div>
            <div className="row bg-secondary" style={{widows:"100%" ,height:"400px"}}>
           
          <h2 className="text-white" style={{fontFamily:"DanDancing Scriptcing",marginTop:"58px"}}><i>
           You don't seem to have any recent bookings.  </i> 

           
           <br />
           <br />
         {this.state.view==1?<button className="btn btn-secondary btn-lg text-danger" onClick={()=>this.view(0)} 
           style={{paddingLeft:"30px",paddingRight:"30px",fontSize:"small",text:"danger"}}>Hide all bookings</button>:
               <button className="btn btn-secondary btn-lg text-danger" onClick={()=>this.view(1)}
               style={{paddingLeft:"30px",paddingRight:"30px",fontSize:"small"}}>View all bookings</button>}
              {this.state.view==1? <div className="row bg-light" >
                <div className="row text-danger " style={{fontSize:"large",fontWeight:"bold"}}>
                    <div className="col-2"> Movies</div>
                    <div className="col-4">Hall</div>
                    <div className="col-2">Amount</div>
                    <div className="col-2">Seats</div>
                    <div className="col-2">Date</div>
                </div>
                <div className="row text-dark " style={{fontSize:"small",fontWeight:"bold"}}>
                    {stu.map((st)=><React.Fragment>
                   
                    <div className="col-2">{st.Movies}</div>
                  
                    <div className="col-4">{ st.MoviesHall}</div>
                  <div className="col-2">{ st.amount}</div>
                  <div className="col-2">{ st.ticket.map((st1)=>st1.seat).join(" ")}</div>
                  <div className="col-2">{st.time[0].Ticketdate}</div></React.Fragment>)}
               
               
                </div>
               </div>:""}
                
               
               </h2>
      
<p className="bg-secondary" style={{widows:"100%" ,marginTop:"58px",fontWeight:"bold"}}>Bookmyshow respects your privacy and recognizes the need to protect your personal information (any information by which you can be identified, such as name, address, financial information, and telephone number) you share with us. We would like to assure you that we follow appropriate standards when it comes to protecting your privacy on our web sites and applications</p>




     
            </div>
        </React.Fragment>
            )}}
            export default Purchase
