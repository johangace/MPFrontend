import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Fetch from './middleware/RenderProps';
import MeetingList from './views/MeetingList';
import MeetingDetail from './views/MeetingDetail';

const URL = '/meetings/meetingapi';

class App extends Component {
  state = {
    meetings: [],
  };

  render() {
    return (
      <div>
        Meeting Plnr
        {/* <RenderProps>{MeetingList}</RenderProps> */}
        <MeetingDetail />
      </div>
    );
  }
}

export default App;
