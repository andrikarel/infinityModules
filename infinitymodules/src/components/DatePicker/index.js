import React from 'react';
import PropTypes from 'prop-types';

class DatePicker extends React.Component {

    render(){
        return(
            <div></div>
        )
    }
}
DatePicker.PropTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string
}
export default DatePicker;