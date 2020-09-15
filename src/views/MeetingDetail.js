import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

const MeetingDetailData = (props) => {
  return (
    <div key={props.meeting.id}>
      <h1> {props.meeting.title}</h1>
      <h4>Date: {props.meeting.date} </h4>
      <h5>Start Time: {props.meeting.start_time} </h5>
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
      </>
    );
  }
}
