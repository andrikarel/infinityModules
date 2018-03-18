import React, { Component } from 'react';
import Alert from './components/Alert';
import Modal from './components/Modal';
import ProgressBar from './components/ProgressBar';
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
        stripeed={true}
        animated={true}
        state="success">
   
        </ProgressBar>
      </div>
    );
  }
}

export default App;
