import React, { Component } from 'react';
import Modal from './components/Modal';
import NameCard from './components/NameCard';
import ProgressBar from './components/ProgressBar';
import Carousel from './components/Carousel';
import Row from './components/Row';
import Col from './components/Col';
import TimePicker from './components/TimePicker';
import DatePicker from './components/DatePicker';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false,isClockOpen:false,time:new Date(), date:""};
  }
  render() {
    const {isModalOpen,isClockOpen} = this.state;
    return (
      <div>
        <button onClick={() => this.setState({isModalOpen:true})}>Open modal</button>
        <h1>Modal</h1>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => this.setState({isModalOpen:false})}>
          <Modal.Title>ModalTitle</Modal.Title>
          <Modal.Body>ModalBody</Modal.Body>
          <Modal.Footer>ModalFooter</Modal.Footer>
        </Modal>
        <h1>Progress Bars</h1>
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
        <h1>Name Card</h1>
        <NameCard
          name="Smári"
          email="smari@smari.is"
          telephone="8571122"
          imageUrl="https://www.vipcutouts.com/media/com_hikashop/upload/thumbnails/600x760f/jason-statham-celebrity-mask.jpg"/>
        <h1>Carousels</h1>
        <Carousel
          images={[
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3EbeoSXmYX0KMuNgX3TqLbMYLiwwLPpDCehoPTMrulnlen2vRg",
            "https://i.imgur.com/0Q9zLi9.jpg?fb"
          ]}
          size="small"/>
        <Carousel
          images={[
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3EbeoSXmYX0KMuNgX3TqLbMYLiwwLPpDCehoPTMrulnlen2vRg",
            "https://i.imgur.com/0Q9zLi9.jpg?fb"
          ]}
          size="medium"/>
        <Carousel
          images={[
            "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0913/harry-potter-memes-potter-lookin-fine.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3EbeoSXmYX0KMuNgX3TqLbMYLiwwLPpDCehoPTMrulnlen2vRg",
            "https://i.imgur.com/0Q9zLi9.jpg?fb"
          ]}
          size="large"/>
        <h1>Rows and Cols</h1>
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
        <h1>Time Picker</h1>
        <TimePicker onTimePick={time=>this.setState({time: time})} format={12}></TimePicker>
        <h1>{`${this.state.time.getHours()} : ${this.state.time.getMinutes()}`} </h1>
        <h1>Date Picker</h1>
        <DatePicker
          onDatePick={date=>this.setState({date: date})}
          locale="is-IS"/>
        <h1>{this.state.date} </h1>
      </div>
    );
  }
}

export default App;
