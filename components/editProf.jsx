import React, { Component } from "react";
import authSys from "./services/authSys";
import http from "./services/httpServer";
import {FaUserCircle } from "react-icons/fa"
 class AddPerson extends Component {
    state = {
     
       users:{first_name:"",last_name:"",email:"",Married:""},
        Departments: ["Yes","No"],
      
 };
 async componentDidMount() {
    
    let response = await http.get("/userdata");
    console.log(response);
    let {data} =response; 
let user = data?{first_name:"",last_name:"",email:"",Married:""}:data[0];
console.log(user)
   
    this.setState({users:user});
  
    }


  
    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = {...this.state};
        console.log(s1);
        console.log("Inside handleChange",s1.users)
      
        s1.users[input.name] = input.value;
        this.setState(s1);
        };
   
       
             
    handleSubmit = (e) => {
        e.preventDefault();
        let {location1} = this.props.match.params;
        console.log(this.state.users)
        const user=authSys.getUser()
        let arr={...this.state.users,email:user.email}
        console.log(arr)
         this.postData("/userdata",arr);
          this.props.history.push(`/home`);
    };
    async   postData(url, obj) {
       
        let response = await http.post(url, obj);
       
    
        }
    render() { 
           let {cities,users={},Departments,Exp}=this.state;
           console.log(users)
           let user=authSys.getUser();
    const {first_name,last_name,Married}=users;
   
    let {index} = this.props.match.params;
    return(
        
        <div style={{marginLeft:"150px",marginRight:"150px"}}>
        <div className="row bg-dark">
          <div className="col text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/61/61205.png" alt="" srcset="" style={{width:"100px",margin:"20px"}} />
            <b className="text-white" style={{fontSize:"large"}}>{user.email}</b>
          </div>
        </div>
        <div className="form-group">
          <div className="bg-secondary" style={{width:"100%", height:"50px"}}></div>
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            placeholder="Enter First Name"
            value={user.first_name !== undefined ? user.first_name : first_name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            placeholder="Enter Last Name"
            value={user.last_name !== undefined ? user.last_name : last_name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={this.handleChange}
            readOnly
          />
        </div>
      
        <div className="form-group">
          <label className="font-weight-bold">Choose Married</label> <br />
          {Departments.map((d1) => (
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="Married"
                value={Married === "" || Married === undefined ? "" : Married}
                checked={Married === d1}
                onChange={this.handleChange}
              />
              <label className="form-check-label">{d1}</label>
            </div>
          ))}
        </div>
      
        <button className="btn btn-sm btn-primary" onClick={this.handleSubmit}>
          {index ? "Update" : "Submit"}
        </button>
      </div>
      
            )}}
            export default AddPerson
