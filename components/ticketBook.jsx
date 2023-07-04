import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import queryString from "query-string";
import http from "./services/httpServer";
import logo from "./IMge/logo.png";
import "./col.css";
import Book1my from "./IMge/Book1my.jpg";

const TicketBook = ({ match, location, history,recentBooking }) => {
  const [ticket, setTicket] = useState([]);
  const [selOpt, setSelOpt] = useState("");
  const [view, setView] = useState(0);

  const handleRadioChange = (e) => {
    setSelOpt(e.target.value);
  };

  const fetchData = async () => {
    let response = await http.get(`/ticket1`);
    let { data } = response;
    setTicket(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [match]);

  const postData = async (url, obj) => {
    let response = await http.post(url, obj);
  };

  const back = () => {
    let { location1, Movies, time } = match.params;
    let queryParams = queryString.parse(location.search);
    window.location = `/home/${location1}/${Movies}`;
  };

  const changeView = () => {
    console.log("This is under Ticket Book",ticket)
    let ticket1 = {...ticket[0],paymentMethod:selOpt}
    recentBooking(ticket1);
    // this.props.recentBooking(s1.ticket);
    setView(2);
    // this.setState(s1);
  };

  const changeUrl = () => {
    const { location1, Movies } = match.params;
    const queryParams = queryString.parse(location.search);
    // this.props.recentBooking(this.state.ticket);
    history.push(`/home/${location1}/${Movies}`);
  };

  const radios = [
    { label: "QuikPay" },
    { label: "Debit/Credit Card" },
    { label: "Net Banking" },
    { label: "Mobile Wallets" },
    { label: "Gift Voucher" },
    { label: "UPI" },
    { label: "Redeem Points" },
  ];

  return (
    <div style={{ marginLeft: "150px", marginRight: "150px" }}>
      <div className="col-12" style={{ background: "black" }}>
        <img src={logo} alt="" srcset="" style={{ width: "100px" }} />
      </div>
      <br />

      {view === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={Book1my} alt="" width="100%" />
              <div className="row bg-danger">
                <span className="m-3 text-white">Payment Options</span>
              </div>
              <div className="row">
                <div className="col-5 ">
                  <div className="border p-4">
                    {radios.map((radio, index) => (
                      <div
                        className="bg-light"
                        key={index}
                        style={{ marginBottom: "10px" }}
                      >
                        <input
                          type="radio"
                          id={`radio${index}`}
                          name="radioGroup"
                          value={radio.label}
                          checked={selOpt === radio.label}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor={`radio${index}`}>{radio.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-7">
                  <h5>Enter your details - {selOpt} </h5>
                  <button
                    className="btn btn-danger"
                    style={{ marginTop: "140px" }}
                    onClick={changeView}
                  >
                    Make your Payment
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 border">
              {ticket.map((st) => (
                <div className="row" key={st.Movies}>
                  <h3 className="text-secondary">ORDER SUMMARY</h3>
                  {/* <h5>{st.Movies}</h5> */}
                  <div className="col-6">
                    <b style={{ fontSize: "small" }}>
                      {st.MoviesHall}
                      <br />
                      M-Ticket
                      <br />
                      {st.ticket.map((st) => st.seat).join(",")} <br />
                      {st.data}
                      <br />
                      {/* {st.time[0].showtime} */}
                      <br />
                    </b>
                    <br />
                  </div>
                  <div className="col-6">
                    <b style={{ fontSize: "small", float: "right" }}> </b>
                    <br />
                    <br />
                    <b style={{ fontSize: "large", float: "right" }}>
                      {st.ticket.length}
                    </b>
                    <br />
                    <b style={{ fontSize: "small", float: "right" }}>
                      Tickets
                    </b>
                    <br />
                    <b style={{ fontSize: "small", float: "right" }}></b>
                    <br />
                  </div>
                  ------------------------------------------------------------------------
                  <div className="col-6">
                    <span>Sub Total</span>
                    <br />
                    <b>+ Convenience Fees</b>
                    <br />
                    <br />
                    <b style={{ fontSize: "small" }}>
                      Contribution to Book a Smile
                    </b>
                    <br />
                    <span style={{ fontSize: "small" }}>
                      (Rs.1 per ticket has been added)
                    </span>
                  </div>
                  <div className="col-6">
                    <span style={{ float: "right" }}>
                      Rs.{st.amount}.00
                    </span>
                    <br />
                    <b style={{ float: "right" }}>
                      Rs.{(15.34 * st.ticket.length).toFixed(2)}
                    </b>
                    <br />
                    <br />
                    <b style={{ float: "right" }}>
                      Rs.{st.ticket.length}
                    </b>
                  </div>
                  <hr />
                  <b style={{ background: "#ffffa1", fontSize: "large" }}>
                    Amount Payable{" "}
                    <b style={{ marginLeft: "80px", float: "right" }}>
                      Rs.{(st.amount + 15.34 * st.ticket.length + st.ticket.length).toFixed(2)}
                    </b>
                  </b>
                </div>
              ))}
            </div>
            <div className="row">
              <div
                className="col-8"
                style={{ width: "100%" }}
              ></div>
              <div
                className="col-4"
                style={{
                  marginLeft: "70%",
                  marginTop: "50px",
                  maxWidth: 164,
                  width: "100%",
                  float: "right",
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="container"
          style={{
            textAlign: "center",
            alignItems: "center",
            verticalAlign: "middle",
          }}
        >
          <h4>Thank you for your Purchase !</h4>
          <button
            className="btn btn-danger col-2"
            onClick={changeUrl}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(TicketBook);
