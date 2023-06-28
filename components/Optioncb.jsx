import React, { Component } from "react"; 
import queryString from "query-string";
class LeftPanelOptionscb extends Component {
    state={
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
    handleChange = (e) => {
        let { currentTarget: input } = e; 
        let options = {...this.props.options };
       
        input.name=="Language"?
        options[input.name]= this.updatecbs(input.checked,input.value,this.state.Language):
        options[input.name] =input.value;
        console.log(options)
     
        this.props.onOptionChange(options)
        };
        updatecbs=(checked,value,arr)=>{
            if(checked) arr.push(value)
            else{
                let index=arr.findIndex((ele)=>ele==value)
                if(index>=0)arr.splice(index,1)
            }
            return arr}
      

    render() {
            let{options} = this.props;
        let {Language,Genre,format  } = options;

        return (<React.Fragment>

      <ul class="nav navbar-nav navbar-right text-center bg-light" >
       
        <li class="dropdown" style={{width:"200px",}}>
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{width:"100%",color:"black",fontSize:"large",textDecoration:"none"}}>Language </a>
          <ul class="dropdown-menu">
            {this.state.LanguageData.map((st)=>
 <li style={{paddingLeft:"10px"}}> <a class="dropdown-item " href="#" ><input type="checkbox" name="Language" id=""  onClick={this.handleChange} value={st}/>
 <b className="text-dark"> {
    st
 }</b></a></li>)}
          
          </ul>
        </li>
        <br />
        <li class="dropdown " style={{width:"200px"}}>
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{width:"100%",color:"black",fontSize:"large",textDecoration:"none"}}>Format </a>
          <ul class="dropdown-menu">
            {this.state.formatData.map((st)=>
 <li style={{paddingLeft:"10px"}} > <a class="dropdown-item" href="#"><input type="radio" name="format" id=""  onClick={this.handleChange} value={st}/>
 <b className="text-dark"> {
    st
 }</b></a></li>)}
          
          </ul>
        </li>
        <br />
        <li class="dropdown " style={{width:"200px"}}>
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{width:"100%",color:"black",fontSize:"large",textDecoration:"none"}}>Genre </a>
          <ul class="dropdown-menu">
            {this.state.GenreData.map((st)=>
 <li style={{paddingLeft:"10px"}}> <a class="dropdown-item" href="#"><input type="radio" name="Genre" id=""  onClick={this.handleChange} value={st}/>
 <b className="text-dark"> {
    st
 }</b></a></li>)}
          
          </ul>
        </li>
        



      </ul>
 


                

       
      </React.Fragment>
        )}}
        export default LeftPanelOptionscb;