import React,{useState} from 'react';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
export default function Calendar(props) {
console.log(props);
const [month, setMonth] =useState(props. index);
const [year, setYear] = useState(+props. year);
const [day, setDay] = useState("");
const [weekDay, setWeekDay] = useState("");
function getDaysInMonth(){
const daysInMonth = moment(`${year}-${month+1}`, "YYYY-MM").daysInMonth();
const firstDayOfMonth = moment(`${year}-${month + 1}-01`,"YYYY-MM-DD").format("d");
return {daysInMonth, firstDayOfMonth};
}


function getWeekDay (day, month, year){
const date = new Date(`${year}-${month}-${day}`);
const weekDays =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekDayIndex = date.getDay();
return weekDays[weekDayIndex];
}

function renderCalendar() {
  const { daysInMonth, firstDayOfMonth } = getDaysInMonth();
  const rows = [];
  let cells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
  cells.push(<td key={i}></td>);
  }
 

          
  for (let day = 1; day <= daysInMonth; day++) {
  cells.push(<td key={day} onClick={()=>props.selectDate(day, month,year)} className= "dates" >{day}</td>);
  if (cells. length === 7) {
  rows.push(<tr key={day}>{cells}</tr>);
  cells = [];
  }
}
  if (cells.length > 0) {
  while (cells. length < 7) {
  cells.push(<td key={cells.length}></td>);
  }
  rows.push(<tr key={daysInMonth}>{cells}</tr>);
}

  return (
    <table>
    <thead>
    <tr>
    <th style={{ background: '#ca97ca', margin: '1px' }}>Sun</th>
    <th style={{ background: '#ca97ca', margin: '1px' }}>Mon</th>
    <th style={{ background: '#ca97ca', margin: '1px' }}>Tue</th>
    <th style={{ background: '#ca97ca', margin: '1px' }}>Wed</th>
    <th style={{ background: '#ca97ca', margin: '1px' }}>Thu</th>
    <th style={{ background: '#ca97ca', margin: '1px' }}>Fri</th>
    <th style={{ background: '#ca97ca', margin: '1px' }}>Sat</th>
    </tr>
    </thead>
    <tbody>{rows}</tbody>
    </table>
  )
  }
    function handlePrevMonth(){
    setMonth((prevMonth) => prevMonth -1);
    console.log(month);
    if (month==0){
    setYear ((prevYear) => prevYear-1);
    setMonth(11);
    }
  }
    function handleNextMonth(){
setMonth( (prevMonth) => prevMonth + 1) ;
console. log(month);
if (month===11){
setYear ((prevYear) => prevYear-1);
setMonth(0);
}
    }
function handlePrevYear(){
setYear ((prevYear) => prevYear - 1);
}
function handleNextYear(){
setYear ((prevYear) => prevYear + 1) ;
}
return(

<div>
{/* <div> */}
<div className="calendar-header">
        <button onClick={handlePrevMonth}>&laquo;</button>
         <h2>
<span>{moment(`${year}-${month + 1}`, "YYYY-MM").format("MM YYYY")}</ span>
        </h2>
       <button onClick={handleNextMonth}>&raquo;</button>
     </div>
{/* <span onClick={handlePrevMonth}><FontAwesomeIcon icon={faBackward} /> </span>
<span>{moment(`${year}-${month + 1}`, "YYYY-MM").format("MM YYYY")}</ span>
<span onClick={handleNextMonth}><FontAwesomeIcon icon={faForward}/></span>
</div> */}
{renderCalendar()}

</div>

)
}


// import React, { useState } from 'react';
// import './calender.css';

// const Calendar = ({selectedDate,onSelectDate}) => {
//   const [date, setDate] = useState(new Date());
//   const [selectedDate2, setSelectedDate] = useState(selectedDate);

//   const getMonthName = (date) => {
//     return date.toLocaleString('default', { month: 'long' });
//   };

//   const getYear = (date) => {
//     return date.getFullYear();
//   };

//   const handlePrevMonth = () => {
//     const prevMonthDate = new Date(date.getFullYear(), date.getMonth() - 1);
//     setDate(prevMonthDate);
//   };

//   const handleNextMonth = () => {
//     const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1);
//     setDate(nextMonthDate);
//   };

//   const handleDateClick = (day) => {
//     setSelectedDate(day);
//     onSelectDate(day);
//   };

//   const getCalendarRows = () => {
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const today = new Date();
//     const todayMonth = today.getMonth();
//     const todayYear = today.getFullYear();

//     const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
//     const tomorrowMonth = tomorrow.getMonth();
//     const tomorrowYear = tomorrow.getFullYear();

//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     let firstDayIndex = firstDay.getDay();

//     if (firstDayIndex === 0) {
//       // Adjust Sunday to be the 7th day of the week
//       firstDayIndex = 7;
//     }

//     const lastDayIndex = lastDay.getDay();
//     const daysInMonth = lastDay.getDate();

//     let calendarRows = [];
//     let dayCounter = 1;

//     for (let row = 0; row < 6; row++) {
//       let calendarRow = [];

//       if (row === 0 && firstDayIndex > 1) {
//         for (let i = 1; i < firstDayIndex; i++) {
//           calendarRow.push(<td key={`empty-${i}`}></td>);
//         }
//       }

//       for (let col = firstDayIndex; col <= 7; col++) {
//         if (dayCounter <= daysInMonth) {
//           const isCurrentDate =
//             dayCounter === today.getDate() &&
//             month === todayMonth &&
//             year === todayYear;

//           const isTomorrowDate =
//             dayCounter === tomorrow.getDate() &&
//             month === tomorrowMonth &&
//             year === tomorrowYear;

//           const isSelectedDate =
//             dayCounter === selectedDate2.getDate() &&
//             month === selectedDate2.getMonth() &&
//             year === selectedDate2.getFullYear();

//           const cellStyle = isSelectedDate
//             ? { background: '#ca97ca', fontWeight: 'bold' }
//             : {};

//           calendarRow.push(
//             <td
//               key={dayCounter}
//               className="calendar-day"
//               style={cellStyle}
//               onClick={() => handleDateClick(new Date(year, month, dayCounter))}
//             >
//               {dayCounter}
//             </td>
//           );
//           dayCounter++;
//         }
//       }

//       calendarRows.push(<tr key={`row-${row}`}>{calendarRow}</tr>);

//       if (dayCounter > daysInMonth) {
//         break;
//       }

//       firstDayIndex = 1; // Reset to 1 for the subsequent rows
//     }

//     return calendarRows;
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-header">
//         <button onClick={handlePrevMonth}>&laquo;</button>
//         <h2>
//           {getMonthName(date)} {getYear(date)}
//         </h2>
//         <button onClick={handleNextMonth}>&raquo;</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th style={{ background: '#ca97ca', margin: '1px' }}>Sun</th>
//             <th style={{ background: '#ca97ca', margin: '1px' }}>Mon</th>
//             <th style={{ background: '#ca97ca', margin: '1px' }}>Tue</th>
//             <th style={{ background: '#ca97ca', margin: '1px' }}>Wed</th>
//             <th style={{ background: '#ca97ca', margin: '1px' }}>Thu</th>
//             <th style={{ background: '#ca97ca', margin: '1px' }}>Fri</th>
//             <th style={{ background: '#ca97ca', margin: '1px' }}>Sat</th>
//           </tr>
//         </thead>
//         <tbody style={{ height: 'calc(100% - 40px)' }}>{getCalendarRows()}</tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;
