import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { API_URL } from '../constants';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

class NewMeetingForm extends React.Component {
  state = {
    id: 1,
    title: '',
    date: '',
    start_time: '',
    duration: '',
    room: '',
    created_by: '',
  };

  componentDidMount() {
    if (this.props.meeting) {
      const {
        id,
        title,
        date,
        start_time,
        duration,
        room,
        created_by,
      } = this.props.meeting;
      this.setState({
        id,
        title,
        date,
        start_time,
        duration,
        room,
        created_by,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createMeeting = (e) => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editMeeting = (e) => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === '' ? '' : value;
  };

  render() {
    return (
      <Form
        onSubmit={this.props.meeting ? this.editMeeting : this.createMeeting}
      >
        <FormGroup>
          <Label for='title'>title:</Label>
          <Input
            type='text'
            name='title'
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='date'>date:</Label>
          <Input
            type='datetime'
            name='date'
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='start_time'>start_time:</Label>
          <Input
            type='datetime'
            name='start_time'
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.start_time)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='duration'>duration:</Label>
          <Input
            type='number'
            name='duration'
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.duration)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='room'>room:</Label>
          <Input
            type='number'
            name='room'
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.room)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='created_by'>created_by:</Label>
          <Input
            type='number'
            name='created_by'
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.created_by)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewMeetingForm;
