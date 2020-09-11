import React from 'react';

const MeetingList = (props) => {
  return (
    <div key={props.data.id}>
      {props.isLoading && <h2>Loading...</h2>}
      {props.data.title}
    </div>
  );
};
export default MeetingList;
