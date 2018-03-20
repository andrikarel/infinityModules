import React from 'react';
import PropTypes from 'prop-types';
import {tabsContainer, horizontalHeaderContainer,verticalHeaderContainer, horizontalHeader,verticalHeader, horizontalContent, verticalContent, horizontalActive,verticalActive} from './tabs.css';
class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTab: this.props.currentSelectedTab
        }
    }
    render(){
        const {currentTab} = this.state;
        const {layout} = this.props;
        return(
            <div className={tabsContainer}>
                <div className={layout === 'horizontal' ? horizontalHeaderContainer : verticalHeaderContainer}>
                    {this.props.children.map(c => 
                        <div    className= {`${layout === 'horizontal' ? horizontalHeader : verticalHeader} ${c.props.selectionKey === currentTab ? (layout === 'horizontal' ? horizontalActive : verticalActive) : ""}`} 
                                onClick={() => this.setState({currentTab: c.props.selectionKey})}>{c.props.title}</div>)}
                </div>
                <div className={layout === 'horizontal' ? horizontalContent : verticalContent}>
                    {this.props.children.map(c => c.props.selectionKey === currentTab ? c : "")}
                </div>
            </div>
        )
    }
}

Tabs.propTypes = {
    theme: PropTypes.string,
    layout: PropTypes.string,
    onSelect: PropTypes.func,
    currentSelectedTab: PropTypes.number
}

Tabs.defaultProps = {
    theme: "light",
    layout: "horizontal"
}

export default Tabs;