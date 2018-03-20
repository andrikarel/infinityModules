import React from 'react';
import PropTypes from 'prop-types';
import {spinnerContainer, spin} from './cartoonnetwork.css';

class CartoonNetworkSpinner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                "https://vignette.wikia.nocookie.net/deathbattlefanon/images/3/3c/Finn_the_Human.png/revision/latest?cb=20150406142522",
                "https://vignette.wikia.nocookie.net/powerpuff/images/a/a7/Tumblr_lv8big5jK51qizyws.jpg/revision/latest?cb=20120508020045",
                "http://images2.fanpop.com/image/photos/11400000/Robin-teen-titans-boys-11494057-431-500.gif",
                "https://vignette.wikia.nocookie.net/cartoonnetworkpunchtimeexplosion/images/e/ed/14.jpg/revision/latest?cb=20120522214145"
            ],
            currentImageIndex: 0,
            spinning: false
        }
    }
    componentDidMount(){
        const {interval} = this.props;
        setInterval(() => this.changeImage(),interval * 1000);
        setInterval(() => this.toggleSpinning(),interval * 1000);
    }
    changeImage(){
        const {images, currentImageIndex} = this.state;
        if(currentImageIndex === images.length-1){
            this.setState({currentImageIndex: 0});
        }else{
            this.setState({currentImageIndex:currentImageIndex+1});
        }
    }
    toggleSpinning(){
        const {spinning} = this.state;
        this.setState({spinning: !spinning});
    }

    render(){
        const {images,currentImageIndex,spinning} = this.state;
        return(
            <div    
                className={`${spinnerContainer} ${spinning ? spin: ""}`}
                style={{backgroundImage: `url(${images[currentImageIndex]})`}}>
            </div>
        )
    }
}
CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number
}
CartoonNetworkSpinner.defaultProps = {
    interval: 3
}

export default CartoonNetworkSpinner;