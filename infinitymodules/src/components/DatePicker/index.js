import React from 'react';
import PropTypes from 'prop-types';
import {calendar, calendarHeader,calendarHeaderTitle, leftButton,rightButton, weekdays, days} from './datepicker.css';
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//As seen on https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
Date.prototype.monthDays= function(){
    var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
    return d.getDate();
}

class DatePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentDate: new Date()
        }
    }
    render(){
        const {currentDate} = this.state;
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth();
        var day = currentDate.getDay();
        var firstDay = new Date(year, month,0).getDay();
        return(
            <div className={calendar}>
                <div className={calendarHeader}>
                    <button className={leftButton} onClick={() => this.setState({currentDate: new Date(year-1, month, day)})}>Left</button>
                    <p className={calendarHeaderTitle}>{year}</p>
                    <button className={rightButton} onClick={() => this.setState({currentDate: new Date(year+1, month, day)})}>Right</button>
                </div>
                <div className={calendarHeader}>
                    <button className={leftButton} onClick={() => this.setState({currentDate: new Date(year, month-1, day)})}>Left</button>
                    <p className={calendarHeaderTitle}>{`${MONTH_NAMES[month]} ${currentDate.monthDays()}`}</p>
                    <button className={rightButton} onClick={() => this.setState({currentDate: new Date(year, month+1, day)})}>Right</button>
                </div>
                <ul className={weekdays}>
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>
                <ul className={days}> 
                    {[...Array(firstDay)].map((o,index) => <li key={index}></li>)}
                    {[...Array(currentDate.monthDays())].map((o,index) => <li key={index}>{index+1}</li>)}
                </ul>
            </div>
        )
    }
}
DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string
}
export default DatePicker;