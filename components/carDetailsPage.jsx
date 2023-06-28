import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Carousel } from "react-bootstrap";



const CarDetailsPage = ({ car }) => {
  const carImagesData = [{ id:1,urls:["https://i.imgur.com/wAUhZuq.png", "https://i.imgur.com/3cV0QeO.png","https://i.imgur.com/JxiK8Dx.png"]},{ id:2,urls:["https://i.imgur.com/ZKNTBiy.png", "https://i.imgur.com/POCCyQq.png","https://i.imgur.com/ZgwHDpF.png"]},{ id:3,urls:["https://i.imgur.com/c8fP7bm.png", "https://i.imgur.com/BxsXYBk.png","https://i.imgur.com/tInES5t.png"]},{ id:4,urls:["https://i.imgur.com/1SDyXHT.png", "https://i.imgur.com/DhRZ936.png","https://i.imgur.com/uIgDEPX.png"]},{ id:5,urls:["https://i.imgur.com/ODpHqUi.png", "https://i.imgur.com/QsVCEaX.png","https://i.imgur.com/jYBoEJK.png"]},{ id:6,urls:["https://i.imgur.com/RGLTmba.png", "https://i.imgur.com/fPDkePA.png","https://i.imgur.com/AYU8WAp.png"]}];

  const extraInfoData = [{ id:1, extraInfo:["ADDITIONAL VEHICLE INFORMATION:","Aux Compatibility: Yes","Accidental: No","Flood Affected: No","ABS: Yes","Insurance Type: Third Party","Registration Place: KL","Power steering: Yes","Color: White","Insurance: Yes","Condition: Used","No. of Owners: First","Variant: Celerio VXi","Exchange: Yes","Type of Car: Hatchback","AM/FM Radio: Yes","USB Compatibility: Yes","Transmission: Manual","Air Conditioning: With Heater "]},{ id:2, extraInfo:["ADDITIONAL VEHICLE INFORMATION:","Aux Compatibility: Yes","Accidental: No","Flood Affected: No","ABS: Yes","Insurance Type: Third Party","Registration Place: KL","Power steering: Yes","Color: White","Insurance: Yes","Condition: Used","No. of Owners: First","Variant: Celerio VXi","Exchange: Yes","Type of Car: Hatchback","AM/FM Radio: Yes","USB Compatibility: Yes","Transmission: Manual","Air Conditioning: With Heater "]},{ id:3, extraInfo:["ADDITIONAL VEHICLE INFORMATION:","Aux Compatibility: Yes","Accidental: No","Flood Affected: No","ABS: Yes","Insurance Type: Third Party","Registration Place: KL","Power steering: Yes","Color: White","Insurance: Yes","Condition: Used","No. of Owners: First","Variant: Celerio VXi","Exchange: Yes","Type of Car: Hatchback","AM/FM Radio: Yes","USB Compatibility: Yes","Transmission: Manual","Air Conditioning: With Heater "]},{ id:4, extraInfo:["ADDITIONAL VEHICLE INFORMATION:","Aux Compatibility: Yes","Accidental: No","Flood Affected: No","ABS: Yes","Insurance Type: Third Party","Registration Place: KL","Power steering: Yes","Color: White","Insurance: Yes","Condition: Used","No. of Owners: First","Variant: Celerio VXi","Exchange: Yes","Type of Car: Hatchback","AM/FM Radio: Yes","USB Compatibility: Yes","Transmission: Manual","Air Conditioning: With Heater "]},
  { id:5, extraInfo:["ADDITIONAL VEHICLE INFORMATION:","Aux Compatibility: Yes","Accidental: No","Flood Affected: No","ABS: Yes","Insurance Type: Third Party","Registration Place: KL","Power steering: Yes","Color: White","Insurance: Yes","Condition: Used","No. of Owners: First","Variant: Celerio VXi","Exchange: Yes","Type of Car: Hatchback","AM/FM Radio: Yes","USB Compatibility: Yes","Transmission: Manual","Air Conditioning: With Heater "]},{ id:6, extraInfo:["ADDITIONAL VEHICLE INFORMATION:","Aux Compatibility: Yes","Accidental: No","Flood Affected: No","ABS: Yes","Insurance Type: Third Party","Registration Place: KL","Power steering: Yes","Color: White","Insurance: Yes","Condition: Used","No. of Owners: First","Variant: Celerio VXi","Exchange: Yes","Type of Car: Hatchback","AM/FM Radio: Yes","USB Compatibility: Yes","Transmission: Manual","Air Conditioning: With Heater "]}];
  const { id, price, year, miles, make, model, location, city, postedOn, image, fuel } = car;
  const carImages = carImagesData.find((item) => item.id === id)?.urls || [];
  const extraInfo = extraInfoData.find((item) => item.id === id)?.extraInfo || [];

  return (
    <div>

<img src="https://i.imgur.com/KMj5eG7.png" alt="Banner" style={{ width: '80%', alignSelf: "center", marginLeft: "10%" }} />

        
        
      

      <div className="container">
        <br/>
      <div className="row bg-light">
        <Breadcrumb>
        <Breadcrumb.Item  to="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item  to={`/make/${make}`}>{make}</Breadcrumb.Item>
        <Breadcrumb.Item active>{model}</Breadcrumb.Item>
      </Breadcrumb>
      <hr />

        </div>

        <div className="row">
          <div className="col-lg-6">
            <Carousel>
              {carImages.map((url, index) => (
                <Carousel.Item key={index}>
                  <img src={url} className="d-block w-100" alt={`Car Image ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="container m-1 border">
                <div className="row">
                    <h4>DETAILS</h4>
                    <div className="row">
                        <div className="col-3">
                            <p>BRAND</p>
                        </div>
                        <div className="col-3">
                            {make}
                        </div>
                        <div className="col-3">
                        MODEL
                        </div>
                        <div className="col-3">
                            {model}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>YEAR</p>
                        </div>
                        <div className="col-3">
                            {year}
                        </div>
                        <div className="col-3">
                        FUEL
                        </div>
                        <div className="col-3">
                            {fuel}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>KM DRIVEN</p>
                        </div>
                        <div className="col-3">
                            {miles}
                        </div>
                        </div>

                </div>
                <hr/>
                <div className="row">
                    <h4>DESCRIPTION</h4>
                    <ul>
              {extraInfo.map((info, index) => (
                <li style={{listStyle:"none"}} key={index}>{info}</li>
              ))}
            </ul>
                </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="container border m-1">

            
            <h4>Rs. {price} <i style={{marginLeft:"450px"}} className="fas fa-share-alt"></i> <i className="far fa-heart"></i></h4>
            <p>
              <b>{year} - {miles} km</b>
              <br />
              {make} {model}, {year}, {fuel}
              <br />
              {location}, {city} <span style={{ marginLeft: "470px" }}>{postedOn}</span>
            </p>
            </div>
            <div className="container border m-1">
  <h4>Seller Description</h4>
  <div className="d-flex align-items-center">
    <div className="col-10">
      <img width="20%" src="https://i.imgur.com/xLaJmx3.png" alt="Seller Image" />
    </div>
    <div className="col-2">
      <b>Mr. John</b>
    </div>
    
  </div>
  <br/>
  <div className="row">
        <button className="btn btn-primary">Chat with Seller!</button>
    </div>
</div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
