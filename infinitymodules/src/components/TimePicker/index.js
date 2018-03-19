import React from 'react';
import PropTypes from 'prop-types';
import {clockContainer,clockImage,hidden,clock,clockClose,clockInput} from './clock.css';
class TimePicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hours:0,
            minutes:0
        }
    }
    

    getTime(){
        var d = new Date();
        d.setHours(this.state.hours);
        d.setMinutes(this.state.minutes);
        this.props.onTimePick(d);
        this.props.onClockClose();
    }
    handleChange(evt){
        if(evt.target.name ==="hours" && evt.target.value > 23){
            this.setState({[evt.target.name]:23})
        }
        else if(evt.target.name ==="minutes" && evt.target.value > 59){
            this.setState({[evt.target.name]:59})
        }
        else{
            this.setState({[evt.target.name]:evt.target.value})
        }
    }

    render(){
        const {isClockOpen,onClockClose,onTimePick,format} = this.props;
        return(
            <div className={`${clockContainer} ${isClockOpen ? '' : hidden}`}>
                <div className={clock}>
                    <div className={ clockClose } onClick={ onClockClose }><i className="fa fa-times"></i></div>
                    <img className={clockImage} src="https://cssanimation.rocks/images/posts/clocks/ios_clock.svg" alt="https://cssanimation.rocks/images/posts/clocks/ios_clock.svg"/>
                    <div className={clockInput}>
                        <label>Hours</label>
                            <input type="number" name="hours" max="23" min="0" value={this.state.hours} onChange={(evt)=>this.handleChange(evt)}/>
                        <label>Minutes</label>
                            <input type="number" name="minutes" max="59" min="0" value={this.state.minutes} onChange={(evt)=>this.handleChange(evt)}/>
                        <button onClick={()=>this.getTime()}>SetTime</button>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
 
}



TimePicker.propTypes = {
    isClockOpen:PropTypes.bool.isRequired,
    onClockClose: PropTypes.func.isRequired,
    format:PropTypes.number.isRequired,
    onTimePick:PropTypes.func.isRequired
    
};
export default TimePicker;
