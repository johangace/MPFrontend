import React from 'react';

const MeetingList = (props) => {
  return (
    <div key={props.data.id}>
      {props.isLoading && <h2>Loading...</h2>}
      {props.data.title}
      {/* <div key={item.id}>
        <h1>{item.title}</h1>
        <span>{item.room}</span>
      </div>
      ); })} */}
    </div>
  );
};
export default MeetingList;
