import React, { Component } from 'react';
import Fetch from '../middleware/RenderProps';
const URL = '/meetings/meetingapi/';

const MeetingDetailData = (props) => {
  return (
    <div key={props.data.id}>
      {props.isLoading && <h2>Loading...</h2>}
      {props.data.title}
    </div>
  );
};

class MeetingDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Fetch
          url={`${URL}/${this.props.match.params.id}`}
          render={({ data, isLoading }) => (
            <MeetingDetailData isLoading={isLoading} data={data} />
          )}
        />
      </>
    );
  }
}

export default MeetingDetail;
