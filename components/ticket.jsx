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

class Ticket extends Component {
  state = {
    time: [
      { time: "9:00 AM", isSelected: true },
      { time: "12:00 AM", isSelected: false },
      { time: "1:15 PM", isSelected: false },
      { time: "3:45 PM", isSelected: false },

      { time: "5:45 PM", isSelected: false },
      {
        time: "10:20 PM",
        isSelected: false,
      },
    ],
    A: [
      { number: 1, seat: "A1", isSelected: false, isReserved: false },
      { number: 2, seat: "A2", isSelected: false, isReserved: false },
      { number: 3, seat: "A3", isSelected: false, isReserved: false },
      { number: 4, seat: "A4", isSelected: false, isReserved: false },
      { number: 5, seat: "A5", isSelected: false, isReserved: false },
      { number: 6, seat: "A6", isSelected: false, isReserved: false },
      { number: 7, seat: "A7", isSelected: false, isReserved: false },
      { number: 8, seat: "A8", isSelected: false, isReserved: false },
      { number: 9, seat: "A9", isSelected: false, isReserved: true },
      { number: 10, seat: "A10", isSelected: false, isReserved: true },
      { number: 11, seat: "A11", isSelected: false, isReserved: true },
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
      { number: 9, seat: "B9", isSelected: false, isReserved: true },
      { number: 10, seat: "B10", isSelected: false, isReserved: true },
      { number: 11, seat: "B11", isSelected: false, isReserved: true },
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
      { number: 9, seat: "C9", isSelected: false, isReserved: true },
      { number: 10, seat: "C10", isSelected: false, isReserved: true },
      { number: 11, seat: "C11", isSelected: false, isReserved: true },
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
      { number: 3, seat: "D3", isSelected: false, isReserved: true },
      { number: 4, seat: "D4", isSelected: false, isReserved: false },
      { number: 5, seat: "D5", isSelected: false, isReserved: false },
      { number: 6, seat: "D6", isSelected: false, isReserved: false },
    ],
    D2: [
      { number: 7, seat: "D7", isSelected: false, isReserved: false },
      { number: 8, seat: "D8", isSelected: false, isReserved: false },
      { number: 9, seat: "D9", isSelected: false, isReserved: true },
      { number: 10, seat: "D10", isSelected: false, isReserved: true },
      { number: 11, seat: "D11", isSelected: false, isReserved: true },
      { number: 12, seat: "D12", isSelected: false, isReserved: false },
      { number: 13, seat: "D13", isSelected: false, isReserved: false },
      { number: 14, seat: "D14", isSelected: false, isReserved: false },
      { number: 15, seat: "D15", isSelected: false, isReserved: false },
    ],
    D3: [
      { number: 16, seat: "D16", isSelected: false, isReserved: true },
      { number: 17, seat: "D17", isSelected: false, isReserved: false },
      { number: 18, seat: "D18", isSelected: false, isReserved: false },
      { number: 19, seat: "D19", isSelected: false, isReserved: false },
      { number: 20, seat: "D20", isSelected: false, isReserved: true },
      { number: 21, seat: "D21", isSelected: false, isReserved: false },
      { number: 22, seat: "D22", isSelected: false, isReserved: false },
      { number: 23, seat: "D23", isSelected: false, isReserved: false },
      { number: 24, seat: "D24", isSelected: false, isReserved: false },
    ],
    E1: [
      { number: 1, seat: "E1", isSelected: false, isReserved: false },
      { number: 2, seat: "E2", isSelected: false, isReserved: true },
      { number: 3, seat: "E3", isSelected: false, isReserved: false },
      { number: 4, seat: "E4", isSelected: false, isReserved: false },
      { number: 5, seat: "E5", isSelected: false, isReserved: false },
      { number: 6, seat: "E6", isSelected: false, isReserved: false },
    ],
    E2: [
      { number: 7, seat: "E7", isSelected: false, isReserved: false },
      { number: 8, seat: "E8", isSelected: false, isReserved: false },
      { number: 9, seat: "E9", isSelected: false, isReserved: true },
      { number: 10, seat: "E10", isSelected: false, isReserved: false },
      { number: 11, seat: "E11", isSelected: false, isReserved: true },
      { number: 12, seat: "E12", isSelected: false, isReserved: false },
      { number: 13, seat: "E13", isSelected: false, isReserved: false },
      { number: 14, seat: "E14", isSelected: false, isReserved: false },
      { number: 15, seat: "E15", isSelected: false, isReserved: false },
    ],
    E3: [
      { number: 16, seat: "E16", isSelected: false, isReserved: false },
      { number: 17, seat: "E17", isSelected: false, isReserved: true },
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
      { number: 4, seat: "F4", isSelected: false, isReserved: true },
      { number: 5, seat: "F5", isSelected: false, isReserved: false },
      { number: 6, seat: "F6", isSelected: false, isReserved: false },
    ],
    F2: [
      { number: 7, seat: "F7", isSelected: false, isReserved: false },
      { number: 8, seat: "F8", isSelected: false, isReserved: false },
      { number: 9, seat: "F9", isSelected: false, isReserved: true },
      { number: 10, seat: "F10", isSelected: false, isReserved: true },
      { number: 11, seat: "F11", isSelected: false, isReserved: false },
      { number: 12, seat: "F12", isSelected: false, isReserved: false },
      { number: 13, seat: "F13", isSelected: false, isReserved: true },
      { number: 14, seat: "F14", isSelected: false, isReserved: false },
      { number: 15, seat: "F15", isSelected: false, isReserved: false },
    ],
    F3: [
      { number: 16, seat: "F16", isSelected: false, isReserved: false },
      { number: 17, seat: "F17", isSelected: false, isReserved: true },
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
      { number: 5, seat: "G5", isSelected: false, isReserved: true },
      { number: 6, seat: "G6", isSelected: false, isReserved: false },
    ],
    G2: [
      { number: 7, seat: "G7", isSelected: false, isReserved: true },
      { number: 8, seat: "G8", isSelected: false, isReserved: false },
      { number: 9, seat: "G9", isSelected: false, isReserved: false },
      { number: 10, seat: "G10", isSelected: false, isReserved: true },
      { number: 11, seat: "G11", isSelected: false, isReserved: true },
      { number: 12, seat: "G12", isSelected: false, isReserved: false },
      { number: 13, seat: "G13", isSelected: false, isReserved: false },
      { number: 14, seat: "G14", isSelected: false, isReserved: false },
      { number: 15, seat: "G15", isSelected: false, isReserved: false },
    ],
    G3: [
      { number: 16, seat: "G16", isSelected: false, isReserved: false },
      { number: 17, seat: "G17", isSelected: false, isReserved: false },
      { number: 18, seat: "G18", isSelected: false, isReserved: true },

    ],
    H1: [
      { number: 1, seat: "H1", isSelected: false, isReserved: true },
      { number: 2, seat: "H2", isSelected: false, isReserved: false },
      { number: 3, seat: "b", isSelected: false, isReserved: false },
      { number: 4, seat: "b", isSelected: false, isReserved: false },
      { number: 5, seat: "H5", isSelected: false, isReserved: false },
      { number: 6, seat: "H6", isSelected: false, isReserved: false },
    ],
    H2: [
      { number: 7, seat: "H7", isSelected: false, isReserved: false },
      { number: 8, seat: "H8", isSelected: false, isReserved: true },
      { number: 9, seat: "H9", isSelected: false, isReserved: true },
      { number: 10, seat: "H10", isSelected: false, isReserved: false },
      { number: 11, seat: "H11", isSelected: false, isReserved: true },
      { number: 12, seat: "H12", isSelected: false, isReserved: false },
      { number: 13, seat: "H13", isSelected: false, isReserved: false },
      { number: 14, seat: "H14", isSelected: false, isReserved: false },
      { number: 15, seat: "H15", isSelected: false, isReserved: false },
    ],
    b: [
      { number: 16, seat: "H16", isSelected: false, isReserved: false },
      { number: 17, seat: "H17", isSelected: false, isReserved: false },
      { number: 18, seat: "H18", isSelected: false, isReserved: false },
      { number: 19, seat: "H19", isSelected: false, isReserved: false },

    ],
    J1: [
      { number: 1, seat: "J1", isSelected: false, isReserved: true },
      { number: 2, seat: "J2", isSelected: false, isReserved: false },
      { number: 3, seat: "J3", isSelected: false, isReserved: false },
      { number: 4, seat: "J4", isSelected: false, isReserved: false },
      { number: 5, seat: "J5", isSelected: false, isReserved: false },
      { number: 6, seat: "J6", isSelected: false, isReserved: false },
    ],
    J2: [
      { number: 7, seat: "J7", isSelected: false, isReserved: false },
      { number: 8, seat: "J8", isSelected: false, isReserved: true },
      { number: 9, seat: "J9", isSelected: false, isReserved: true },
      { number: 10, seat: "J10", isSelected: false, isReserved: false },
      { number: 11, seat: "J11", isSelected: false, isReserved: true },
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
      { number: 1, seat: "I1", isSelected: false, isReserved: true },
      { number: 2, seat: "I2", isSelected: false, isReserved: false },
      { number: 3, seat: "I3", isSelected: false, isReserved: false },
      { number: 4, seat: "I4", isSelected: false, isReserved: false },
      { number: 5, seat: "I5", isSelected: false, isReserved: false },
      { number: 6, seat: "I6", isSelected: false, isReserved: false },
    ],
    I2: [
      { number: 7, seat: "I7", isSelected: false, isReserved: false },
      { number: 8, seat: "I8", isSelected: false, isReserved: true },
      { number: 9, seat: "I9", isSelected: false, isReserved: true },
      { number: 10, seat: "I10", isSelected: false, isReserved: false },
      { number: 11, seat: "I11", isSelected: false, isReserved: true },
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
T2:[{
  A: [
    { number: 1, seat: "A1", isSelected: false, isReserved: true },
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
    { number: 1, seat: "B1", isSelected: false, isReserved: true },
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
    { number: 1, seat: "C1", isSelected: false, isReserved: true },
    { number: 2, seat: "C2", isSelected: false, isReserved: false },
    { number: 3, seat: "C3", isSelected: false, isReserved: false },
    { number: 4, seat: "C4", isSelected: false, isReserved: false },
    { number: 5, seat: "C5", isSelected: false, isReserved: false },
    { number: 6, seat: "C6", isSelected: false, isReserved: false },
  ],
  C2: [
    { number: 7, seat: "C7", isSelected: false, isReserved: true },
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
 
  ],

  D1: [
    { number: 1, seat: "D1", isSelected: false, isReserved: true },
    { number: 2, seat: "D2", isSelected: false, isReserved: true },
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
    { number: 16, seat: "D16", isSelected: false, isReserved: true},
    { number: 17, seat: "D17", isSelected: false, isReserved: true },
    { number: 18, seat: "D18", isSelected: false, isReserved: false },
    { number: 19, seat: "D19", isSelected: false, isReserved: false },
    { number: 20, seat: "D20", isSelected: false, isReserved: false},
   
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
    { number: 12, seat: "E12", isSelected: false, isReserved: true },
    { number: 13, seat: "E13", isSelected: false, isReserved: true },
    { number: 14, seat: "E14", isSelected: false, isReserved: false },
    { number: 15, seat: "E15", isSelected: false, isReserved: false },
  ],
  E3: [
    { number: 16, seat: "E16", isSelected: false, isReserved: false },
    { number: 17, seat: "E17", isSelected: false, isReserved: false},
    { number: 18, seat: "E18", isSelected: false, isReserved: false },
    { number: 19, seat: "E19", isSelected: false, isReserved: false },
    { number: 20, seat: "E20", isSelected: false, isReserved: false },
   
    
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
    { number: 7, seat: "F7", isSelected: false, isReserved: true },
    { number: 8, seat: "F8", isSelected: false, isReserved: true },
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
    { number: 9, seat: "G9", isSelected: false, isReserved: true },
    { number: 10, seat: "G10", isSelected: false, isReserved: false},
    { number: 11, seat: "G11", isSelected: false, isReserved: false},
    { number: 12, seat: "G12", isSelected: false, isReserved: false },
    { number: 13, seat: "G13", isSelected: false, isReserved: false },
    { number: 14, seat: "G14", isSelected: false, isReserved: true },
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
    { number: 3, seat: "b", isSelected: false, isReserved: false },
    { number: 4, seat: "b", isSelected: false, isReserved: false },
    { number: 5, seat: "H5", isSelected: false, isReserved: false },
    { number: 6, seat: "H6", isSelected: false, isReserved: false },
  ],
  H2: [
    { number: 7, seat: "H7", isSelected: false, isReserved: false },
    { number: 8, seat: "H8", isSelected: false, isReserved: true},
    { number: 9, seat: "H9", isSelected: false, isReserved: true},
    { number: 10, seat: "H10", isSelected: false, isReserved: true },
    { number: 11, seat: "H11", isSelected: false, isReserved: true},
    { number: 12, seat: "H12", isSelected: false, isReserved: true },
    { number: 13, seat: "H13", isSelected: false, isReserved: true },
    { number: 14, seat: "H14", isSelected: false, isReserved: false },
    { number: 15, seat: "H15", isSelected: false, isReserved: false },
  ],
  b: [
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
    { number: 8, seat: "J8", isSelected: false, isReserved: true},
    { number: 9, seat: "J9", isSelected: false, isReserved: false},
    { number: 10, seat: "J10", isSelected: false, isReserved: true },
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
    { number: 16, seat: "I16", isSelected: false, isReserved: true },
    { number: 17, seat: "I17", isSelected: false, isReserved: true },
    { number: 18, seat: "I18", isSelected: false, isReserved: true },
    { number: 19, seat: "I19", isSelected: false, isReserved: true },
  ]}],
T3:[{
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
    { number: 10, seat: "A10", isSelected: false, isReserved: true},
    { number: 11, seat: "A11", isSelected: false, isReserved: true},
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
    { number: 1, seat: "C1", isSelected: false, isReserved: true },
    { number: 2, seat: "C2", isSelected: false, isReserved: false },
    { number: 3, seat: "C3", isSelected: false, isReserved: false },
    { number: 4, seat: "C4", isSelected: false, isReserved: false },
    { number: 5, seat: "C5", isSelected: false, isReserved: false },
    { number: 6, seat: "C6", isSelected: false, isReserved: false },
  ],
  C2: [
    { number: 7, seat: "C7", isSelected: false, isReserved: true },
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
 
  ],

  D1: [
    { number: 1, seat: "D1", isSelected: false, isReserved: true },
    { number: 2, seat: "D2", isSelected: false, isReserved: true },
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
    { number: 16, seat: "D16", isSelected: false, isReserved: true},
    { number: 17, seat: "D17", isSelected: false, isReserved: true },
    { number: 18, seat: "D18", isSelected: false, isReserved: false },
    { number: 19, seat: "D19", isSelected: false, isReserved: false },
    { number: 20, seat: "D20", isSelected: false, isReserved: false},
   
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
    { number: 12, seat: "E12", isSelected: false, isReserved: true },
    { number: 13, seat: "E13", isSelected: false, isReserved: true },
    { number: 14, seat: "E14", isSelected: false, isReserved: false },
    { number: 15, seat: "E15", isSelected: false, isReserved: false },
  ],
  E3: [
    { number: 16, seat: "E16", isSelected: false, isReserved: false },
    { number: 17, seat: "E17", isSelected: false, isReserved: false},
    { number: 18, seat: "E18", isSelected: false, isReserved: false },
    { number: 19, seat: "E19", isSelected: false, isReserved: false },
    { number: 20, seat: "E20", isSelected: false, isReserved: false },
   
    
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
    { number: 7, seat: "F7", isSelected: false, isReserved: true },
    { number: 8, seat: "F8", isSelected: false, isReserved: true },
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
    { number: 9, seat: "G9", isSelected: false, isReserved: true },
    { number: 10, seat: "G10", isSelected: false, isReserved: false},
    { number: 11, seat: "G11", isSelected: false, isReserved: false},
    { number: 12, seat: "G12", isSelected: false, isReserved: false },
    { number: 13, seat: "G13", isSelected: false, isReserved: false },
    { number: 14, seat: "G14", isSelected: false, isReserved: true },
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
    { number: 3, seat: "b", isSelected: false, isReserved: false },
    { number: 4, seat: "b", isSelected: false, isReserved: false },
    { number: 5, seat: "H5", isSelected: false, isReserved: false },
    { number: 6, seat: "H6", isSelected: false, isReserved: false },
  ],
  H2: [
    { number: 7, seat: "H7", isSelected: false, isReserved: false },
    { number: 8, seat: "H8", isSelected: false, isReserved: true},
    { number: 9, seat: "H9", isSelected: false, isReserved: true},
    { number: 10, seat: "H10", isSelected: false, isReserved: false },
    { number: 11, seat: "H11", isSelected: false, isReserved: false},
    { number: 12, seat: "H12", isSelected: false, isReserved: false },
    { number: 13, seat: "H13", isSelected: false, isReserved: false },
    { number: 14, seat: "H14", isSelected: false, isReserved: false },
    { number: 15, seat: "H15", isSelected: false, isReserved: false },
  ],
  b: [
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
    { number: 8, seat: "J8", isSelected: false, isReserved: true},
    { number: 9, seat: "J9", isSelected: false, isReserved: false},
    { number: 10, seat: "J10", isSelected: false, isReserved: true },
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
  ]}],
T4:[{
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
 
  ],

  D1: [
    { number: 1, seat: "D1", isSelected: false, isReserved: false },
    { number: 2, seat: "D2", isSelected: false, isReserved: true },
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
    { number: 17, seat: "D17", isSelected: false, isReserved: true },
    { number: 18, seat: "D18", isSelected: false, isReserved: false },
    { number: 19, seat: "D19", isSelected: false, isReserved: false },
    { number: 20, seat: "D20", isSelected: false, isReserved: false},
   
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
    { number: 3, seat: "b", isSelected: false, isReserved: false },
    { number: 4, seat: "b", isSelected: false, isReserved: false },
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
  b: [
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
    { number: 8, seat: "J8", isSelected: false, isReserved: true},
    { number: 9, seat: "J9", isSelected: false, isReserved: false},
    { number: 10, seat: "J10", isSelected: false, isReserved: true },
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
    { number: 16, seat: "I16", isSelected: false, isReserved: true },
    { number: 17, seat: "I17", isSelected: false, isReserved: true },
    { number: 18, seat: "I18", isSelected: false, isReserved: true },
    { number: 19, seat: "I19", isSelected: false, isReserved: true },
  ]}],
T5:[{
  A: [
    { number: 1, seat: "A1", isSelected: false, isReserved: true },
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
    { number: 16, seat: "A16", isSelected: false, isReserved: false },
    { number: 17, seat: "A17", isSelected: false, isReserved: false },
    { number: 18, seat: "A18", isSelected: false, isReserved: false },
  ],
  B: [
    { number: 1, seat: "B1", isSelected: false, isReserved: true },
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
    { number: 1, seat: "C1", isSelected: false, isReserved: true },
    { number: 2, seat: "C2", isSelected: false, isReserved: false },
    { number: 3, seat: "C3", isSelected: false, isReserved: false },
    { number: 4, seat: "C4", isSelected: false, isReserved: false },
    { number: 5, seat: "C5", isSelected: false, isReserved: false },
    { number: 6, seat: "C6", isSelected: false, isReserved: false },
  ],
  C2: [
    { number: 7, seat: "C7", isSelected: false, isReserved: true },
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
 
  ],

  D1: [
    { number: 1, seat: "D1", isSelected: false, isReserved: true },
    { number: 2, seat: "D2", isSelected: false, isReserved: true },
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
    { number: 16, seat: "D16", isSelected: false, isReserved: true},
    { number: 17, seat: "D17", isSelected: false, isReserved: true },
    { number: 18, seat: "D18", isSelected: false, isReserved: false },
    { number: 19, seat: "D19", isSelected: false, isReserved: false },
    { number: 20, seat: "D20", isSelected: false, isReserved: false},
   
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
    { number: 12, seat: "E12", isSelected: false, isReserved: true },
    { number: 13, seat: "E13", isSelected: false, isReserved: true },
    { number: 14, seat: "E14", isSelected: false, isReserved: false },
    { number: 15, seat: "E15", isSelected: false, isReserved: false },
  ],
  E3: [
    { number: 16, seat: "E16", isSelected: false, isReserved: false },
    { number: 17, seat: "E17", isSelected: false, isReserved: false},
    { number: 18, seat: "E18", isSelected: false, isReserved: false },
    { number: 19, seat: "E19", isSelected: false, isReserved: false },
    { number: 20, seat: "E20", isSelected: false, isReserved: false },
   
    
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
    { number: 7, seat: "F7", isSelected: false, isReserved: true },
    { number: 8, seat: "F8", isSelected: false, isReserved: true },
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
    { number: 9, seat: "G9", isSelected: false, isReserved: true },
    { number: 10, seat: "G10", isSelected: false, isReserved: false},
    { number: 11, seat: "G11", isSelected: false, isReserved: false},
    { number: 12, seat: "G12", isSelected: false, isReserved: false },
    { number: 13, seat: "G13", isSelected: false, isReserved: false },
    { number: 14, seat: "G14", isSelected: false, isReserved: true },
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
    { number: 3, seat: "b", isSelected: false, isReserved: false },
    { number: 4, seat: "b", isSelected: false, isReserved: false },
    { number: 5, seat: "H5", isSelected: false, isReserved: false },
    { number: 6, seat: "H6", isSelected: false, isReserved: false },
  ],
  H2: [
    { number: 7, seat: "H7", isSelected: false, isReserved: false },
    { number: 8, seat: "H8", isSelected: false, isReserved: true},
    { number: 9, seat: "H9", isSelected: false, isReserved: true},
    { number: 10, seat: "H10", isSelected: false, isReserved: true },
    { number: 11, seat: "H11", isSelected: false, isReserved: true},
    { number: 12, seat: "H12", isSelected: false, isReserved: true },
    { number: 13, seat: "H13", isSelected: false, isReserved: true },
    { number: 14, seat: "H14", isSelected: false, isReserved: false },
    { number: 15, seat: "H15", isSelected: false, isReserved: false },
  ],
  b: [
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
    { number: 8, seat: "J8", isSelected: false, isReserved: true},
    { number: 9, seat: "J9", isSelected: false, isReserved: false},
    { number: 10, seat: "J10", isSelected: false, isReserved: true },
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
    { number: 16, seat: "I16", isSelected: false, isReserved: true },
    { number: 17, seat: "I17", isSelected: false, isReserved: true },
    { number: 18, seat: "I18", isSelected: false, isReserved: true },
    { number: 19, seat: "I19", isSelected: false, isReserved: true },
  ]}],
T6:[{
  A: [
    { number: 1, seat: "A1", isSelected: false, isReserved: false },
    { number: 2, seat: "A2", isSelected: false, isReserved: false },
    { number: 3, seat: "A3", isSelected: false, isReserved: false },
    { number: 4, seat: "A4", isSelected: false, isReserved: false },
    { number: 5, seat: "A5", isSelected: false, isReserved: false },
    { number: 6, seat: "A6", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: "", seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },

    
    { number: 7, seat: "A7", isSelected: false, isReserved: false },
    { number: 8, seat: "A8", isSelected: false, isReserved: false },
    { number: 9, seat: "A9", isSelected: false, isReserved: false},
    { number: 10, seat: "A10", isSelected: false, isReserved: false},
    { number: 11, seat: "A11", isSelected: false, isReserved: false},
    { number: 12, seat: "A12", isSelected: false, isReserved: false },
    { number: 13, seat: "A13", isSelected: false, isReserved: false },
    { number: 14, seat: "A14", isSelected: false, isReserved: false },
    { number: 15, seat: "A15", isSelected: false, isReserved: false },
    { number: 16, seat: "A16", isSelected: false, isReserved: false },
    { number: 17, seat: "A17", isSelected: false, isReserved: false },
  

  ],
  B: [
    { number: 1, seat: "B1", isSelected: false, isReserved: false },
    { number: 2, seat: "B2", isSelected: false, isReserved: false },
    { number: 3, seat: "B3", isSelected: false, isReserved: false },
    { number: 4, seat: "B4", isSelected: false, isReserved: false },
    { number: 5, seat: "B5", isSelected: false, isReserved: false },
    { number: 6, seat: "B6", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: "", seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
    { number: '', seat: "", isSelected: false, isReserved: false },
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
    { number: 7, seat: "C7", isSelected: false, isReserved: true },
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
    { number: 16, seat: "D16", isSelected: false, isReserved: true},
    { number: 17, seat: "D17", isSelected: false, isReserved: true },
    { number: 18, seat: "D18", isSelected: false, isReserved: false },
    { number: 19, seat: "D19", isSelected: false, isReserved: false },
    { number: 20, seat: "D20", isSelected: false, isReserved: false},
   
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
    { number: 13, seat: "E13", isSelected: false, isReserved: true },
    { number: 14, seat: "E14", isSelected: false, isReserved: false },
    { number: 15, seat: "E15", isSelected: false, isReserved: false },
  ],
  E3: [
    { number: 16, seat: "E16", isSelected: false, isReserved: false },
    { number: 17, seat: "E17", isSelected: false, isReserved: false},
    { number: 18, seat: "E18", isSelected: false, isReserved: false },
    { number: 19, seat: "E19", isSelected: false, isReserved: false },
    { number: 20, seat: "E20", isSelected: false, isReserved: false },
   
    
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
    { number: 7, seat: "F7",  isSelected: false, isReserved: true },
    { number: 8, seat: "F8",  isSelected: false, isReserved: true },
    { number: 9, seat: "F9",  isSelected: false, isReserved: false},
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
    { number: 9, seat: "G9", isSelected: false, isReserved: true },
    { number: 10, seat: "G10", isSelected: false, isReserved: false},
    { number: 11, seat: "G11", isSelected: false, isReserved: false},
    { number: 12, seat: "G12", isSelected: false, isReserved: false },
    { number: 13, seat: "G13", isSelected: false, isReserved: false },
    { number: 14, seat: "G14", isSelected: false, isReserved: true },
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
    { number: 3, seat: "b", isSelected: false, isReserved: false },
    { number: 4, seat: "b", isSelected: false, isReserved: false },
    { number: 5, seat: "H5", isSelected: false, isReserved: false },
    { number: 6, seat: "H6", isSelected: false, isReserved: false },
  ],
  H2: [
    { number: 7, seat: "H7", isSelected: false, isReserved: false },
    { number: 8, seat: "H8", isSelected: false, isReserved: true},
    { number: 9, seat: "H9", isSelected: false, isReserved: false},
    { number: 10, seat: "H10", isSelected: false, isReserved: false },
    { number: 11, seat: "H11", isSelected: false, isReserved: false},
    { number: 12, seat: "H12", isSelected: false, isReserved: true },
    { number: 13, seat: "H13", isSelected: false, isReserved: true },
    { number: 14, seat: "H14", isSelected: false, isReserved: false },
    { number: 15, seat: "H15", isSelected: false, isReserved: false },
  ],
  b: [
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
    { number: 8, seat: "J8", isSelected: false, isReserved: true},
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
  ]}],
    time2: "",
    theater: [],
    ticket:[],
    showtime:""
  };
  async fetchData() {
    let response = await http.get(`/ticketdata`);

    console.log("response", response);

    let { data } = response;
    console.log(data[0].showtime);
    this.setState({ theater: data,showtime:data[0].showtime});
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
  time = (a) => {
    let s1 = { ...this.state };
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search); 
    s1.showtime=a
    let arr = {
      date:queryParams.date,
      location:s1.theater[0].location,
      room:s1.theater[0].room,
      time:s1.theater[0].time,
      showtime:a,
    };
s1.ticket=[]
    console.log(a);
    console.log(arr);
    this.postData("/ticketdata", arr);

 //  window.location=(`/home/${location1}/${Movies}/${time}?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}`)
   this.setState(s1)
  };
  back=()=>{
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    window.location=(`/home/${location1}/${Movies}?q=${queryParams.q}`)
  }
  back1=()=>{
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    window.location=(`/home/${location1}/${Movies}?q=${queryParams.q}`)
  }
  handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    s1[input.name] = this.updatecbs(input.checked, input.value, s1[input.name]);
    console.log(s1.Show);
    console.log(s1.Price);

    this.setState(s1);
  };

  updatecbs = (checked, value, arr) => {
    if (checked) arr.push(value);
    else {
      let index = arr.findIndex((ele) => ele == value);
      if (index >= 0) arr.splice(index, 1);
    }
    return arr;
  };
Pay=(a)=>{
  console.log(a)
  let s1={...this.state}
  console.log(s1.theater.showtime)
  const user=authSys.getUser()
  let {location1,Movies,time} = this.props.match.params;
  let queryParams = queryString.parse(this.props.location.search);
  let arr={email:user.email,location:location1,Movies:queryParams.q,MoviesHall:queryParams.room,time:s1.theater
    ,data:queryParams.date,ticket:s1.ticket,amount:a}
console.log(arr)
this.postData("/ticket",arr)
 
}

  ticket=(a)=>{
    console.log(a)
    const user=authSys.getUser()
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    let qq=""
   !user?alert("please login"):qq=a
   !user? window.location=(`/home/${location1}/${Movies}/${time}?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}&login=yes`):qq=a
let s1={...this.state}
let A=s1.A.findIndex((st)=>st.seat==a)
let B=s1.B.findIndex((st)=>st.seat==a)


let C1=s1.C1.findIndex((st)=>st.seat==a)
let C2=s1.C2.findIndex((st)=>st.seat==a)
let C3=s1.C3.findIndex((st)=>st.seat==a)
let D1=s1.D1.findIndex((st)=>st.seat==a)
let D2=s1.D2.findIndex((st)=>st.seat==a)
let D3=s1.D3.findIndex((st)=>st.seat==a)
let E1=s1.E1.findIndex((st)=>st.seat==a)
let E2=s1.E2.findIndex((st)=>st.seat==a)
 let E3=s1.E3.findIndex((st)=>st.seat==a)
let F1=s1.F1.findIndex((st)=>st.seat==a)
let F2=s1.F2.findIndex((st)=>st.seat==a)
 let F3=s1.F3.findIndex((st)=>st.seat==a)
let G1=s1.G1.findIndex((st)=>st.seat==a)
let G2=s1.G2.findIndex((st)=>st.seat==a)
 let G3=s1.G3.findIndex((st)=>st.seat==a)
let H1=s1.H1.findIndex((st)=>st.seat==a)
let H2=s1.H2.findIndex((st)=>st.seat==a)
 let b=s1.b.findIndex((st)=>st.seat==a)
let I1=s1.I1.findIndex((st)=>st.seat==a)
let I2=s1.I2.findIndex((st)=>st.seat==a)
 let I3=s1.I3.findIndex((st)=>st.seat==a)
let J1=s1.J1.findIndex((st)=>st.seat==a)
let J2=s1.J2.findIndex((st)=>st.seat==a)
 let J3=s1.J3.findIndex((st)=>st.seat==a)
 let ticket=s1.ticket.findIndex((st)=>st.seat==a)
 console.log(F1)
 console.log(F2)
let HEL=""
J1===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
J2===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
J3===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
I1===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
I2===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
I3===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)

   J2===-1&&J1===-1&&J3===-1 &&I2===-1&&I1===-1&&I3===-1?ticket==-1?s1.ticket.push({price:90,seat:a}):s1.ticket.splice(ticket,1):HEL=2

       A===-1?HEL=2:s1.A[A].isSelected==false?s1.A[A].isSelected=true:s1.A[A].isSelected=false
       B===-1?HEL=2:s1.B[B].isSelected==false?s1.B[B].isSelected=true:s1.B[B].isSelected=false
       C1===-1?HEL=2:s1.C1[C1].isSelected==false?s1.C1[C1].isSelected=true:s1.C1[C1].isSelected=false
       C2===-1?HEL=2:s1.C2[C2].isSelected==false?s1.C2[C2].isSelected=true:s1.C2[C2].isSelected=false
       C3===-1?HEL=2:s1.C3[C3].isSelected==false?s1.C3[C3].isSelected=true:s1.C3[C3].isSelected=false
       D1===-1?HEL=2:s1.D1[D1].isSelected==false?s1.D1[D1].isSelected=true:s1.D1[D1].isSelected=false
       D2===-1?HEL=2:s1.D2[D2].isSelected==false?s1.D2[D2].isSelected=true:s1.D2[D2].isSelected=false
     D3  ===-1?HEL=2:s1.D3[D3].isSelected==false?s1.D3[D3].isSelected=true:s1.D3[D3].isSelected=false
    E1===-1?HEL=2:s1.E1[E1].isSelected==false?s1.E1[E1].isSelected=true:s1.E1[E1].isSelected=false
    E2===-1?HEL=2:s1.E2[E2].isSelected==false?s1.E2[E2].isSelected=true:s1.E2[E2].isSelected=false
    E3===-1?HEL=2:s1.E3[E3].isSelected==false?s1.E3[E3].isSelected=true:s1.E3[E3].isSelected=false
   F1===-1?HEL=2:s1.F1[F1].isSelected==false?s1.F1[F1].isSelected=true:s1.F1[F1].isSelected=false
   F2===-1?HEL=2:s1.F2[F2].isSelected==false?s1.F2[F2].isSelected=true:s1.F2[F2].isSelected=false
   F3===-1?HEL=2:s1.F3[F3].isSelected==false?s1.F3[F3].isSelected=true:s1.F3[F3].isSelected=false
   G1===-1?HEL=2:s1.G1[G1].isSelected==false?s1.G1[G1].isSelected=true:s1.G1[G1].isSelected=false
   G2===-1?HEL=2:s1.G2[G2].isSelected==false?s1.G2[G2].isSelected=true:s1.G2[G2].isSelected=false
   G3===-1?HEL=2:s1.G3[G3].isSelected==false?s1.G3[G3].isSelected=true:s1.G3[G3].isSelected=false
   H1===-1?HEL=2:s1.H1[H1].isSelected==false?s1.H1[H1].isSelected=true:s1.H1[H1].isSelected=false
   H2===-1?HEL=2:s1.H2[H2].isSelected==false?s1.H2[H2].isSelected=true:s1.H2[H2].isSelected=false
   b===-1?HEL=2:s1.b[b].isSelected==false?s1.b[b].isSelected=true:s1.b[b].isSelected=false
   I1===-1?HEL=2:s1.I1[I1].isSelected==false?s1.I1[I1].isSelected=true:s1.I1[I1].isSelected=false
   I2===-1?HEL=2:s1.I2[I2].isSelected==false?s1.I2[I2].isSelected=true:s1.I2[I2].isSelected=false
   I3===-1?HEL=2:s1.I3[I3].isSelected==false?s1.I3[I3].isSelected=true:s1.I3[I3].isSelected=false
   J1===-1?HEL=2:s1.J1[J1].isSelected==false?s1.J1[J1].isSelected=true:s1.J1[J1].isSelected=false
   J2===-1?HEL=2:s1.J2[J2].isSelected==false?s1.J2[J2].isSelected=true:s1.J2[J2].isSelected=false
   J3===-1?HEL=2:s1.J3[J3].isSelected==false?s1.J3[J3].isSelected=true:s1.J3[J3].isSelected=false
     


    this.setState(s1)
  }
  ticket1=(a)=>{
    console.log(a)
    const user=authSys.getUser()
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    let qq=""
   !user?alert("please login"):qq=a
   !user? window.location=(`/home/${location1}/${Movies}/${time}?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}&login=yes`):qq=a
let s1={...this.state}
let A=s1.T2[0].A.findIndex((st)=>st.seat==a)
let B=s1.T2[0].B.findIndex((st)=>st.seat==a)


let C1=s1.T2[0].C1.findIndex((st)=>st.seat==a)
let C2=s1.T2[0].C2.findIndex((st)=>st.seat==a)
let C3=s1.T2[0].C3.findIndex((st)=>st.seat==a)
let D1=s1.T2[0].D1.findIndex((st)=>st.seat==a)
let D2=s1.T2[0].D2.findIndex((st)=>st.seat==a)
let D3=s1.T2[0].D3.findIndex((st)=>st.seat==a)
let E1=s1.T2[0].E1.findIndex((st)=>st.seat==a)
let E2=s1.T2[0].E2.findIndex((st)=>st.seat==a)
 let E3=s1.T2[0].E3.findIndex((st)=>st.seat==a)
let F1=s1.T2[0].F1.findIndex((st)=>st.seat==a)
let F2=s1.T2[0].F2.findIndex((st)=>st.seat==a)
 let F3=s1.T2[0].F3.findIndex((st)=>st.seat==a)
let G1=s1.T2[0].G1.findIndex((st)=>st.seat==a)
let G2=s1.T2[0].G2.findIndex((st)=>st.seat==a)
 let G3=s1.T2[0].G3.findIndex((st)=>st.seat==a)
let H1=s1.T2[0].H1.findIndex((st)=>st.seat==a)
let H2=s1.T2[0].H2.findIndex((st)=>st.seat==a)
 let b=s1.T2[0].b.findIndex((st)=>st.seat==a)
let I1=s1.T2[0].I1.findIndex((st)=>st.seat==a)
let I2=s1.T2[0].I2.findIndex((st)=>st.seat==a)
 let I3=s1.T2[0].I3.findIndex((st)=>st.seat==a)
let J1=s1.T2[0].J1.findIndex((st)=>st.seat==a)
let J2=s1.T2[0].J2.findIndex((st)=>st.seat==a)
 let J3=s1.T2[0].J3.findIndex((st)=>st.seat==a)
 let ticket=s1.ticket.findIndex((st)=>st.seat==a)
 console.log(ticket)
let HEL=""
   A===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1&&A===-1?ticket==-1?s1.ticket.push({price:150,seat:a}):s1.ticket.splice(ticket,1):HEL=2

       A===-1?HEL=2:s1.T2[0].A[A].isSelected==false?s1.T2[0].A[A].isSelected=true:s1.T2[0].A[A].isSelected=false
       B===-1?HEL=2:s1.T2[0].B[B].isSelected==false?s1.T2[0].B[B].isSelected=true:s1.T2[0].B[B].isSelected=false
       C1===-1?HEL=2:s1.T2[0].C1[C1].isSelected==false?s1.T2[0].C1[C1].isSelected=true:s1.T2[0].C1[C1].isSelected=false
       C2===-1?HEL=2:s1.T2[0].C2[C2].isSelected==false?s1.T2[0].C2[C2].isSelected=true:s1.T2[0].C2[C2].isSelected=false
       C3===-1?HEL=2:s1.T2[0].C3[C3].isSelected==false?s1.T2[0].C3[C3].isSelected=true:s1.T2[0].C3[C3].isSelected=false
       D1===-1?HEL=2:s1.T2[0].D1[D1].isSelected==false?s1.T2[0].D1[D1].isSelected=true:s1.T2[0].D1[D1].isSelected=false
       D2===-1?HEL=2:s1.T2[0].D2[D2].isSelected==false?s1.T2[0].D2[D2].isSelected=true:s1.T2[0].D2[D2].isSelected=false
     D3  ===-1?HEL=2:s1.T2[0].D3[D3].isSelected==false?s1.T2[0].D3[D3].isSelected=true:s1.T2[0].D3[D3].isSelected=false
    E1===-1?HEL=2:s1.T2[0].E1[E1].isSelected==false?s1.T2[0].E1[E1].isSelected=true:s1.T2[0].E1[E1].isSelected=false
    E2===-1?HEL=2:s1.T2[0].E2[E2].isSelected==false?s1.T2[0].E2[E2].isSelected=true:s1.T2[0].E2[E2].isSelected=false
    E3===-1?HEL=2:s1.T2[0].E3[E3].isSelected==false?s1.T2[0].E3[E3].isSelected=true:s1.T2[0].E3[E3].isSelected=false
   F1===-1?HEL=2:s1.T2[0].F1[F1].isSelected==false?s1.T2[0].F1[F1].isSelected=true:s1.T2[0].F1[F1].isSelected=false
   F2===-1?HEL=2:s1.T2[0].F2[F2].isSelected==false?s1.T2[0].F2[F2].isSelected=true:s1.T2[0].F2[F2].isSelected=false
   F2===-1?HEL=2:s1.T2[0].F3[F3].isSelected==false?s1.T2[0].F3[F3].isSelected=true:s1.T2[0].F3[F3].isSelected=false
   G1===-1?HEL=2:s1.T2[0].G1[G1].isSelected==false?s1.T2[0].G1[G1].isSelected=true:s1.T2[0].G1[G1].isSelected=false
   G2===-1?HEL=2:s1.T2[0].G2[G2].isSelected==false?s1.T2[0].G2[G2].isSelected=true:s1.T2[0].G2[G2].isSelected=false
   G3===-1?HEL=2:s1.T2[0].G3[G3].isSelected==false?s1.T2[0].G3[G3].isSelected=true:s1.T2[0].G3[G3].isSelected=false
   H1===-1?HEL=2:s1.T2[0].H1[H1].isSelected==false?s1.T2[0].H1[H1].isSelected=true:s1.T2[0].H1[H1].isSelected=false
   H2===-1?HEL=2:s1.T2[0].H2[H2].isSelected==false?s1.T2[0].H2[H2].isSelected=true:s1.T2[0].H2[H2].isSelected=false
   b===-1?HEL=2:s1.T2[0].b[b].isSelected==false?s1.T2[0].b[b].isSelected=true:s1.T2[0].b[b].isSelected=false
   I1===-1?HEL=2:s1.T2[0].I1[I1].isSelected==false?s1.T2[0].I1[I1].isSelected=true:s1.T2[0].I1[I1].isSelected=false
   I2===-1?HEL=2:s1.T2[0].I2[I2].isSelected==false?s1.T2[0].I2[I2].isSelected=true:s1.T2[0].I2[I2].isSelected=false
   I3===-1?HEL=2:s1.T2[0].I3[I3].isSelected==false?s1.T2[0].I3[I3].isSelected=true:s1.T2[0].I3[I3].isSelected=false
   J1===-1?HEL=2:s1.T2[0].J1[J1].isSelected==false?s1.T2[0].J1[J1].isSelected=true:s1.T2[0].J1[J1].isSelected=false
   J2===-1?HEL=2:s1.T2[0].J2[J2].isSelected==false?s1.T2[0].J2[J2].isSelected=true:s1.T2[0].J2[J2].isSelected=false
   J3===-1?HEL=2:s1.T2[0].J3[J3].isSelected==false?s1.T2[0].J3[J3].isSelected=true:s1.T2[0].J3[J3].isSelected=false
     

   I1===-1?HEL=2:s1.T2[0].I1[I1].isSelected=true
   I2===-1?HEL=2:s1.T2[0].I2[I2].isSelected=true
    I3===-1?HEL=2:s1.T2[0].I3[I3].isSelected=true
   J1===-1?HEL=2:s1.T2[0].J1[J1].isSelected=true
   J2===-1?HEL=2:s1.T2[0].J2[J2].isSelected=true
    J3===-1?HEL=2:s1.T2[0].J3[J3].isSelected=true
    this.setState(s1)
  }
  ticket5=(a)=>{
    console.log(a)
    const user=authSys.getUser()
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    let qq=""
   !user?alert("please login"):qq=a
   !user? window.location=(`/home/${location1}/${Movies}/${time}?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}&login=yes`):qq=a
let s1={...this.state}
let A=s1.T6[0].A.findIndex((st)=>st.seat==a)
let B=s1.T6[0].B.findIndex((st)=>st.seat==a)


let C1=s1.T6[0].C1.findIndex((st)=>st.seat==a)
let C2=s1.T6[0].C2.findIndex((st)=>st.seat==a)
let C3=s1.T6[0].C3.findIndex((st)=>st.seat==a)
let D1=s1.T6[0].D1.findIndex((st)=>st.seat==a)
let D2=s1.T6[0].D2.findIndex((st)=>st.seat==a)
let D3=s1.T6[0].D3.findIndex((st)=>st.seat==a)
let E1=s1.T6[0].E1.findIndex((st)=>st.seat==a)
let E2=s1.T6[0].E2.findIndex((st)=>st.seat==a)
 let E3=s1.T6[0].E3.findIndex((st)=>st.seat==a)
let F1=s1.T6[0].F1.findIndex((st)=>st.seat==a)
let F2=s1.T6[0].F2.findIndex((st)=>st.seat==a)
 let F3=s1.T6[0].F3.findIndex((st)=>st.seat==a)
let G1=s1.T6[0].G1.findIndex((st)=>st.seat==a)
let G2=s1.T6[0].G2.findIndex((st)=>st.seat==a)
 let G3=s1.T6[0].G3.findIndex((st)=>st.seat==a)
let H1=s1.T6[0].H1.findIndex((st)=>st.seat==a)
let H2=s1.T6[0].H2.findIndex((st)=>st.seat==a)
 let b=s1.T6[0].b.findIndex((st)=>st.seat==a)
let I1=s1.T6[0].I1.findIndex((st)=>st.seat==a)
let I2=s1.T6[0].I2.findIndex((st)=>st.seat==a)
 let I3=s1.T6[0].I3.findIndex((st)=>st.seat==a)
let J1=s1.T6[0].J1.findIndex((st)=>st.seat==a)
let J2=s1.T6[0].J2.findIndex((st)=>st.seat==a)
 let J3=s1.T6[0].J3.findIndex((st)=>st.seat==a)
 let ticket=s1.ticket.findIndex((st)=>st.seat==a)
 console.log(ticket)
let HEL=""
   A===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1&&A===-1?ticket==-1?s1.ticket.push({price:250,seat:a}):s1.ticket.splice(ticket,1):HEL=2

       A===-1?HEL=2:s1.T6[0].A[A].isSelected==false?s1.T6[0].A[A].isSelected=true:s1.T6[0].A[A].isSelected=false
       B===-1?HEL=2:s1.T6[0].B[B].isSelected==false?s1.T6[0].B[B].isSelected=true:s1.T6[0].B[B].isSelected=false
       C1===-1?HEL=2:s1.T6[0].C1[C1].isSelected==false?s1.T6[0].C1[C1].isSelected=true:s1.T6[0].C1[C1].isSelected=false
       C2===-1?HEL=2:s1.T6[0].C2[C2].isSelected==false?s1.T6[0].C2[C2].isSelected=true:s1.T6[0].C2[C2].isSelected=false
       C3===-1?HEL=2:s1.T6[0].C3[C3].isSelected==false?s1.T6[0].C3[C3].isSelected=true:s1.T6[0].C3[C3].isSelected=false
       D1===-1?HEL=2:s1.T6[0].D1[D1].isSelected==false?s1.T6[0].D1[D1].isSelected=true:s1.T6[0].D1[D1].isSelected=false
       D2===-1?HEL=2:s1.T6[0].D2[D2].isSelected==false?s1.T6[0].D2[D2].isSelected=true:s1.T6[0].D2[D2].isSelected=false
     D3  ===-1?HEL=2:s1.T6[0].D3[D3].isSelected==false?s1.T6[0].D3[D3].isSelected=true:s1.T6[0].D3[D3].isSelected=false
    E1===-1?HEL=2:s1.T6[0].E1[E1].isSelected==false?s1.T6[0].E1[E1].isSelected=true:s1.T6[0].E1[E1].isSelected=false
    E2===-1?HEL=2:s1.T6[0].E2[E2].isSelected==false?s1.T6[0].E2[E2].isSelected=true:s1.T6[0].E2[E2].isSelected=false
    E3===-1?HEL=2:s1.T6[0].E3[E3].isSelected==false?s1.T6[0].E3[E3].isSelected=true:s1.T6[0].E3[E3].isSelected=false
   F1===-1?HEL=2:s1.T6[0].F1[F1].isSelected==false?s1.T6[0].F1[F1].isSelected=true:s1.T6[0].F1[F1].isSelected=false
   F2===-1?HEL=2:s1.T6[0].F2[F2].isSelected==false?s1.T6[0].F2[F2].isSelected=true:s1.T6[0].F2[F2].isSelected=false
   F2===-1?HEL=2:s1.T6[0].F3[F3].isSelected==false?s1.T6[0].F3[F3].isSelected=true:s1.T6[0].F3[F3].isSelected=false
   G1===-1?HEL=2:s1.T6[0].G1[G1].isSelected==false?s1.T6[0].G1[G1].isSelected=true:s1.T6[0].G1[G1].isSelected=false
   G2===-1?HEL=2:s1.T6[0].G2[G2].isSelected==false?s1.T6[0].G2[G2].isSelected=true:s1.T6[0].G2[G2].isSelected=false
   G3===-1?HEL=2:s1.T6[0].G3[G3].isSelected==false?s1.T6[0].G3[G3].isSelected=true:s1.T6[0].G3[G3].isSelected=false
   H1===-1?HEL=2:s1.T6[0].H1[H1].isSelected==false?s1.T6[0].H1[H1].isSelected=true:s1.T6[0].H1[H1].isSelected=false
   H2===-1?HEL=2:s1.T6[0].H2[H2].isSelected==false?s1.T6[0].H2[H2].isSelected=true:s1.T6[0].H2[H2].isSelected=false
   b===-1?HEL=2:s1.T6[0].b[b].isSelected==false?s1.T6[0].b[b].isSelected=true:s1.T6[0].b[b].isSelected=false
   I1===-1?HEL=2:s1.T6[0].I1[I1].isSelected==false?s1.T6[0].I1[I1].isSelected=true:s1.T6[0].I1[I1].isSelected=false
   I2===-1?HEL=2:s1.T6[0].I2[I2].isSelected==false?s1.T6[0].I2[I2].isSelected=true:s1.T6[0].I2[I2].isSelected=false
   I3===-1?HEL=2:s1.T6[0].I3[I3].isSelected==false?s1.T6[0].I3[I3].isSelected=true:s1.T6[0].I3[I3].isSelected=false
   J1===-1?HEL=2:s1.T6[0].J1[J1].isSelected==false?s1.T6[0].J1[J1].isSelected=true:s1.T6[0].J1[J1].isSelected=false
   J2===-1?HEL=2:s1.T6[0].J2[J2].isSelected==false?s1.T6[0].J2[J2].isSelected=true:s1.T6[0].J2[J2].isSelected=false
   J3===-1?HEL=2:s1.T6[0].J3[J3].isSelected==false?s1.T6[0].J3[J3].isSelected=true:s1.T6[0].J3[J3].isSelected=false
     

   I1===-1?HEL=2:s1.T6[0].I1[I1].isSelected=true
   I2===-1?HEL=2:s1.T6[0].I2[I2].isSelected=true
    I3===-1?HEL=2:s1.T6[0].I3[I3].isSelected=true
   J1===-1?HEL=2:s1.T6[0].J1[J1].isSelected=true
   J2===-1?HEL=2:s1.T6[0].J2[J2].isSelected=true
    J3===-1?HEL=2:s1.T6[0].J3[J3].isSelected=true
    this.setState(s1)
  }
  ticket6=(a)=>{
    console.log(a)
    const user=authSys.getUser()
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    let qq=""
   !user?alert("please login"):qq=a
   !user? window.location=(`/home/${location1}/${Movies}/${time}?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}&login=yes`):qq=a
let s1={...this.state}
let A=s1.T5[0].A.findIndex((st)=>st.seat==a)
let B=s1.T5[0].B.findIndex((st)=>st.seat==a)


let C1=s1.T5[0].C1.findIndex((st)=>st.seat==a)
let C2=s1.T5[0].C2.findIndex((st)=>st.seat==a)
let C3=s1.T5[0].C3.findIndex((st)=>st.seat==a)
let D1=s1.T5[0].D1.findIndex((st)=>st.seat==a)
let D2=s1.T5[0].D2.findIndex((st)=>st.seat==a)
let D3=s1.T5[0].D3.findIndex((st)=>st.seat==a)
let E1=s1.T5[0].E1.findIndex((st)=>st.seat==a)
let E2=s1.T5[0].E2.findIndex((st)=>st.seat==a)
 let E3=s1.T5[0].E3.findIndex((st)=>st.seat==a)
let F1=s1.T5[0].F1.findIndex((st)=>st.seat==a)
let F2=s1.T5[0].F2.findIndex((st)=>st.seat==a)
 let F3=s1.T5[0].F3.findIndex((st)=>st.seat==a)
let G1=s1.T5[0].G1.findIndex((st)=>st.seat==a)
let G2=s1.T5[0].G2.findIndex((st)=>st.seat==a)
 let G3=s1.T5[0].G3.findIndex((st)=>st.seat==a)
let H1=s1.T5[0].H1.findIndex((st)=>st.seat==a)
let H2=s1.T5[0].H2.findIndex((st)=>st.seat==a)
 let b=s1.T5[0].b.findIndex((st)=>st.seat==a)
let I1=s1.T5[0].I1.findIndex((st)=>st.seat==a)
let I2=s1.T5[0].I2.findIndex((st)=>st.seat==a)
 let I3=s1.T5[0].I3.findIndex((st)=>st.seat==a)
let J1=s1.T5[0].J1.findIndex((st)=>st.seat==a)
let J2=s1.T5[0].J2.findIndex((st)=>st.seat==a)
 let J3=s1.T5[0].J3.findIndex((st)=>st.seat==a)
 let ticket=s1.ticket.findIndex((st)=>st.seat==a)
 console.log(ticket)
let HEL=""
   A===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1&&A===-1?ticket==-1?s1.ticket.push({price:390,seat:a}):s1.ticket.splice(ticket,1):HEL=2

       A===-1?HEL=2:s1.T5[0].A[A].isSelected==false?s1.T5[0].A[A].isSelected=true:s1.T5[0].A[A].isSelected=false
       B===-1?HEL=2:s1.T5[0].B[B].isSelected==false?s1.T5[0].B[B].isSelected=true:s1.T5[0].B[B].isSelected=false
       C1===-1?HEL=2:s1.T5[0].C1[C1].isSelected==false?s1.T5[0].C1[C1].isSelected=true:s1.T5[0].C1[C1].isSelected=false
       C2===-1?HEL=2:s1.T5[0].C2[C2].isSelected==false?s1.T5[0].C2[C2].isSelected=true:s1.T5[0].C2[C2].isSelected=false
       C3===-1?HEL=2:s1.T5[0].C3[C3].isSelected==false?s1.T5[0].C3[C3].isSelected=true:s1.T5[0].C3[C3].isSelected=false
       D1===-1?HEL=2:s1.T5[0].D1[D1].isSelected==false?s1.T5[0].D1[D1].isSelected=true:s1.T5[0].D1[D1].isSelected=false
       D2===-1?HEL=2:s1.T5[0].D2[D2].isSelected==false?s1.T5[0].D2[D2].isSelected=true:s1.T5[0].D2[D2].isSelected=false
     D3  ===-1?HEL=2:s1.T5[0].D3[D3].isSelected==false?s1.T5[0].D3[D3].isSelected=true:s1.T5[0].D3[D3].isSelected=false
    E1===-1?HEL=2:s1.T5[0].E1[E1].isSelected==false?s1.T5[0].E1[E1].isSelected=true:s1.T5[0].E1[E1].isSelected=false
    E2===-1?HEL=2:s1.T5[0].E2[E2].isSelected==false?s1.T5[0].E2[E2].isSelected=true:s1.T5[0].E2[E2].isSelected=false
    E3===-1?HEL=2:s1.T5[0].E3[E3].isSelected==false?s1.T5[0].E3[E3].isSelected=true:s1.T5[0].E3[E3].isSelected=false
   F1===-1?HEL=2:s1.T5[0].F1[F1].isSelected==false?s1.T5[0].F1[F1].isSelected=true:s1.T5[0].F1[F1].isSelected=false
   F2===-1?HEL=2:s1.T5[0].F2[F2].isSelected==false?s1.T5[0].F2[F2].isSelected=true:s1.T5[0].F2[F2].isSelected=false
   F2===-1?HEL=2:s1.T5[0].F3[F3].isSelected==false?s1.T5[0].F3[F3].isSelected=true:s1.T5[0].F3[F3].isSelected=false
   G1===-1?HEL=2:s1.T5[0].G1[G1].isSelected==false?s1.T5[0].G1[G1].isSelected=true:s1.T5[0].G1[G1].isSelected=false
   G2===-1?HEL=2:s1.T5[0].G2[G2].isSelected==false?s1.T5[0].G2[G2].isSelected=true:s1.T5[0].G2[G2].isSelected=false
   G3===-1?HEL=2:s1.T5[0].G3[G3].isSelected==false?s1.T5[0].G3[G3].isSelected=true:s1.T5[0].G3[G3].isSelected=false
   H1===-1?HEL=2:s1.T5[0].H1[H1].isSelected==false?s1.T5[0].H1[H1].isSelected=true:s1.T5[0].H1[H1].isSelected=false
   H2===-1?HEL=2:s1.T5[0].H2[H2].isSelected==false?s1.T5[0].H2[H2].isSelected=true:s1.T5[0].H2[H2].isSelected=false
   b===-1?HEL=2:s1.T5[0].b[b].isSelected==false?s1.T5[0].b[b].isSelected=true:s1.T5[0].b[b].isSelected=false
   I1===-1?HEL=2:s1.T5[0].I1[I1].isSelected==false?s1.T5[0].I1[I1].isSelected=true:s1.T5[0].I1[I1].isSelected=false
   I2===-1?HEL=2:s1.T5[0].I2[I2].isSelected==false?s1.T5[0].I2[I2].isSelected=true:s1.T5[0].I2[I2].isSelected=false
   I3===-1?HEL=2:s1.T5[0].I3[I3].isSelected==false?s1.T5[0].I3[I3].isSelected=true:s1.T5[0].I3[I3].isSelected=false
   J1===-1?HEL=2:s1.T5[0].J1[J1].isSelected==false?s1.T5[0].J1[J1].isSelected=true:s1.T5[0].J1[J1].isSelected=false
   J2===-1?HEL=2:s1.T5[0].J2[J2].isSelected==false?s1.T5[0].J2[J2].isSelected=true:s1.T5[0].J2[J2].isSelected=false
   J3===-1?HEL=2:s1.T5[0].J3[J3].isSelected==false?s1.T5[0].J3[J3].isSelected=true:s1.T5[0].J3[J3].isSelected=false
     

   I1===-1?HEL=2:s1.T5[0].I1[I1].isSelected=true
   I2===-1?HEL=2:s1.T5[0].I2[I2].isSelected=true
    I3===-1?HEL=2:s1.T5[0].I3[I3].isSelected=true
   J1===-1?HEL=2:s1.T5[0].J1[J1].isSelected=true
   J2===-1?HEL=2:s1.T5[0].J2[J2].isSelected=true
    J3===-1?HEL=2:s1.T5[0].J3[J3].isSelected=true
    this.setState(s1)
  }
  ticket3=(a)=>{
    console.log(a)
    const user=authSys.getUser()
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    let qq=""
   !user?alert("please login"):qq=a
   !user? window.location=(`/home/${location1}/${Movies}/${time}?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}&login=yes`):qq=a
let s1={...this.state}
let A=s1.T3[0].A.findIndex((st)=>st.seat==a)
let B=s1.T3[0].B.findIndex((st)=>st.seat==a)


let C1=s1.T3[0].C1.findIndex((st)=>st.seat==a)
let C2=s1.T3[0].C2.findIndex((st)=>st.seat==a)
let C3=s1.T3[0].C3.findIndex((st)=>st.seat==a)
let D1=s1.T3[0].D1.findIndex((st)=>st.seat==a)
let D2=s1.T3[0].D2.findIndex((st)=>st.seat==a)
let D3=s1.T3[0].D3.findIndex((st)=>st.seat==a)
let E1=s1.T3[0].E1.findIndex((st)=>st.seat==a)
let E2=s1.T3[0].E2.findIndex((st)=>st.seat==a)
 let E3=s1.T3[0].E3.findIndex((st)=>st.seat==a)
let F1=s1.T3[0].F1.findIndex((st)=>st.seat==a)
let F2=s1.T3[0].F2.findIndex((st)=>st.seat==a)
 let F3=s1.T3[0].F3.findIndex((st)=>st.seat==a)
let G1=s1.T3[0].G1.findIndex((st)=>st.seat==a)
let G2=s1.T3[0].G2.findIndex((st)=>st.seat==a)
 let G3=s1.T3[0].G3.findIndex((st)=>st.seat==a)
let H1=s1.T3[0].H1.findIndex((st)=>st.seat==a)
let H2=s1.T3[0].H2.findIndex((st)=>st.seat==a)
 let b=s1.T3[0].b.findIndex((st)=>st.seat==a)
let I1=s1.T3[0].I1.findIndex((st)=>st.seat==a)
let I2=s1.T3[0].I2.findIndex((st)=>st.seat==a)
 let I3=s1.T3[0].I3.findIndex((st)=>st.seat==a)
let J1=s1.T3[0].J1.findIndex((st)=>st.seat==a)
let J2=s1.T3[0].J2.findIndex((st)=>st.seat==a)
 let J3=s1.T3[0].J3.findIndex((st)=>st.seat==a)
 let ticket=s1.ticket.findIndex((st)=>st.seat==a)
 console.log(ticket)
let HEL=""
   A===-1?HEL=2:ticket==-1?s1.ticket.push({price:250,seat:a}):s1.ticket.splice(ticket,1)
   B===-1?HEL=2:ticket==-1?s1.ticket.push({price:250,seat:a}):s1.ticket.splice(ticket,1)
   B===-1&&A===-1?ticket==-1?s1.ticket.push({price:250,seat:a}):s1.ticket.splice(ticket,1):HEL=2

       A===-1?HEL=2:s1.T3[0].A[A].isSelected==false?s1.T3[0].A[A].isSelected=true:s1.T3[0].A[A].isSelected=false
       B===-1?HEL=2:s1.T3[0].B[B].isSelected==false?s1.T3[0].B[B].isSelected=true:s1.T3[0].B[B].isSelected=false
       C1===-1?HEL=2:s1.T3[0].C1[C1].isSelected==false?s1.T3[0].C1[C1].isSelected=true:s1.T3[0].C1[C1].isSelected=false
       C2===-1?HEL=2:s1.T3[0].C2[C2].isSelected==false?s1.T3[0].C2[C2].isSelected=true:s1.T3[0].C2[C2].isSelected=false
       C3===-1?HEL=2:s1.T3[0].C3[C3].isSelected==false?s1.T3[0].C3[C3].isSelected=true:s1.T3[0].C3[C3].isSelected=false
       D1===-1?HEL=2:s1.T3[0].D1[D1].isSelected==false?s1.T3[0].D1[D1].isSelected=true:s1.T3[0].D1[D1].isSelected=false
       D2===-1?HEL=2:s1.T3[0].D2[D2].isSelected==false?s1.T3[0].D2[D2].isSelected=true:s1.T3[0].D2[D2].isSelected=false
     D3  ===-1?HEL=2:s1.T3[0].D3[D3].isSelected==false?s1.T3[0].D3[D3].isSelected=true:s1.T3[0].D3[D3].isSelected=false
    E1===-1?HEL=2:s1.T3[0].E1[E1].isSelected==false?s1.T3[0].E1[E1].isSelected=true:s1.T3[0].E1[E1].isSelected=false
    E2===-1?HEL=2:s1.T3[0].E2[E2].isSelected==false?s1.T3[0].E2[E2].isSelected=true:s1.T3[0].E2[E2].isSelected=false
    E3===-1?HEL=2:s1.T3[0].E3[E3].isSelected==false?s1.T3[0].E3[E3].isSelected=true:s1.T3[0].E3[E3].isSelected=false
   F1===-1?HEL=2:s1.T3[0].F1[F1].isSelected==false?s1.T3[0].F1[F1].isSelected=true:s1.T3[0].F1[F1].isSelected=false
   F2===-1?HEL=2:s1.T3[0].F2[F2].isSelected==false?s1.T3[0].F2[F2].isSelected=true:s1.T3[0].F2[F2].isSelected=false
   F2===-1?HEL=2:s1.T3[0].F3[F3].isSelected==false?s1.T3[0].F3[F3].isSelected=true:s1.T3[0].F3[F3].isSelected=false
   G1===-1?HEL=2:s1.T3[0].G1[G1].isSelected==false?s1.T3[0].G1[G1].isSelected=true:s1.T3[0].G1[G1].isSelected=false
   G2===-1?HEL=2:s1.T3[0].G2[G2].isSelected==false?s1.T3[0].G2[G2].isSelected=true:s1.T3[0].G2[G2].isSelected=false
   G3===-1?HEL=2:s1.T3[0].G3[G3].isSelected==false?s1.T3[0].G3[G3].isSelected=true:s1.T3[0].G3[G3].isSelected=false
   H1===-1?HEL=2:s1.T3[0].H1[H1].isSelected==false?s1.T3[0].H1[H1].isSelected=true:s1.T3[0].H1[H1].isSelected=false
   H2===-1?HEL=2:s1.T3[0].H2[H2].isSelected==false?s1.T3[0].H2[H2].isSelected=true:s1.T3[0].H2[H2].isSelected=false
   b===-1?HEL=2:s1.T3[0].b[b].isSelected==false?s1.T3[0].b[b].isSelected=true:s1.T3[0].b[b].isSelected=false
   I1===-1?HEL=2:s1.T3[0].I1[I1].isSelected==false?s1.T3[0].I1[I1].isSelected=true:s1.T3[0].I1[I1].isSelected=false
   I2===-1?HEL=2:s1.T3[0].I2[I2].isSelected==false?s1.T3[0].I2[I2].isSelected=true:s1.T3[0].I2[I2].isSelected=false
   I3===-1?HEL=2:s1.T3[0].I3[I3].isSelected==false?s1.T3[0].I3[I3].isSelected=true:s1.T3[0].I3[I3].isSelected=false
   J1===-1?HEL=2:s1.T3[0].J1[J1].isSelected==false?s1.T3[0].J1[J1].isSelected=true:s1.T3[0].J1[J1].isSelected=false
   J2===-1?HEL=2:s1.T3[0].J2[J2].isSelected==false?s1.T3[0].J2[J2].isSelected=true:s1.T3[0].J2[J2].isSelected=false
   J3===-1?HEL=2:s1.T3[0].J3[J3].isSelected==false?s1.T3[0].J3[J3].isSelected=true:s1.T3[0].J3[J3].isSelected=false
     

   I1===-1?HEL=2:s1.T3[0].I1[I1].isSelected=true
   I2===-1?HEL=2:s1.T3[0].I2[I2].isSelected=true
    I3===-1?HEL=2:s1.T3[0].I3[I3].isSelected=true
   J1===-1?HEL=2:s1.T3[0].J1[J1].isSelected=true
   J2===-1?HEL=2:s1.T3[0].J2[J2].isSelected=true
    J3===-1?HEL=2:s1.T3[0].J3[J3].isSelected=true
    this.setState(s1)
  }
  ticket4=(a)=>{
    console.log(a)
    const user=authSys.getUser()
    let {location1,Movies,time} = this.props.match.params;
    let queryParams = queryString.parse(this.props.location.search);
    let qq=""
   !user?alert("please login"):qq=a
   !user? window.location=(`/home/${location1}/${Movies}/${time}?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}&login=yes`):qq=a
let s1={...this.state}
let A=s1.T4[0].A.findIndex((st)=>st.seat==a)
let B=s1.T4[0].B.findIndex((st)=>st.seat==a)


let C1=s1.T4[0].C1.findIndex((st)=>st.seat==a)
let C2=s1.T4[0].C2.findIndex((st)=>st.seat==a)
let C3=s1.T4[0].C3.findIndex((st)=>st.seat==a)
let D1=s1.T4[0].D1.findIndex((st)=>st.seat==a)
let D2=s1.T4[0].D2.findIndex((st)=>st.seat==a)
let D3=s1.T4[0].D3.findIndex((st)=>st.seat==a)
let E1=s1.T4[0].E1.findIndex((st)=>st.seat==a)
let E2=s1.T4[0].E2.findIndex((st)=>st.seat==a)
 let E3=s1.T4[0].E3.findIndex((st)=>st.seat==a)
let F1=s1.T4[0].F1.findIndex((st)=>st.seat==a)
let F2=s1.T4[0].F2.findIndex((st)=>st.seat==a)
 let F3=s1.T4[0].F3.findIndex((st)=>st.seat==a)
let G1=s1.T4[0].G1.findIndex((st)=>st.seat==a)
let G2=s1.T4[0].G2.findIndex((st)=>st.seat==a)
 let G3=s1.T4[0].G3.findIndex((st)=>st.seat==a)
let H1=s1.T4[0].H1.findIndex((st)=>st.seat==a)
let H2=s1.T4[0].H2.findIndex((st)=>st.seat==a)
 let b=s1.T4[0].b.findIndex((st)=>st.seat==a)
let I1=s1.T4[0].I1.findIndex((st)=>st.seat==a)
let I2=s1.T4[0].I2.findIndex((st)=>st.seat==a)
 let I3=s1.T4[0].I3.findIndex((st)=>st.seat==a)
let J1=s1.T4[0].J1.findIndex((st)=>st.seat==a)
let J2=s1.T4[0].J2.findIndex((st)=>st.seat==a)
 let J3=s1.T4[0].J3.findIndex((st)=>st.seat==a)
 let ticket=s1.ticket.findIndex((st)=>st.seat==a)
 console.log(ticket)
let HEL=""
   A===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1?HEL=2:ticket==-1?s1.ticket.push({price:450,seat:a}):s1.ticket.splice(ticket,1)
   B===-1&&A===-1?ticket==-1?s1.ticket.push({price:250,seat:a}):s1.ticket.splice(ticket,1):HEL=2

       A===-1?HEL=2:s1.T4[0].A[A].isSelected==false?s1.T4[0].A[A].isSelected=true:s1.T4[0].A[A].isSelected=false
       B===-1?HEL=2:s1.T4[0].B[B].isSelected==false?s1.T4[0].B[B].isSelected=true:s1.T4[0].B[B].isSelected=false
       C1===-1?HEL=2:s1.T4[0].C1[C1].isSelected==false?s1.T4[0].C1[C1].isSelected=true:s1.T4[0].C1[C1].isSelected=false
       C2===-1?HEL=2:s1.T4[0].C2[C2].isSelected==false?s1.T4[0].C2[C2].isSelected=true:s1.T4[0].C2[C2].isSelected=false
       C3===-1?HEL=2:s1.T4[0].C3[C3].isSelected==false?s1.T4[0].C3[C3].isSelected=true:s1.T4[0].C3[C3].isSelected=false
       D1===-1?HEL=2:s1.T4[0].D1[D1].isSelected==false?s1.T4[0].D1[D1].isSelected=true:s1.T4[0].D1[D1].isSelected=false
       D2===-1?HEL=2:s1.T4[0].D2[D2].isSelected==false?s1.T4[0].D2[D2].isSelected=true:s1.T4[0].D2[D2].isSelected=false
     D3  ===-1?HEL=2:s1.T4[0].D3[D3].isSelected==false?s1.T4[0].D3[D3].isSelected=true:s1.T4[0].D3[D3].isSelected=false
    E1===-1?HEL=2:s1.T4[0].E1[E1].isSelected==false?s1.T4[0].E1[E1].isSelected=true:s1.T4[0].E1[E1].isSelected=false
    E2===-1?HEL=2:s1.T4[0].E2[E2].isSelected==false?s1.T4[0].E2[E2].isSelected=true:s1.T4[0].E2[E2].isSelected=false
    E3===-1?HEL=2:s1.T4[0].E3[E3].isSelected==false?s1.T4[0].E3[E3].isSelected=true:s1.T4[0].E3[E3].isSelected=false
   F1===-1?HEL=2:s1.T4[0].F1[F1].isSelected==false?s1.T4[0].F1[F1].isSelected=true:s1.T4[0].F1[F1].isSelected=false
   F2===-1?HEL=2:s1.T4[0].F2[F2].isSelected==false?s1.T4[0].F2[F2].isSelected=true:s1.T4[0].F2[F2].isSelected=false
   F2===-1?HEL=2:s1.T4[0].F3[F3].isSelected==false?s1.T4[0].F3[F3].isSelected=true:s1.T4[0].F3[F3].isSelected=false
   G1===-1?HEL=2:s1.T4[0].G1[G1].isSelected==false?s1.T4[0].G1[G1].isSelected=true:s1.T4[0].G1[G1].isSelected=false
   G2===-1?HEL=2:s1.T4[0].G2[G2].isSelected==false?s1.T4[0].G2[G2].isSelected=true:s1.T4[0].G2[G2].isSelected=false
   G3===-1?HEL=2:s1.T4[0].G3[G3].isSelected==false?s1.T4[0].G3[G3].isSelected=true:s1.T4[0].G3[G3].isSelected=false
   H1===-1?HEL=2:s1.T4[0].H1[H1].isSelected==false?s1.T4[0].H1[H1].isSelected=true:s1.T4[0].H1[H1].isSelected=false
   H2===-1?HEL=2:s1.T4[0].H2[H2].isSelected==false?s1.T4[0].H2[H2].isSelected=true:s1.T4[0].H2[H2].isSelected=false
   b===-1?HEL=2:s1.T4[0].b[b].isSelected==false?s1.T4[0].b[b].isSelected=true:s1.T4[0].b[b].isSelected=false
   I1===-1?HEL=2:s1.T4[0].I1[I1].isSelected==false?s1.T4[0].I1[I1].isSelected=true:s1.T4[0].I1[I1].isSelected=false
   I2===-1?HEL=2:s1.T4[0].I2[I2].isSelected==false?s1.T4[0].I2[I2].isSelected=true:s1.T4[0].I2[I2].isSelected=false
   I3===-1?HEL=2:s1.T4[0].I3[I3].isSelected==false?s1.T4[0].I3[I3].isSelected=true:s1.T4[0].I3[I3].isSelected=false
   J1===-1?HEL=2:s1.T4[0].J1[J1].isSelected==false?s1.T4[0].J1[J1].isSelected=true:s1.T4[0].J1[J1].isSelected=false
   J2===-1?HEL=2:s1.T4[0].J2[J2].isSelected==false?s1.T4[0].J2[J2].isSelected=true:s1.T4[0].J2[J2].isSelected=false
   J3===-1?HEL=2:s1.T4[0].J3[J3].isSelected==false?s1.T4[0].J3[J3].isSelected=true:s1.T4[0].J3[J3].isSelected=false
     

   I1===-1?HEL=2:s1.T4[0].I1[I1].isSelected=true
   I2===-1?HEL=2:s1.T4[0].I2[I2].isSelected=true
    I3===-1?HEL=2:s1.T4[0].I3[I3].isSelected=true
   J1===-1?HEL=2:s1.T4[0].J1[J1].isSelected=true
   J2===-1?HEL=2:s1.T4[0].J2[J2].isSelected=true
    J3===-1?HEL=2:s1.T4[0].J3[J3].isSelected=true
    this.setState(s1)
  }
  render() {
    let queryParams = queryString.parse(this.props.location.search);
    let {location1,Movies,time} = this.props.match.params;
    let find = this.state.time.find((st) => st.time == queryParams.time);

    let ticket = this.state.ticket.reduce((acc,curr) => acc+curr.price,0);
    return (
      <React.Fragment>
        <div className="head bg-dark" style={{ width: "100%" }}>
          <div className="row">
          <div className="col-1">
        <h2 className="text-white" style={{fontSize:"large",margin:"15px"}} onClick={()=>this.back()}><MdOutlineArrowBackIosNew /></h2> 
         </div>
          <div className="col-11">
          <h1
            className="text-white "
            style={{ margin: "4px", fontSize: "large" }}
          >
            {queryParams.q} <b style={{ float: "right" }}> {this.state.ticket.length} ticket <b className="col-1" onClick={()=>this.back1()}>
        X
         </b> </b>
          </h1>
          <b
            className="text-white "
            style={{ margin: "4px", fontSize: "large" }}
          >
            {queryParams.room}{" "}
          </b></div></div>
        </div>

        <div className=" container bg-light">
          <b>{Date().toLocaleString()} </b>
         <br />
          {this.state.theater.map((st, index) => (
            <React.Fragment>
              {st.time.map((st1) =>
          st1.time==this.state.showtime?(
                  <button
                    className="btn btn-light  text-white  m-1  border"
                    onClick={() => this.time(st1.time)}
                     style={{ background: "#4C9A2A",borderColor:"gray" }}
                  >
                    {st1.time}
                  </button>
                ) : (
                  <button
                    className="btn btn-light  text-secondary  m-1 "
                    onClick={() => this.time(st1.time)}
                    style={{borderColor:"gray" }}
                  >
                    {st1.time}
                  </button>
                )
              )}
            </React.Fragment>
          ))}
        </div>
        <div
          className="container bg-light"
          style={{ widows: "80%", background: "light" }}
        >

          {this.state.showtime==' 9:00 AM'?<React.Fragment>
          <b>Recliner-Rs 450</b>
          <hr />
          
     
         
  
         
         
         <div className="row">
            <div className="col-4">
              J{" "}
              {this.state.J1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white    m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm" onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div> </div>

            
          <div className="row">
            <div className="col-4">
              I{" "}
              {this.state.I1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}  
                     style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <b>Gold -Rs 90</b>
          </div>
          <hr />
            <div className="row">
            <div className="col-4">
              H{" "}
              {this.state.H1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}     
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.b.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ):(
                    <button className="btn btn-light  text-secondary    m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
         
          <div className="row">
            <div className="col-4">
              G{" "}
              {this.state.G1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
         
          <div className="row">
            <div className="col-4">
              F{" "}
              {this.state.F1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)} 
                      style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
         
          <div className="row">
            <div className="col-4">
              E{" "}
              {this.state.E1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              D{" "}
              {this.state.D1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
         
            <div className="row">
            <div className="col-4">
              C{" "}
              {this.state.C1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)} 
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
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
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
           < br />
       
           <div className="row">
           <div className="col-3">B &nbsp;</div>
            <div className="col-8">
         
              {this.state.B.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-1"></div>
          </div>
         
            <div className="row">
              <div className="col-3">A &nbsp;</div>
            <div className="col-8">
          
              {this.state.A.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                      onClick={()=>this.ticket(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                      style={{ background: "#4C9A2A",borderColor:"gray",fontSize:"13px" }}
                      onClick={()=>this.ticket(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-2"></div>
          </div>
         
            
        <div className="text-center">  
        {this.state.ticket.length==0?
<Icon style={{width:"150px"}}/>:
<Link to={`/home/${location1}/${Movies}/${time}/Payment?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}`} onClick={()=>this.Pay(ticket)}>
<button className="btn btn-primary" style={{paddingLeft:"200px",paddingRight:"200px"}}> <b style={{fontSize:"larger"}} >
    Pay{" "}  {" "}RS.{" "} {ticket}</b></button></Link>}
</div>
          
          </React.Fragment>
          
          
 












//T2


          
          :this.state.showtime==" 12:00 AM"? <React.Fragment>
          <b>Recliner-Rs 450</b>
          <hr />
          <div className="row">
          <div className="col-2"></div>
            <div className="col-8">
              <b>A</b>{" "}
              {this.state.T2[0].A.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ) :st.number===""?(
                    <button
                      className="btn btn-light    m-1 btn-sm"
                     
                      onClick={()=>this.ticket5(st.seat)}  
                      disabled
                    >
                      {st.number}
                    </button>
                  ):st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                      style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
         
          </div>
         
          <div className="row">
          <div className="col-2"></div>
            <div className="col-8">
            <b>B</b>{" "}
              {this.state.T2[0].B.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ):st.number===""?(
                    <button
                      className="btn btn-light    m-1 btn-sm"
                     
                      onClick={()=>this.ticket5(st.seat)}  
                      disabled
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
    
          </div>
         
         
  
          <div>
            <b>Gold -Rs 150</b>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">
              <b>C</b>{" "}
              {this.state.T2[0].C1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].C2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)} 
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].C3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>D</b>{" "}
              {this.state.T2[0].D1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].D2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].D3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>E</b>{" "}
              {this.state.T2[0].E1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].E2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].E3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>F</b>{" "}
              {this.state.T2[0].F1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].F2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].F3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>G</b>{" "}
              {this.state.T2[0].G1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].G2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].G3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>H</b>{" "}
              {this.state.T2[0].H1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}     
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].H2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].b.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ):(
                    <button className="btn btn-light  text-secondary   m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>I</b>{" "}
              {this.state.T2[0].I1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].I2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].I3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>J</b>{" "}
              {this.state.T2[0].J1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white    m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T2[0].J2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T2[0].J3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket1(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm" onClick={()=>this.ticket1(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
            
        <div className="text-center">  
        {this.state.ticket.length==0?
<Icon style={{width:"150px"}}/>:
<Link to={`/home/${location1}/${Movies}/${time}/Payment?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}`} onClick={()=>this.Pay(ticket)}>
<button className="btn btn-primary" style={{paddingLeft:"200px",paddingRight:"200px"}}> <b style={{fontSize:"larger"}} >
    Pay{" "}  {" "}RS.{" "} {ticket}</b></button></Link>}
</div>
          
          </React.Fragment>
          //T3
          :this.state.showtime==" 1:15 PM"? <React.Fragment>
        <b>Gold -Rs 250</b>
          <hr />
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <b>A</b>{" "}
              {this.state.T3[0].A.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                      style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
           
          </div>
         
          <div className="row">
          <div className="col-2"></div>
            <div className="col-8">
              <b>B</b>{" "}
              {this.state.T3[0].B.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
       
          </div>
       
          <div>
           
          </div>
     
     
     
          <div className="row">
            <div className="col-4">
              <b>C</b>{" "}
              {this.state.T3[0].C1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].C2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)} 
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].C3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>D</b>{" "}
              {this.state.T3[0].D1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].D2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].D3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>E</b>{" "}
              {this.state.T3[0].E1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].E2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].E3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>F</b>{" "}
              {this.state.T3[0].F1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].F2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].F3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>G</b>{" "}
              {this.state.T3[0].G1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].G2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].G3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>H</b>{" "}
              {this.state.T3[0].H1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}     
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].H2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].b.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ):(
                    <button className="btn btn-light  text-secondary  m-1 btn-sm "  onClick={()=>this.ticket3(st.seat)}  
                     style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>I</b>{" "}
              {this.state.T3[0].I1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].I2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].I3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>J</b>{" "}
              {this.state.T3[0].J1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white    m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T3[0].J2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T3[0].J3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket3(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm" onClick={()=>this.ticket3(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
            
        <div className="text-center">  
        {this.state.ticket.length==0?
<Icon style={{width:"150px"}}/>:
<Link to={`/home/${location1}/${Movies}/${time}/Payment?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}`} onClick={()=>this.Pay(ticket)}>
<button className="btn btn-primary" style={{paddingLeft:"200px",paddingRight:"200px"}}> <b style={{fontSize:"larger"}} >
    Pay{" "}  {" "}RS.{" "} {ticket}</b></button></Link>}
</div>
          
          </React.Fragment>

                  //T4
           :this.state.showtime==
           "3:45 PM"? <React.Fragment>
          <b>Recliner-Rs 450</b>
          <hr />
          <div className="row">
            <div className="col-8">
              <b>A</b>{" "}
              {this.state.T4[0].A.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                      style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4"></div>
          </div>
         
          <div className="row">
            <div className="col-8">
              <b>B</b>{" "}
              {this.state.T4[0].B.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4"></div>
          </div>
         
         
  
          <div>
            <b>Gold -Rs 250</b>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">
              <b>C</b>{" "}
              {this.state.T4[0].C1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].C2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)} 
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].C3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>D</b>{" "}
              {this.state.T4[0].D1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].D2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].D3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>E</b>{" "}
              {this.state.T4[0].E1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].E2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].E3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>F</b>{" "}
              {this.state.T4[0].F1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].F2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].F3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>G</b>{" "}
              {this.state.T4[0].G1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].G2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].G3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>H</b>{" "}
              {this.state.T4[0].H1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}     
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].H2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].b.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ):(
                    <button className="btn btn-light  text-secondary    m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>I</b>{" "}
              {this.state.T4[0].I1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].I2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].I3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>J</b>{" "}
              {this.state.T4[0].J1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white    m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T4[0].J2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T4[0].J3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm" onClick={()=>this.ticket4(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
            
        <div className="text-center">  
        {this.state.ticket.length==0?
<Icon style={{width:"150px"}}/>:
<Link to={`/home/${location1}/${Movies}/${time}/Payment?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}`} onClick={()=>this.Pay(ticket)}>
<button className="btn btn-primary" style={{paddingLeft:"200px",paddingRight:"200px"}}> <b style={{fontSize:"larger"}} >
    Pay{" "}  {" "}RS.{" "} {ticket}</b></button></Link>}
</div>
          
          </React.Fragment>
           :this.state.showtime=="5:45 PM"? <React.Fragment>
          <b>Recliner-Rs 400</b>
          <hr />
          <div className="row">
          <div className="col-2"></div>
            <div className="col-8">
              <b>A</b>{" "}
              {this.state.T5[0].A.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                      onClick={()=>this.ticket4(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ) :st.number===""?(
                    <button
                      className="btn btn-light    m-1 btn-sm"
                     
                      onClick={()=>this.ticket5(st.seat)}  
                      disabled
                    >
                      {st.number}
                    </button>
                  ):st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                      style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
         
          </div>
         
          <div className="row">
          <div className="col-2"></div>
            <div className="col-8">
              <b>B</b>{" "}
              {this.state.T5[0].B.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ):st.number===""?(
                    <button
                      className="btn btn-light    m-1 btn-sm"
                     
                      onClick={()=>this.ticket5(st.seat)}  
                      disabled
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
    
          </div>
         
         
  
          <div>
            <b>Gold -Rs 390</b>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">
              <b>C</b>{" "}
              {this.state.T5[0].C1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].C2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)} 
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].C3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>D</b>{" "}
              {this.state.T5[0].D1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].D2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].D3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>E</b>{" "}
              {this.state.T5[0].E1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].E2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].E3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>F</b>{" "}
              {this.state.T5[0].F1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].F2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].F3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>G</b>{" "}
              {this.state.T5[0].G1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].G2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].G3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>H</b>{" "}
              {this.state.T5[0].H1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}     
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].H2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].b.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ):(
                    <button className="btn btn-light  text-secondary    m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>I</b>{" "}
              {this.state.T5[0].I1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].I2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].I3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>J</b>{" "}
              {this.state.T5[0].J1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white    m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T5[0].J2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T5[0].J3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket6(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm" onClick={()=>this.ticket6(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
            
        <div className="text-center">  
        {this.state.ticket.length==0?
<Icon style={{width:"150px"}}/>:
<Link to={`/home/${location1}/${Movies}/${time}/Payment?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}`} onClick={()=>this.Pay(ticket)}>
<button className="btn btn-primary" style={{paddingLeft:"200px",paddingRight:"200px"}}> <b style={{fontSize:"larger"}} >
    Pay{" "}  {" "}RS.{" "} {ticket}</b></button></Link>}
</div>
          
          </React.Fragment>
          :<React.Fragment>
          <b>Recliner-Rs 450</b>
          <hr />
          <div className="row">
            <div className="col-12">
              <b>A</b>{" "}
              {this.state.T6[0].A.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                      style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ):st.number===""?(
                    <button
                      className="btn btn-light    m-1 btn-sm"
                     
                      onClick={()=>this.ticket5(st.seat)}  
                      disabled
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
           
          </div>
         
          <div className="row">
            <div className="col-12">
              <b>B</b>{" "}
              {this.state.T6[0].B.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                    >
                      {st.number}
                    </button>
                  ):st.number===""?(
                    <button
                      className="btn btn-light    m-1 btn-sm"
                     
                      onClick={()=>this.ticket5(st.seat)}  
                      disabled
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          
          </div>
         
         
  
          <div>
            <b>Gold -Rs 250</b>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">
              <b>C</b>{" "}
              {this.state.T6[0].C1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].C2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)} 
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].C3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>D</b>{" "}
              {this.state.T6[0].D1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].D2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].D3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>E</b>{" "}
              {this.state.T6[0].E1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].E2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].E3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>F</b>{" "}
              {this.state.T6[0].F1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].F2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].F3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>G</b>{" "}
              {this.state.T6[0].G1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].G2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}    
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].G3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>H</b>{" "}
              {this.state.T6[0].H1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}     
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].H2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].b.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ):(
                    <button className="btn btn-light  text-secondary    m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>I</b>{" "}
              {this.state.T6[0].I1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].I2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].I3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary  text-white   m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
         
          <div className="row">
            <div className="col-4">
              <b>J</b>{" "}
              {this.state.T6[0].J1.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white    m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="col-4">
              {this.state.T6[0].J2.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}  
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm"  onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="col-4">
              {this.state.T6[0].J3.map((st, index) => (
                <React.Fragment>
                  {st.isReserved == true ? (
                    <button
                      className="btn btn-light  text-secondary  m-1 btn-sm"
                      style={{ background: "#2dc492",borderColor:"gray"}}
                    >
                      {st.number}
                    </button>
                  ) :st.isSelected===true?(
                    <button
                      className="btn btn-light  text-secondary text-white  m-1 btn-sm"
                       style={{ background: "#4C9A2A",borderColor:"gray"}}
                      onClick={()=>this.ticket5(st.seat)}   
                      
                    >
                      {st.number}
                    </button>
                  ): (
                    <button className="btn btn-light  text-secondary  m-1 btn-sm" onClick={()=>this.ticket5(st.seat)}   style={{borderColor:"gray"}}  >
                      {st.number}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
            
        <div className="text-center">  
        {this.state.ticket.length==0?
<Icon style={{width:"150px"}}/>:
<Link to={`/home/${location1}/${Movies}/${time}/Payment?q=${queryParams.q}&room=${queryParams.room}&date=${queryParams.date}`} onClick={()=>this.Pay(ticket)}>
<button className="btn btn-primary" style={{paddingLeft:"200px",paddingRight:"200px"}}> <b style={{fontSize:"larger"}} >
    Pay{" "}  {" "}RS.{" "} {ticket}</b></button></Link>}
</div>
          
          </React.Fragment>}

    
     
{queryParams.login=="yes"? <LoginPopup location1={location1} time={time} q={queryParams.q} room={queryParams.room} date={queryParams.date} />:[]} 
        </div>
      </React.Fragment>
    );
  }
}
export default Ticket;
