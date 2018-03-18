import React from 'react';
import PropTypes from 'prop-types';
import styles,{alertTitle,alertText,alert} from './alert.css'

const Alert = ({children,type}) => {
    return <div className={`${alert} ${styles[type]}`}>{children}</div>;

};

Alert.Title = ({ children }) => <div className={ alertTitle }>{children}</div>;
Alert.Text = ({ children }) => <div className={ alertText }>{children}</div>;


Alert.propTypes = {
    type: PropTypes.oneOf(['info','success','warning','danger']),
    children: PropTypes.node    
}

export default Alert;