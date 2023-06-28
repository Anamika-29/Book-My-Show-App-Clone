

import React,{Component} from "react";
import { Switch,Route,Redirect } from "react-router-dom";

import NavBar3 from "./navbar (2)";

import MAINPAGE from "./MAINPAGE";

import TicketBook from "./ticketBook";
import Ticket from "./ticket";

import LoginPopup from "./Login";
import AddPerson from "./editProf";
import Purchase from "./purchase";
import Help from "./Help";
import logout from "./Logout";
import BookAsmile from "./BookAsmile";
class MainComponent extends Component {
    state={ 
    location1:"",
    showPopup:true}
render() {
  let {showPopup}=this.state
console.log(showPopup)
return (<React.Fragment>
<NavBar3 showPopup={showPopup}/>  


    <Switch>
       <Route path="/home/login" render={(props) =><LoginPopup {...props} LoginPopup={LoginPopup} />}/>
   <Route path="/home/:location1/:Movies/:time/Payment" render={(props) =><TicketBook {...props} TicketBook={TicketBook} />}/>
    <Route path="/home/:location1/:Movies/:time" render={(props) =><Ticket {...props} Ticket={Ticket} />}/>
    <Route path="/home/:location1/:Movies" render={(props) =><MAINPAGE {...props} MAINPAGE={MAINPAGE} />}/>
    <Route path="/home/:location1" render={(props) =><MAINPAGE {...props} MAINPAGE={MAINPAGE} />}/>
    <Route path="/myProfile/Edit Profile" render={(props) =><AddPerson {...props} AddPerson={AddPerson} />}/>
   
 
 
   
    

 <Route path="/myProfile/Purchase History" component={Purchase} />
 <Route path="/myProfile/→BookASmile" component={BookAsmile} />
 <Route path="/myProfile/ Sign Out" component={logout} />
 <Route path="/myProfile/Help And Support" component={Help} />






</Switch>

<Switch>




</Switch>



</React.Fragment>);
}
}
export default MainComponent