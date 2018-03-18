import React, { Component } from 'react';
import Alert from './components/Alert';
class App extends Component {
  render() {
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
        
      </div>
    );
  }
}

export default App;
