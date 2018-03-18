import React, { Component } from 'react';
import Alert from './components/Alert';
import Modal from './components/Modal';
import NameCard from './components/NameCard';
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
        <NameCard
          name="Smári"
          email="smari@smari.is"
          telephone="8571122"
          imageUrl="http://sguru.org/wp-content/uploads/2017/06/cool-anonymous-profile-pictures-1699946_orig.jpg"/>
      </div>
    );
  }
}

export default App;
