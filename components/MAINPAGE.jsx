import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider"
import { FaArrowCircleRight,FaArrowCircleLeft } from 'react-icons/fa';
import NavBar1 from "./2nav";
import LeftPanelOptionscb from "./Optioncb";
import Seat from "./seat";
import LoginPopup from "./Login";
import authSys from "./services/authSys";
import logo from "./IMge/logo.png"
import http from "./services/httpServer";
class MAINPAGE extends Component{
  state={
    page:1,
    images : [
      { url: "https://i.ibb.co/ZGsJ3dh/jio-mami-21st-mumbai-film-festival-with-star-2019-02-09-2019-10-58-45-992.png" },
      { url: "https://i.ibb.co/wRr7W1P/hustlers-01-10-2019-05-09-55-486.png" },
      { url: "https://i.ibb.co/qFWPRpF/laal-kaptaan-16-10-2019-12-48-06-721.jpg" },],
      Movies:[],
      user:[],
      Language:[],
formatData
:
["2D", "3D", "4DX"],
formatTrue
:
true,


GenreData
:
["Action", "Adventure", "Biography", "Comedy"],
GenreTrue
:
true,

langTrue
:
true

,
LanguageData
:
["Hindi", "English", "Punjabi", "Tamil"]
     
  }
  async componentDidMount() {
    try{
    let response = await http.get("/Movies");
    console.log(response);
    let {data} =response; 
    console.log(data);
    this.setState({ Movies: data });}
    catch (ex) {
    if (ex. response) {
    let errMsg = `${ex.response.status} ${ex.response.statusText}`;
    this.setState({ errMsg: errMsg });
    }
    }
    }

    filterParam = (arr, name, values) => {

      if (!values) return arr;
      let valuesArr = values.split(",");
      console.log(valuesArr)
      let arr1 = arr.filter((a1) => valuesArr.find((val) =>a1[name]==val));
   
      return arr1;
      
      };
    filterParam1= (arr, name,values) => {

      if (!values) return arr;
      let valuesArr = values.split(",");
      console.log(valuesArr)
      let arr1 = arr.filter((a1) => a1.Genre.find((st)=>st==values));
      console.log(arr1)
      return arr1;
      
      };
    filterParam2= (arr, name,values) => {

      if (!values) return arr;
      let valuesArr = values.split(",");
      console.log(valuesArr)
      let arr1 = arr.filter((a1) => a1.Language.find((st)=>valuesArr.find((st1)=>st==st1)));
      console.log(arr1)
      return arr1;
      
      };

  next=(a)=>{
 console.log(a)
let s1={...this.state}
s1.page>3?s1.page=1:
s1.page=+s1.page+1
this.setState(s1)
  }
  callURL= (url, options) => {
    let searchString = this.makeSearchString(options);
    this.props.history.push({ pathname: url, search: searchString.toString(",")})
    }
    addToQueryString = (str, paramName, paramValue)=> paramValue
    ? str
    ? `${str}&${paramName}=${paramValue}`
    : `${paramName}=${paramValue}`
    : str;
makeSearchString = (options) => {
let {Language,format,Genre } = options;
let searchStr = "";
searchStr = this.addToQueryString(searchStr, "Language", Language);
searchStr = this.addToQueryString(searchStr, "format", format);
searchStr = this.addToQueryString(searchStr, "Genre", Genre);

return searchStr;
};
  
handleChange = (e) => {
  const { currentTarget: input } = e;
  let s1 = { ...this.state };
  input.name=="Language"?
   s1.options.Language= this.updatecbs(input.checked,input.value,s1.Language)
   :s1[input.name]=input.value
 console.log(s1.format)
 console.log(s1.Language)

    this.setState(s1);
  };
  filterParams = (arr, queryParams) => {
    let { Language, Genre,format} = queryParams;

arr = this.filterParam2(arr, "Language", Language);

arr = this.filterParam1(arr, "Genre", Genre);
arr = this.filterParam(arr, "format", format);

console.log(arr)

return arr;
}
 
        updatecbs=(checked,value,arr)=>{
            if(checked) arr.push(value)
            else{
                let index=arr.findIndex((ele)=>ele==value)
                if(index>=0)arr.splice(index,1)
            }
            return arr}

            handleOptionChange = (options) => { 
              let {location1,Movies} = this.props.match.params;
              this.callURL(`/home/${location1}/${Movies}`, options);
          };
render() {
  let queryParams = queryString.parse(this.props.location.search);
  let {location1,Movies,time} = this.props.match.params;
  let ar=this.filterParams(this.state.Movies,queryParams)
  console.log(ar)
  console.log(location1)
  console.log(Movies)
  const user=authSys.getUser()
let {page}=this.state

  let max=3
  let startindex=(page-1)*max


  let EndIndex=startindex>1?max+startindex:ar.length<max+startindex?ar.length-1:max
EndIndex= EndIndex>=ar.length?EndIndex=ar.length:max+startindex 

 let movies1=Movies==="Coming Soon"?ar.filter((st,index)=>st.ComingSoon===true):Movies===undefined?[]:ar.filter((st,index)=>st.ComingSoon!=true
 )
 let stu=queryParams.Search===undefined?movies1:movies1.filter((st,index)=>st.Title==queryParams.Search)
 
 let find=movies1.find((st)=>st.Title==queryParams.q)
console.log("stu",stu)

console.log(queryParams)
  return (

  
      <div className="example" style={{width:"100%"}}>
     {  queryParams.q===undefined?<React.Fragment>
        <div className="row text-center">
      <SimpleImageSlider
        width={1000}
        height={400}
        images={this.state.images}
        showBullets={true}
        showNavs={true}
        className="img-fluid"
        autoPlay={true}
       style={{margin:"auto"}}
        
      /> 
    
       
  

      <NavBar1 location={location1}/>
        <div >
         
            <div className="row bg-light">
              <div className="col-2">
              <div className="row">
              
                <div  class="col-12 text-center ml-4" style={{background: "white"}}>
                  <img    src="https://i.ibb.co/Hry1kDH/17443322900502723126.jpg" className="img-fluid" style={{width:"200px"}}/>
                 
                </div>
                  <br />
                  <div  class="col-12 text-center ml-4" style={{background: "white"}}>
                      <LeftPanelOptionscb
  options={queryParams}


onOptionChange={this.handleOptionChange}
  /> 
   
  
                     
                        
                   </div>
                   </div>
                   </div>
             <br />
            {/* <div className="col-1" style={{fontSize:"large",marginTop:"16rem"}} onClick={()=>this.next(-1)}><FaArrowCircleLeft/></div> */}
            <div className="col-10">
            <div className="row">
            {stu.map(( id ) => (
                
          <div className="col-2 bg-light"   >
            <Link to={`/home/${location1}/${Movies}?q=${id.Title}`} style={{textDecoration:"none",color:"black"}}>
            <div className="col-12">
            <img  src={id.Poster} alt="" srcset="" style={{width:"200px",height:"300px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
            <br /></div>
         <div className="col-12" style={{margin:"auto",background:"#000000",width:"200px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",color:"white"}}>
            <img  src="https://www.freepnglogos.com/uploads/red-star-png/red-star-star-red-clip-art-clkerm-vector-clip-art-online-7.png" alt="" srcset="" style={{width:"15px",height:"15px",marginBottom:"8px"}}/>
            &nbsp;  {id.imdbRating}/10{""} {""} &nbsp; &nbsp;{id.imdbVotes} votes</div>
            
            <div className="col-12">
           <b style={{fontSize:"medium",color:"black"}}>{id.Title}</b> <br />
           
           <b style={{fontSize:"small" ,color:"gray"}}>{id.Genre.join("/")} </b><br /> 
           
           <br />
           </div></Link>
          </div>
            ))}
                    {/* <div className="col-1" style={{fontSize:"large",margin:"5rem",marginTop:"15rem"}} onClick={()=>this.next(1)}><FaArrowCircleRight/></div> */}
                  </div>
                  </div>
            </div></div>
        
        </div>
         <div className="row" style={{background:"#000000",width:"100%"}}>
         <div className="col-5"><hr style={{color:"white"}}/></div>
         <div className="col-2"><img src={logo} alt="" srcset="" style={{width:"100px"}}/></div>

<div className="col-5"><hr style={{color:"white"}}/></div>
       </div>
       </React.Fragment>
        :<Seat mov={queryParams.q} M={find} location1={location1} Movies={Movies} queryParams={queryParams}/>}

       
   {queryParams.login=="yes"? <LoginPopup location1={location1} time={time} q={queryParams.q} room={queryParams.room} date={queryParams.date} />:[]} 
      </div>
    
  );
}
}

export default   MAINPAGE;





