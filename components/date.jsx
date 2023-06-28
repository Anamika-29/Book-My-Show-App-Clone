import React, { Component } from 'react';
import http from './services/httpServer';
class DateComponent extends Component {
  state = {
    currentDate: new Date(),
    nextDates: []
  }

  componentDidMount() {
    const { currentDate } = this.state;
    const nextDates = [];

    // Loop to calculate the next three dates
    for (let i = 1; i <= 3; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      nextDates.push(nextDate);
    }
    let arr= nextDates.map((date, index) => (
        <React.Fragment>
       {date.toDateString()}
         </React.Fragment>
      ))
      console.log("arr",arr)

    this.setState({ nextDates });
  }
  async   postData(url, obj) {
  
    let response = await http.post(url, obj);
  


 

    }

  render() {
    const { currentDate, nextDates } = this.state;
    this.postData("/date",nextDates)
    console.log(nextDates)
    return (
      <div>

        <ul>
          {nextDates.map((date, index) => (
            <React.Fragment>
            <button className='btn btn-outline-light text-dark'>{date.toDateString()}</button> 
             </React.Fragment>
          ))}
        </ul>
      </div>
    );
  }
}

export default DateComponent;