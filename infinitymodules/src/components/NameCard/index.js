import React from 'react';
import PropTypes from 'prop-types';
import {namecard, namecardImageContainer, namecardImage, namecardName, namecardInfo} from './namecard.css';

const NameCard = ({name, email, telephone, imageUrl}) => {
    return(
        <div className={namecard}>
            <div className={namecardImageContainer}>
                <img className={namecardImage} src={imageUrl} alt='profile'/>
            </div>
            <div className={namecardName}>Name</div>
            <div className={namecardInfo}>Email</div>
            <div className={namecardInfo}>Telephone</div>
        </div>
    )
}
NameCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};
export default NameCard;
