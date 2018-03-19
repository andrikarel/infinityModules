import React, { Component } from 'react';
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
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3EbeoSXmYX0KMuNgX3TqLbMYLiwwLPpDCehoPTMrulnlen2vRg",
            "https://i.imgur.com/0Q9zLi9.jpg?fb"
          ]}
          size="small"/>
        <Carousel
          images={[
            "http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg",
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3EbeoSXmYX0KMuNgX3TqLbMYLiwwLPpDCehoPTMrulnlen2vRg",
            "https://i.imgur.com/0Q9zLi9.jpg?fb"
          ]}
          size="medium"/>
        <Carousel
          images={[
            "http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg",
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3EbeoSXmYX0KMuNgX3TqLbMYLiwwLPpDCehoPTMrulnlen2vRg",
            "https://i.imgur.com/0Q9zLi9.jpg?fb"
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
