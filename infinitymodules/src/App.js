import React, { Component } from 'react';
import Alert from './components/Alert';
import Modal from './components/Modal';
import NameCard from './components/NameCard';
import ProgressBar from './components/ProgressBar';
import Carousel from './components/Carousel';
import Row from './components/Row';
import Col from './components/Col';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }
  render() {
    const {isModalOpen} = this.state;
    return (
      <div>
        <Alert type="info">
          <Alert.Title>Info</Alert.Title>
          <Alert.Text>info</Alert.Text>
        </Alert>
        <Alert type="success">
          <Alert.Title>Info</Alert.Title>
          <Alert.Text>info</Alert.Text>
        </Alert>
        <Alert type="warning">
          <Alert.Title>Info</Alert.Title>
          <Alert.Text>info</Alert.Text>
        </Alert>
        <Alert type="danger">
          <Alert.Title>Info</Alert.Title>
          <Alert.Text>info</Alert.Text>
        </Alert>
        
        <button onClick={() => this.setState({isModalOpen:true})}>Open modal</button>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => this.setState({isModalOpen:false})}>
          <Modal.Title>ModalTitle</Modal.Title>
          <Modal.Body>ModalBody</Modal.Body>
          <Modal.Footer>ModalFooter</Modal.Footer>
        </Modal>
        <ProgressBar
          progress={25}
          striped={true}
          animated={true}
          state="success">
        </ProgressBar>
        <ProgressBar
          progress={50}
          striped={true}
          animated={true}
          state="warning">
        </ProgressBar>
        <ProgressBar
          progress={75}
          striped={true}
          animated={true}
          state="danger">
        </ProgressBar>
        <ProgressBar
          progress={100}
          striped={true}
          animated={true}
          state="info">
        </ProgressBar>
        <NameCard
          name="Smári"
          email="smari@smari.is"
          telephone="8571122"
          imageUrl="http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg"/>
        <Carousel
          images={[
            "http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg",
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "http://www.dv.is/media/cache/71/94/71940849425de194f4d8eb846d5afb1f.jpg",
            "https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/336754_2920085571921_1880481472_o.jpg?oh=0f5131ee5b8fc29256b7d3037941d59b&oe=5B4675B2"
          ]}
          size="small"/>
        <Carousel
          images={[
            "http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg",
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "http://www.dv.is/media/cache/71/94/71940849425de194f4d8eb846d5afb1f.jpg",
            "https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/336754_2920085571921_1880481472_o.jpg?oh=0f5131ee5b8fc29256b7d3037941d59b&oe=5B4675B2"
          ]}
          size="medium"/>
        <Carousel
          images={[
            "http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg",
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "http://www.dv.is/media/cache/71/94/71940849425de194f4d8eb846d5afb1f.jpg",
            "https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/336754_2920085571921_1880481472_o.jpg?oh=0f5131ee5b8fc29256b7d3037941d59b&oe=5B4675B2"
          ]}
          size="large"/>
          <Row>
            <Col size={2}></Col>
            <Col size={2}></Col>
            <Col size={2}></Col>
          </Row>
          <Row>
            <Col size={2}></Col>
            <Col size={3}></Col>
            <Col size={5}></Col>
          </Row>
          <Row>
            <Col size={4}></Col>
            <Col size={4}></Col>
            <Col size={4}></Col>
          </Row>
      </div>
    );
  }
}

export default App;
