import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MeetingList from './MeetingList';
import NewMeetingModal from './NewMeetingModal';
import { Model } from '../models/Model.js';
import { Redirect, Route, Switch, Link, withRouter } from 'react-router-dom';

// class ViewModel {
//   static async GetMeetings(meetings) {
//     let meetings = Model.fetchTodos();

//     return
//   }
// }
class Home extends Component {
  state = {
    meetings: [],
    values: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getMeetings() {
    Model.fetchTodos().then((json) => {
      this.setState({ meetings: json });
    });
  }

  resetState = () => {
    this.getMeetings();
  };

  render() {
    console.log(this.state.meetings[0]);
    return (
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            {/* {listItems} */}

            <MeetingList
              meetings={this.state.meetings}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewMeetingModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
