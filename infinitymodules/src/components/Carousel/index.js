import React from 'react';
import PropTypes from 'prop-types';
import {carouselContainer, carouselImage} from './carousel.css';

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentImageIndex: 0
        }
    }

    previousImage(){
        const {currentImageIndex} = this.state;
        const {images} = this.props;
        if(currentImageIndex === 0){
            this.setState({currentImageIndex: images.length-1})
        }else{
            this.setState({currentImageIndex: currentImageIndex-1})
        }
    }

    nextImage(){
        const {currentImageIndex} = this.state;
        const {images} = this.props;
        if(currentImageIndex === images.length-1){
            this.setState({currentImageIndex: 0})
        }else{
            this.setState({currentImageIndex: currentImageIndex+1})
        }
    }

    render(){
        const {currentImageIndex} = this.state;
        const {images} = this.props;
        return(
            <div className={carouselContainer}>
                <button onClick={() => this.previousImage() }>Left</button>
                <img className={carouselImage} src={images[currentImageIndex]} alt="currentImage"/>
                <button onClick={() => this.nextImage() }>Right</button>
            </div>
        )
    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    size: PropTypes.string
};

Carousel.defaultProps = {
    isOpen: false
};

export default Carousel;