import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Fetch from './middleware/RenderProps';
import MeetingList from './views/MeetingList';
import MeetingDetail from './views/MeetingDetail';

const URL = '/meetings/meetingapi';
const getbyidURL = `/meetings/meetingapi/${1}`;
class App extends Component {
  state = {
    meetings: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get(URL);
      const meetings = await res.data;
      this.setState({
        meetings,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        Meeting Plnr
        {/* <RenderProps>{MeetingList}</RenderProps> */}
        <Fetch
          url={`/meetings/meetingapi/${1}`}
          render={({ data, isLoading }) => (
            <MeetingDetail isLoading={isLoading} data={data} />
          )}
        />
      </div>
    );
  }
}

export default App;
