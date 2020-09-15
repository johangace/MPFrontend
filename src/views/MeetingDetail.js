import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
const MeetingDetailData = (props) => {
  return (
    <div key={props.meeting.id}>
      <h1> {props.meeting.title}</h1>
      <h4>Date: {props.meeting.date} </h4>
      <h5>Start Time: {props.meeting.start_time} </h5>
      <h5>Duration: {props.meeting.duration} </h5>
      <h5>Room: {props.meeting.room} </h5>
    </div>
  );
};

export default class Meetingdetail extends Component {
  constructor(props) {
    super(props);

    this.state = { meeting: '' };
  }

  getMeetingsById = () => {
    axios
      .get(`${API_URL}${this.props.match.params.id}`)
      .then((res) => this.setState({ meeting: res.data }));
  };

  resetState = () => {
    this.getMeetingsById();
  };
  componentDidMount() {
    this.resetState();
  }
  render() {
    return (
      <>
        <MeetingDetailData meeting={this.state.meeting} />
        <Link to='/'>
          <h4> Go Back </h4>{' '}
        </Link>
      </>
    );
  }
}
