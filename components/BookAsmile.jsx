import React, { Component } from "react";
import authSys from "./services/authSys";
import http from "./services/httpServer";
import {FaUserCircle } from "react-icons/fa"
 class BookAsmile extends Component {
    state = {
       view:0,
       ticket:[]
      
 };
 async fetchData() {
    let response = await http.get(`/ticket`);

    console.log("response", response);

    let { data } = response;
    console.log(data);
    this.setState({ ticket:[ data[0] ]});
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

   
    let {index} = this.props.match.params;
    return(
        
            <div className="container ">
                <div className="row" >
                <img src="https://in.bmscdn.com/webin/static/book-a-smile/showcase/banner11.jpg" alt="" sizes="" srcset="" >


                </img>
                    <div className="col-12 bg-light " style={{padding:"1rem",fontSize:"large"}}>
                        
<h1 className="text-primary">
BookASmile</h1>


<p>-->BookASmile is a charity initiative run by India's leading online ticketing platform BookMyShow. Created with a vision to support special causes and enrich the lives of the less fortunate across India through the medium of Entertainment-led Experiences.

<br />



Want to know more about our work? Check out this space:
<br />


Web page:<a className="text-primary" href="https://in.bookmyshow.com/donation/"> https://in.bookmyshow.com/donation/</a> <br />

Facebook: <b className="text-primary">https://www.facebook.com/bookasmile2015/</b> <br />

Instagram:<b className="text-primary">https://www.instagram.com/bookasmileindia/</b> </p>

</div>
                   
                </div>
        
            </div>
            )}}
            export default BookAsmile
