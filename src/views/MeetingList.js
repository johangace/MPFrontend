import React from 'react';

const MeetingList = (props) => {
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
      <p>{props.isFetching ? 'Fetching posts...' : ''}</p>
    </div>
  );
};
export default MeetingList;
