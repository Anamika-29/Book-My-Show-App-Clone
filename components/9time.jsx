import React, { Component } from "react";

import { Link } from "react-router-dom";
import { BiSquareRounded } from "react-icons/bi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import queryString from "query-string";
import authSys from "./services/authSys";
import { connect } from "react-redux";
import http from "./services/httpServer";
import { rows, rows2 } from "./data";
import "./col.css";
import Icon from "./screen";
import LoginPopup from "./Login";
class Ticket1 extends Component {
  state = {
   
    A: [
      { number: 1, seat: "A1", isSelected: false, isReserved: false },
      { number: 2, seat: "A2", isSelected: false, isReserved: false },
      { number: 3, seat: "A3", isSelected: false, isReserved: false },
      { number: 4, seat: "A4", isSelected: false, isReserved: false },
      { number: 5, seat: "A5", isSelected: false, isReserved: false },
      { number: 6, seat: "A6", isSelected: false, isReserved: false },
      { number: 7, seat: "A7", isSelected: false, isReserved: false },
      { number: 8, seat: "A8", isSelected: false, isReserved: false },
      { number: 9, seat: "A9", isSelected: false, isReserved: false},
      { number: 10, seat: "A10", isSelected: false, isReserved: false},
      { number: 11, seat: "A11", isSelected: false, isReserved: false},
      { number: 12, seat: "A12", isSelected: false, isReserved: false },
      { number: 13, seat: "A13", isSelected: false, isReserved: false },
      { number: 14, seat: "A14", isSelected: false, isReserved: false },
      { number: 15, seat: "A15", isSelected: false, isReserved: false },
    ],
    B: [
      { number: 1, seat: "B1", isSelected: false, isReserved: false },
      { number: 2, seat: "B2", isSelected: false, isReserved: false },
      { number: 3, seat: "B3", isSelected: false, isReserved: false },
      { number: 4, seat: "B4", isSelected: false, isReserved: false },
      { number: 5, seat: "B5", isSelected: false, isReserved: false },
      { number: 6, seat: "B6", isSelected: false, isReserved: false },
      { number: 7, seat: "B7", isSelected: false, isReserved: false },
      { number: 8, seat: "B8", isSelected: false, isReserved: false },
      { number: 9, seat: "B9", isSelected: false, isReserved: false},
      { number: 10, seat: "B10", isSelected: false, isReserved: false},
      { number: 11, seat: "B11", isSelected: false, isReserved: false},
      { number: 12, seat: "B12", isSelected: false, isReserved: false },
      { number: 13, seat: "B13", isSelected: false, isReserved: false },
      { number: 14, seat: "B14", isSelected: false, isReserved: false },
      { number: 15, seat: "B15", isSelected: false, isReserved: false },
      { number: 16, seat: "B16", isSelected: false, isReserved: false },
      { number: 17, seat: "B17", isSelected: false, isReserved: false },
    ],
    C1: [
      { number: 1, seat: "C1", isSelected: false, isReserved: false },
      { number: 2, seat: "C2", isSelected: false, isReserved: false },
      { number: 3, seat: "C3", isSelected: false, isReserved: false },
      { number: 4, seat: "C4", isSelected: false, isReserved: false },
      { number: 5, seat: "C5", isSelected: false, isReserved: false },
      { number: 6, seat: "C6", isSelected: false, isReserved: false },
    ],
    C2: [
      { number: 7, seat: "C7", isSelected: false, isReserved: false },
      { number: 8, seat: "C8", isSelected: false, isReserved: false },
      { number: 9, seat: "C9", isSelected: false, isReserved: false},
      { number: 10, seat: "C10", isSelected: false, isReserved: false},
      { number: 11, seat: "C11", isSelected: false, isReserved: false},
      { number: 12, seat: "C12", isSelected: false, isReserved: false },
      { number: 13, seat: "C13", isSelected: false, isReserved: false },
      { number: 14, seat: "C14", isSelected: false, isReserved: false },
      { number: 15, seat: "C15", isSelected: false, isReserved: false },
    ],
    C3: [
      { number: 16, seat: "C16", isSelected: false, isReserved: false },
      { number: 17, seat: "C17", isSelected: false, isReserved: false },
      { number: 18, seat: "C18", isSelected: false, isReserved: false },
      { number: 19, seat: "C19", isSelected: false, isReserved: false },
      { number: 20, seat: "C20", isSelected: false, isReserved: false },
      { number: 21, seat: "C21", isSelected: false, isReserved: false },
      { number: 22, seat: "C22", isSelected: false, isReserved: false },
      { number: 23, seat: "C23", isSelected: false, isReserved: false },
      { number: 24, seat: "C24", isSelected: false, isReserved: false },
    ],

    D1: [
      { number: 1, seat: "D1", isSelected: false, isReserved: false },
      { number: 2, seat: "D2", isSelected: false, isReserved: false },
      { number: 3, seat: "D3", isSelected: false, isReserved: false},
      { number: 4, seat: "D4", isSelected: false, isReserved: false },
      { number: 5, seat: "D5", isSelected: false, isReserved: false },
      { number: 6, seat: "D6", isSelected: false, isReserved: false },
    ],
    D2: [
      { number: 7, seat: "D7", isSelected: false, isReserved: false },
      { number: 8, seat: "D8", isSelected: false, isReserved: false },
      { number: 9, seat: "D9", isSelected: false, isReserved: false},
      { number: 10, seat: "D10", isSelected: false, isReserved: false},
      { number: 11, seat: "D11", isSelected: false, isReserved: false},
      { number: 12, seat: "D12", isSelected: false, isReserved: false },
      { number: 13, seat: "D13", isSelected: false, isReserved: false },
      { number: 14, seat: "D14", isSelected: false, isReserved: false },
      { number: 15, seat: "D15", isSelected: false, isReserved: false },
    ],
    D3: [
      { number: 16, seat: "D16", isSelected: false, isReserved: false},
      { number: 17, seat: "D17", isSelected: false, isReserved: false },
      { number: 18, seat: "D18", isSelected: false, isReserved: false },
      { number: 19, seat: "D19", isSelected: false, isReserved: false },
      { number: 20, seat: "D20", isSelected: false, isReserved: false},
      { number: 21, seat: "D21", isSelected: false, isReserved: false },
      { number: 22, seat: "D22", isSelected: false, isReserved: false },
      { number: 23, seat: "D23", isSelected: false, isReserved: false },
      { number: 24, seat: "D24", isSelected: false, isReserved: false },
    ],
    E1: [
      { number: 1, seat: "E1", isSelected: false, isReserved: false },
      { number: 2, seat: "E2", isSelected: false, isReserved: false},
      { number: 3, seat: "E3", isSelected: false, isReserved: false },
      { number: 4, seat: "E4", isSelected: false, isReserved: false },
      { number: 5, seat: "E5", isSelected: false, isReserved: false },
      { number: 6, seat: "E6", isSelected: false, isReserved: false },
    ],
    E2: [
      { number: 7, seat: "E7", isSelected: false, isReserved: false },
      { number: 8, seat: "E8", isSelected: false, isReserved: false },
      { number: 9, seat: "E9", isSelected: false, isReserved: false},
      { number: 10, seat: "E10", isSelected: false, isReserved: false },
      { number: 11, seat: "E11", isSelected: false, isReserved: false},
      { number: 12, seat: "E12", isSelected: false, isReserved: false },
      { number: 13, seat: "E13", isSelected: false, isReserved: false },
      { number: 14, seat: "E14", isSelected: false, isReserved: false },
      { number: 15, seat: "E15", isSelected: false, isReserved: false },
    ],
    E3: [
      { number: 16, seat: "E16", isSelected: false, isReserved: false },
      { number: 17, seat: "E17", isSelected: false, isReserved: false},
      { number: 18, seat: "E18", isSelected: false, isReserved: false },
      { number: 19, seat: "E19", isSelected: false, isReserved: false },
      { number: 20, seat: "E20", isSelected: false, isReserved: false },
      { number: 21, seat: "E21", isSelected: false, isReserved: false },
      { number: 22, seat: "E22", isSelected: false, isReserved: false },
      
    ],
    F1: [
      { number: 1, seat: "F1", isSelected: false, isReserved: false },
      { number: 2, seat: "F2", isSelected: false, isReserved: false },
      { number: 3, seat: "F3", isSelected: false, isReserved: false },
      { number: 4, seat: "F4", isSelected: false, isReserved: false},
      { number: 5, seat: "F5", isSelected: false, isReserved: false },
      { number: 6, seat: "F6", isSelected: false, isReserved: false },
    ],
    F2: [
      { number: 7, seat: "F7", isSelected: false, isReserved: false },
      { number: 8, seat: "F8", isSelected: false, isReserved: false },
      { number: 9, seat: "F9", isSelected: false, isReserved: false},
      { number: 10, seat: "F10", isSelected: false, isReserved: false},
      { number: 11, seat: "F11", isSelected: false, isReserved: false },
      { number: 12, seat: "F12", isSelected: false, isReserved: false },
      { number: 13, seat: "F13", isSelected: false, isReserved: false},
      { number: 14, seat: "F14", isSelected: false, isReserved: false },
      { number: 15, seat: "F15", isSelected: false, isReserved: false },
    ],
    F3: [
      { number: 16, seat: "F16", isSelected: false, isReserved: false },
      { number: 17, seat: "F17", isSelected: false, isReserved: false},
      { number: 18, seat: "F18", isSelected: false, isReserved: false },
      { number: 19, seat: "F19", isSelected: false, isReserved: false },
      { number: 20, seat: "F20", isSelected: false, isReserved: false },
      { number: 21, seat: "F21", isSelected: false, isReserved: false },
      { number: 22, seat: "F22", isSelected: false, isReserved: false },
      
    ],
    G1: [
      { number: 1, seat: "G1", isSelected: false, isReserved: false },
      { number: 2, seat: "G2", isSelected: false, isReserved: false },
      { number: 3, seat: "G3", isSelected: false, isReserved: false },
      { number: 4, seat: "G4", isSelected: false, isReserved: false },
      { number: 5, seat: "G5", isSelected: false, isReserved: false},
      { number: 6, seat: "G6", isSelected: false, isReserved: false },
    ],
    G2: [
      { number: 7, seat: "G7", isSelected: false, isReserved: false},
      { number: 8, seat: "G8", isSelected: false, isReserved: false },
      { number: 9, seat: "G9", isSelected: false, isReserved: false },
      { number: 10, seat: "G10", isSelected: false, isReserved: false},
      { number: 11, seat: "G11", isSelected: false, isReserved: false},
      { number: 12, seat: "G12", isSelected: false, isReserved: false },
      { number: 13, seat: "G13", isSelected: false, isReserved: false },
      { number: 14, seat: "G14", isSelected: false, isReserved: false },
      { number: 15, seat: "G15", isSelected: false, isReserved: false },
    ],
    G3: [
      { number: 16, seat: "G16", isSelected: false, isReserved: false },
      { number: 17, seat: "G17", isSelected: false, isReserved: false },
      { number: 18, seat: "G18", isSelected: false, isReserved: false},

    ],
    H1: [
      { number: 1, seat: "H1", isSelected: false, isReserved: false},
      { number: 2, seat: "H2", isSelected: false, isReserved: false },
      { number: 3, seat: "H3", isSelected: false, isReserved: false },
      { number: 4, seat: "H4", isSelected: false, isReserved: false },
      { number: 5, seat: "H5", isSelected: false, isReserved: false },
      { number: 6, seat: "H6", isSelected: false, isReserved: false },
    ],
    H2: [
      { number: 7, seat: "H7", isSelected: false, isReserved: false },
      { number: 8, seat: "H8", isSelected: false, isReserved: false},
      { number: 9, seat: "H9", isSelected: false, isReserved: false},
      { number: 10, seat: "H10", isSelected: false, isReserved: false },
      { number: 11, seat: "H11", isSelected: false, isReserved: false},
      { number: 12, seat: "H12", isSelected: false, isReserved: false },
      { number: 13, seat: "H13", isSelected: false, isReserved: false },
      { number: 14, seat: "H14", isSelected: false, isReserved: false },
      { number: 15, seat: "H15", isSelected: false, isReserved: false },
    ],
    H3: [
      { number: 16, seat: "H16", isSelected: false, isReserved: false },
      { number: 17, seat: "H17", isSelected: false, isReserved: false },
      { number: 18, seat: "H18", isSelected: false, isReserved: false },
      { number: 19, seat: "H19", isSelected: false, isReserved: false },

    ],
    J1: [
      { number: 1, seat: "J1", isSelected: false, isReserved: false},
      { number: 2, seat: "J2", isSelected: false, isReserved: false },
      { number: 3, seat: "J3", isSelected: false, isReserved: false },
      { number: 4, seat: "J4", isSelected: false, isReserved: false },
      { number: 5, seat: "J5", isSelected: false, isReserved: false },
      { number: 6, seat: "J6", isSelected: false, isReserved: false },
    ],
    J2: [
      { number: 7, seat: "J7", isSelected: false, isReserved: false },
      { number: 8, seat: "J8", isSelected: false, isReserved: false},
      { number: 9, seat: "J9", isSelected: false, isReserved: false},
      { number: 10, seat: "J10", isSelected: false, isReserved: false },
      { number: 11, seat: "J11", isSelected: false, isReserved: false},
      { number: 12, seat: "J12", isSelected: false, isReserved: false },
      { number: 13, seat: "J13", isSelected: false, isReserved: false },
      { number: 14, seat: "J14", isSelected: false, isReserved: false },
      { number: 15, seat: "J15", isSelected: false, isReserved: false },
    ],
    J3: [
      { number: 16, seat: "J16", isSelected: false, isReserved: false },
      { number: 17, seat: "J17", isSelected: false, isReserved: false },
      { number: 18, seat: "J18", isSelected: false, isReserved: false },
      { number: 19, seat: "J19", isSelected: false, isReserved: false },

    ],
    I1: [
      { number: 1, seat: "I1", isSelected: false, isReserved: false},
      { number: 2, seat: "I2", isSelected: false, isReserved: false },
      { number: 3, seat: "I3", isSelected: false, isReserved: false },
      { number: 4, seat: "I4", isSelected: false, isReserved: false },
      { number: 5, seat: "I5", isSelected: false, isReserved: false },
      { number: 6, seat: "I6", isSelected: false, isReserved: false },
    ],
    I2: [
      { number: 7, seat: "I7", isSelected: false, isReserved: false },
      { number: 8, seat: "I8", isSelected: false, isReserved: false},
      { number: 9, seat: "I9", isSelected: false, isReserved: false},
      { number: 10, seat: "I10", isSelected: false, isReserved: false },
      { number: 11, seat: "I11", isSelected: false, isReserved: false},
      { number: 12, seat: "I12", isSelected: false, isReserved: false },
      { number: 13, seat: "I13", isSelected: false, isReserved: false },
      { number: 14, seat: "I14", isSelected: false, isReserved: false },
      { number: 15, seat: "I15", isSelected: false, isReserved: false },
    ],
    I3: [
      { number: 16, seat: "I16", isSelected: false, isReserved: false },
      { number: 17, seat: "I17", isSelected: false, isReserved: false },
      { number: 18, seat: "I18", isSelected: false, isReserved: false },
      { number: 19, seat: "I19", isSelected: false, isReserved: false },
    ],

    time2: "",
    theater: [],
    ticket:[],
    showtime:""
  };

  render() {


    return (
      <React.Fragment>
   
        <div
          className="head bg-light"
          style={{ height: "100px", background: "light" }}
        >
         <h3>Gold -Rs 250</h3>
          <hr />
          <div className="row">
            <div className="col-8">
              <b>A</b>{" "}
              {this.state.A.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                      style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4"></div>
          </div>
          <br />
          <div className="row">
            <div className="col-8">
              <b>B</b>{" "}
              {this.state.B.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div>
            <h3>Gold -Rs 250</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">
              <b>C</b>{" "}
              {this.state.C1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.C2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)} 
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.C3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <b>D</b>{" "}
              {this.state.D1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.D2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.D3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <b>E</b>{" "}
              {this.state.E1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.E2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.E3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <b>F</b>{" "}
              {this.state.F1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.F2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.F3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <b>G</b>{" "}
              {this.state.G1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.G2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.G3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <b>H</b>{" "}
              {this.state.H1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}     
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.H2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.H3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ):(
                    <button className="btn btn-light  text-secondary  text-white m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <b>I</b>{" "}
              {this.state.I1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.I2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.I3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4">
              <b>J</b>{" "}
              {this.state.J1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.J2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1"  onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.J3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary m-1"
                      style={{ background: "#2dc492",borderColor:"gray" }}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white m-1"
                       style={{ background: "#4C9A2A",borderColor:"gray" }}
                      onClick={()=>this.props.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary m-1" onClick={()=>this.props.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          </div>
          <br />
        
      </React.Fragment>
    );
  }
}
export default Ticket1;
