import React, { Component } from "react";
import authSys from "./services/authSys";
import http from "./services/httpServer";
import {FaUserCircle } from "react-icons/fa"
 class Help extends Component {
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
                
                    <div className="col-12 bg-light " style={{padding:"1rem",fontSize:"large"}}>
                        <h1 className="text-primary">What is the age limit to buy a ticket?</h1>
<p>-->There is no age limit. 
<br />


Children are allowed but a valid ticket needs to be purchased for kids above 5 years.

</p><br />
<h1 className="text-primary">
What is BookASmile?</h1>


<p>-->BookASmile is a charity initiative run by India's leading online ticketing platform BookMyShow. Created with a vision to support special causes and enrich the lives of the less fortunate across India through the medium of Entertainment-led Experiences.

<br />

Want to know more about our work? Check out this space:
<br />


Web page:<b className="text-primary"> https://in.bookmyshow.com/donation/</b> <br />

Facebook: <b className="text-primary">https://www.facebook.com/bookasmile2015/</b> <br />

Instagram:<b className="text-primary">https://www.instagram.com/bookasmileindia/</b> </p>

<h1 className="text-primary">Cancellation of a ticket</h1> 
<p>
<li>  We do have quite a few cinemas who now provide cancellation of confirmed tickets and it will reflect under ‘Your Orders’ on the app/website.
</li>
<br />
<li>
If you do not see an option to cancel the tickets under <b className="text-primary">‘Your Orders’</b> section, make sure you're logged in via the same Email ID/Contact number used to book the tickets.
</li>
<br />
<li>
If the cancellation option still does not appear, chances are that the cinema you've booked for does not provide the cancellation of confirmed tickets.
</li>
<br />
<li>
Whilst booking the tickets, just tap on the cinema name, if you see 'Cancellation Available' under available facilities, you are the lucky one. Also, you may check the Email confirmation, it mentions if cancellation is available and the cut-off time. Cinemas allow cancellation of tickets between 20 minutes to 4 hours prior to showtime. (Differing from cinema to cinema).
</li>
<br />
<li>
When you select the 'Cancel booking' tab, you get to select between 'Refund to Original Payment Mode' and ' Refund to BMS Cash'. 
</li><br />
<li>
Refunds to source reflect within 5 to 7 working days, whereas BMS Cash reflects within a max 2 hours in your profile.
</li>
<br />

Note: In case you have redeemed a gift voucher while booking and canceled your tickets, the amount will be refunded to the same gift voucher. You may redeem it post 24 hours.
<br />


No longer, will you lose the entire amount but instead remain eligible for 75%/70%/50% of the ticket amount to be refunded depending on cancellation policy of that particular cinema.
<br />


NOTE: If an offer, offer code, loyalty points, etc have been applied to a booking, the transaction is deemed ineligible for cancellation
<br /></p>

<h1 className="text-primary">Did you find it helpful?<b className="text-primary"> Yes</b> <b className="text-primary">No</b></h1>
<b> For any assistance,  reach out to BookMyShow's Customer Support on <b className="text-primary">+91(022)-61445050</b> or <br /> 
write to us on <b className="text-primary">[bookmyshowhelpandsupport@bookmyshow.com]</b></b>
</div>
                   
                </div>
        
            </div>
            )}}
            export default Help
