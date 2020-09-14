import React, { Component } from 'react';
import Fetch from '../middleware/RenderProps';

import { Redirect, Route, Switch, Link, withRouter } from 'react-router-dom';
const URL = '/meetings/meetingapi';
const MeetingListData = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item) => {
        return (
          <Link to={`${item.id}`} color='primary'>
            {' '}
            <h1>{item.title}</h1>
            <h3> {item.id}</h3>
          </Link>
        );
      })}
    </div>
  );
};

class MeetingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fetch
        url={URL}
        render={({ data, isLoading }) => (
          <MeetingListData isLoading={isLoading} data={data} />
        )}
      />
    );
  }
}

export default MeetingList;
