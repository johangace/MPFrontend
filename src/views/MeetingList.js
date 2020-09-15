import React, { Component } from 'react';
import { Table } from 'reactstrap';
import NewMeetingModal from './NewMeetingModal';
import { Redirect, Route, Switch, Link, withRouter } from 'react-router-dom';
import ConfirmRemovalModal from './ConfirmRemovalModal';

class MeetingList extends Component {
  render() {
    const meetings = this.props.meetings;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {!meetings || meetings.length <= 0 ? (
            <tr>
              <td colSpan='6' align='center'>
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            meetings.map((meeting) => (
              <tr key={meeting.id}>
                <td>
                  <Link to={`${meeting.id}`} color='primary'>
                    {meeting.title}
                  </Link>
                </td>
                <td>
                  <Link to={`${meeting.id}`} color='primary'>
                    {meeting.date}
                  </Link>
                </td>
                <td>
                  <Link to={`${meeting.id}`} color='primary'>
                    {meeting.start_time}
                  </Link>
                </td>
                <td>
                  <Link to={`${meeting.id}`} color='primary'>
                    {meeting.room}
                  </Link>
                </td>
                <td align='center'>
                  <NewMeetingModal
                    create={false}
                    meeting={meeting}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={meeting.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default MeetingList;
