import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import MeetingList from './MeetingList';
import NewMeetingModal from './NewMeetingModal';

import axios from 'axios';

import { API_URL } from '../constants';

class Home extends Component {
  state = {
    meetings: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getMeetings = () => {
    axios.get(API_URL).then((res) => this.setState({ meetings: res.data }));
  };

  resetState = () => {
    this.getMeetings();
  };

  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Row>
          <Col>
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
