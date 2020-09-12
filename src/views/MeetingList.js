import React, { useState, useEffect, Component } from 'react';
import Fetch from '../middleware/RenderProps';
const URL = '/meetings/meetingapi';

const MeetingListData = (props) => {
  console.log(props.data);
  return (
    <div>
      {props.data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.room}</span>
          </div>
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
