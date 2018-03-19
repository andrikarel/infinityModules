import React from 'react';
import PropTypes from 'prop-types';
import {clockContainer,clockImage,hidden,clock,clockClose,clockInput,hoursContainer, minutesContainer,hours, minutes, clockButton} from './clock.css';
class TimePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hours:12,
            minutes:0,
            hourMax: 23
        }
        if(this.props.format === 12){
            this.state.hourMax = 12;
        }
    }
    getTime(){
        var d = new Date();
        d.setHours(this.state.hours);
        d.setMinutes(this.state.minutes);
        this.props.onTimePick(d);
    }
    handleChange(evt){
        var value = parseInt(evt.target.value);
        const {hourMax} = this.state;
        if(evt.target.name ==="hours" && value > hourMax){
            this.setState({[evt.target.name]:1});
        }
        else if(evt.target.name ==="minutes" && value > 59){
            this.setState({minutes:0});
            if(this.state.hours < hourMax)
                this.setState({hours:this.state.hours+=1});
            else
                this.setState({hours:1});

        }
        else if(evt.target.name ==="hours" && value < 1){
            this.setState({[evt.target.name]:12});
        }
        else if(evt.target.name ==="minutes" && value < 1){
            this.setState({minutes:59});
            if(this.state.hours > 1)
                this.setState({hours:this.state.hours-=1});
            else
                this.setState({hours:12});

        }        else{
            this.setState({[evt.target.name]:value})
        }
    }
    updateClock(){
        /*We used this tutorial as a reference: https://cssanimation.rocks/clocks/ */
        var hands = [
            {
                hand: hours,
                angle: (this.state.hours * 30) + (this.state.minutes / 2)
            },
            {
                hand: minutes,
                angle: (this.state.minutes * 6)
            }
            ];
        for (var j = 0; j < hands.length; j++) {
            var elements = document.querySelectorAll('.' + hands[j].hand);
            for (var k = 0; k < elements.length; k++) {
                elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
            }
        }
    }
    render(){
        this.updateClock();
        return(
            <div className={`${clockContainer}`}>
                <article className={clock}>
                    <div className={hoursContainer}>
                        <div className={hours}></div>
                    </div>
                    <div className={minutesContainer}>
                        <div className={minutes}></div>
                    </div> 
                </article>
                <div className={clockInput}>
                    <label></label>
                        <input type="number" name="hours" placeholder="" value={this.state.hours} onChange={(evt)=>this.handleChange(evt)}/>
                    <label>:</label>
                        <input type="number" name="minutes"  value={this.state.minutes} onChange={(evt)=>this.handleChange(evt)}/>
                    <button className={clockButton} onClick={()=>this.getTime()}>Set Time</button>
                </div>
            </div>
        )
    }
}

TimePicker.propTypes = {
    format:PropTypes.number.isRequired,
    onTimePick:PropTypes.func.isRequired
};
TimePicker.defaultProps = {
    format: 24
}
export default TimePicker;
