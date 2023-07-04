import React, { Component } from "react";
import queryString from 'query-string'
import { Link } from "react-router-dom"; 
import { FaMobileAlt,FaHamburger } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import logo from "./IMge/logo.png"
import authSys from "./services/authSys";
import { connect } from "react-redux";
import http from "./services/httpServer"
import headPanelOptionscb from "./navseat";
class Seat extends Component{ 
    state = {
Filter: [{range:"0-100", price: 90},
{range:"101-200", price: 150},
{range:"201-300", price: 250},
{range:"More than 300", price: 390},

   ], 
FilterShow: ["Morning",
  "Afternoon",
   "Evening",
   "Night"], 
date: [{day:"Tue" ,date:24, month:"March"},
{day:"wed" ,date:25, month:"March"},
{day:"Thu" ,date:26, month:"March"},], 
   theater:[],
   date2:{day:"Tue" ,date:24, month:"March"},
   
                                                           Show:[],
                                                           Price:[],
                                                           pr:[]
}


async fetchData() {
 
    let response = await http.get("/Hall");
     let response1 = await http.get(`/home/location/Movies/${this.props.queryParams.q}`);
    
    console.log("response",response);
    console.log("response1",response1);
    let {data} =response; 
    console.log(data);
    this.setState({ theater: data,M:response1.data});}
  
    componentDidMount(){
  this.fetchData();}
  Edit=()=>{
  
  }
  componentDidUpdate(prevProps, prevState){
  if (prevProps!==this.props)this.fetchData();}

   
handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
let c='' 
 
     s1[input.name] = this.updatecbs(input.checked,input.value,s1[input.name])
   
   s1.pr=s1.Price
      this.setState(s1);
    };
    
    async   postData(url, obj) {
  
    let response = await http.post(url, obj);
  


 

    }
date=(a)=>{
    let s1={...this.state}
    s1.date2=s1.date[a]
this.setState(s1)
}
   
          updatecbs=(checked,value,arr)=>{
              if(checked) arr.push(value)
              else{
                  let index=arr.findIndex((ele)=>ele==value)
                  if(index>=0)arr.splice(index,1)
              }
              return arr}

              ticktlog=(a,b)=>{
let date=this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month
                console.log("date",date)
                let stu=this.state.theater.filter((st)=>st.location==this.props.location1)
                let arr={...stu[a],Ticketdate:date,showtime:[stu[a].time[b].time]}
                this.postData("/ticketdata",arr)
console.log(arr)
              }
              filterParam1= (arr, name,values) => {

                if (!values) return arr;
                let valuesArr = values.split(",");
                console.log(valuesArr)
                let arr1 = arr.filter((a1) => a1.Price.find((st)=>st==values));
                console.log(arr1)
                return arr1;
                
                };
              filterParam2= (arr, name,values) => {
          
                if (!values) return arr;
                let valuesArr = values.split(",");
                console.log(valuesArr)
                let arr1 = arr.filter((a1) => a1.Show.find((st)=>valuesArr.find((st1)=>st==st1)));
                console.log(arr1)
                return arr1;
                
                };

                filterParams = (arr, queryParams) => {
                  let { Show, Price} = queryParams;
              
              arr = this.filterParam2(arr, "Show", this.state.Show);
              
              arr = this.filterParam1(arr, "Price", this.state.Price);
              
              
              console.log(arr)
              
              return arr;
              }
               
              addToQueryString = (str, paramName, paramValue)=> paramValue
              ? str
              ? `${str}&${paramName}=${paramValue}`
              : `${paramName}=${paramValue}`
              : str;
          makeSearchString = (options) => {
          let {Price,Show } = options;
          console.log("options",options)
          let searchStr = "";
          searchStr = this.addToQueryString(searchStr, "Show", Show);
          searchStr = this.addToQueryString(searchStr, "Price", Price);
      
          
          return searchStr;
          };
          callURL= (url, options) => {
            let searchString = this.makeSearchString(options);
            this.props.history.push({ pathname: url, search: searchString.toString(",")})
            }
render() {
    let {M}=this.state
   let stu=this.state.theater.filter((st)=>st.location==this.props.location1)
  
   let filter=this.state.Price.length==0?stu:stu.filter((a1)=>a1.time.find((st)=>this.state.Price.find((s1)=>s1==st.Price)))
   let filter2=this.state.Price.length==0?filter:filter.filter((a1)=>a1.time.find((st)=>this.state.Price.find((s1)=>st.price==300?st.Price>s1:"")))
let   filter1=this.state.Show.length==0?filter:filter.filter((a1)=>a1.time.find((st)=>this.state.Show.find((s1)=>st.t==s1)))
console.log(filter)


     let {location1,Movies} = this.props;
     let data=[]
     let arr={...M}
     data.push(arr.Genre)


 return (<React.Fragment>
  <div className="head bg-dark" style={{height:"100px"}}>
     <h1 className="text-white " style={{marginLeft:"150px"}} >{this.props.mov}</h1>
     
     

     </div>
 <div className="head bg-light" style={{height:"100px",background:"light"}}>
  
    <div className="row">
<div className="col-6" >
        {this.state.date.map((st,index)=>
        st.day==this.state.date2.day?
       
<button className="btn btn-danger m-1" onClick={()=>this.date(index)}>{st.day} &nbsp;
        <b>{st.date}</b>&nbsp;
        {st.month}</button>
      :

        <button className="btn btn-light m-1" onClick={()=>this.date(index)}>{st.day} &nbsp;
        <b>{st.date}</b>&nbsp;
        {st.month}
        </button>
      
       )}
        </div>
        
       
        <div className="col-1">
        <nav className="navbar navbar-expand-sm navbar-light" >
        <ul class="nav navbar-nav" >
        <li class="dropdown bg-light">
          <a href="#" className="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true"
           aria-expanded="false"  style={{textDecoration:"none"}}>
            <h style={{fontSize:"large"}} onChange={this.handleChange} ><b style={{background:"white",color:"black",fontWeight:"normal"}}>Filter Price</b></h></a>
          <ul class="dropdown-menu">
          {this.state.Filter.map((n1) => (<React.Fragment>
            <a class="dropdown-item" href="#">  <input type="checkbox" name="Price" id=""  onClick={this.handleChange} value={n1.price}/> &nbsp;
<b >{n1.range}</b></a>
</React.Fragment>
))}
          </ul>
        </li>
      </ul>
      </nav>
     
        </div>
        <div className="col-3">
       
       </div>
        <div className="col-1">
        <nav className="navbar navbar-expand-sm navbar-light" >
        <ul class="nav navbar-nav navbar-light" >
        <li class="dropdown bg-light">
          <a href="#" className="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true"
           aria-expanded="false"  style={{textDecoration:"none"}}>
            <h style={{fontSize:"large"}} onChange={this.handleChange} ><b style={{background:"white",color:"black",fontWeight:"normal"}}>FilterShow </b></h></a>
          <ul class="dropdown-menu">
          {this.state.FilterShow.map((n1) => (<React.Fragment>
            <a class="dropdown-item" href="#">  <input type="checkbox" name="Show" id=""  onClick={this.handleChange} value={n1}/> &nbsp;
<b >{n1}</b></a>
</React.Fragment>
))}
          </ul>
        </li>
      </ul>
      </nav>
       
  </div>
    </div><br />
   

    {filter1.map((st1,index)=>
    <div className="row">
<div className="col-4">
<div className="row">
    <div className="col-2 text-center"><AiOutlineHeart style={{fontSize:"30px"}}/></div>
    <div className="col-10"><b>{st1.room}</b><br />
    <FaMobileAlt style={{color:"#2dc492"}}/>
    <b style={{color:"#2dc492",fontWeight:"normal"}}>M-Ticket</b>{"  "}
                {"  "}   {"  "}  
                <FaHamburger style={{color:"yellowgreen"}}></FaHamburger>
           <b style={{color:"yellowgreen",fontWeight:"normal"}}> Food and Beverages</b> 
    </div>
    </div>

</div>

<div className="col-5">

    {st1.time.map((st,index1)=>
   this.state.Show[0]===st.t?(<Link to={`/home/${location1}/${Movies}/${index}?q=${this.props.M.Title}&date=${this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month}&room=${st1.room}`}>
        <button type="button" className="btn btn-light  text-primary m-1 " data-bs-toggle="tooltip" data-bs-placement="top" title={"Gold:RS "+st.Price+",Recyliner:RS 450"} 
        onClick={()=>this.ticktlog(index,index1)
        } style={{borderColor:"black"}}>
  {st.time}</button></Link>):this.state.Show[1]===st.t?
  
  (<Link to={`/home/${location1}/${Movies}/${index}?q=${this.props.M.Title}&date=${this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month}&room=${st1.room}`}>
        <button type="button" className="btn btn-light  text-primary m-1 " data-bs-toggle="tooltip" data-bs-placement="top" title={ "Gold:RS "+st.Price+",Recyliner:RS 450"} 
        onClick={()=>this.ticktlog(index,index1)
        } style={{borderColor:"black"}}>
  {st.time}</button></Link>):this.state.Show[2]===st.t?
  
  (<Link to={`/home/${location1}/${Movies}/${index}?q=${this.props.M.Title}&date=${this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month}&room=${st1.room}`}>
        <button type="button" className="btn btn-light  text-primary m-1 " data-bs-toggle="tooltip" data-bs-placement="top" title={ "Gold:RS "+st.Price+",Recyliner:RS 450"} 
        onClick={()=>this.ticktlog(index,index1)
        } style={{borderColor:"black"}}>
  {st.time}</button></Link>)
  :this.state.pr[0]==st.Price?
    
  (<Link to={`/home/${location1}/${Movies}/${index}?q=${this.props.M.Title}&date=${this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month}&room=${st1.room}`}>
        <button type="button" className="btn btn-light  text-primary m-1 " data-bs-toggle="tooltip" data-bs-placement="top" title={ "Gold:RS "+st.Price+",Recyliner:RS 450"} 
        onClick={()=>this.ticktlog(index,index1)
        } style={{borderColor:"black"}}>{console.log("dflk",this.state.pr[0]==st.Price)}
  {st.time}</button></Link>)
  
  :this.state.pr[1]==st.Price?
    
  (<Link to={`/home/${location1}/${Movies}/${index}?q=${this.props.M.Title}&date=${this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month}&room=${st1.room}`}>
        <button type="button" className="btn btn-light  text-primary m-1 " data-bs-toggle="tooltip" data-bs-placement="top" title={ "Gold:RS "+st.Price+",Recyliner:RS 450"} 
        onClick={()=>this.ticktlog(index,index1)
        } style={{borderColor:"black"}}>{console.log("dflk",this.state.pr[0]==st.Price)}
  {st.time}</button></Link>)
  
  :this.state.pr[2]==st.Price?
    
  (<Link to={`/home/${location1}/${Movies}/${index}?q=${this.props.M.Title}&date=${this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month}&room=${st1.room}`}>
        <button type="button" className="btn btn-light  text-success m-1 " data-bs-toggle="tooltip" data-bs-placement="top" title={ "Gold:RS "+st.Price+",Recyliner:RS 450"} 
        onClick={()=>this.ticktlog(index,index1)
        } style={{borderColor:"black"}}>{console.log("dflk",this.state.pr[0]==st.Price)}
  {st.time}</button></Link>)
  :this.state.pr==[] && this.state.Show==[] ||this.state.pr==undefined&&this.state.Show==undefined||
  this.state.pr.length==0&&this.state.Show.length==0
  ? (<Link to={`/home/${location1}/${Movies}/${index}?q=${this.props.M.Title}&date=${this.state.date2.day+" "+this.state.date2.date+" "+this.state.date2.month}&room=${st1.room}`}>
  <button type="button" className="btn btn-light  text-success m-1 " data-bs-toggle="tooltip" data-bs-placement="top" title={ "Gold:RS "+st.Price+",Recyliner:RS 450"} 
  onClick={()=>this.ticktlog(index,index1)
  } style={{borderColor:"black"}}>{console.log("dflk",this.state.pr[0]==st.Price)}
{st.time}</button></Link>):""
  )}
<li >Cancellation available</li>
</div>


    </div>
    
    )}
      
    </div></React.Fragment>
);
}}
    export default  Seat;