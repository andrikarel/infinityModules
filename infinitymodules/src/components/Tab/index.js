import React from 'react';
import PropTypes from 'prop-types';
const Tab = ({selectionKey,title,children}) => {
        return(
            <div>
                { children }
            </div>
        )
}


Tab.propTypes = {
    selectionKey: PropTypes.number,
    title: PropTypes.string,
    children:PropTypes.node

}

Tab.defaultProps = {

}

export default Tab;