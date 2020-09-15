// import React, { Component } from 'react';
// import Fetch from '../middleware/RenderProps';

// const URL = '/meetings/meetingapi';
// const MeetingListData = (props) => {
//   console.log(props.data);
//   return (
//     <div>
//       {props.data.map((item) => {
//         return (
//           <Link to={`${item.id}`} color='primary'>
//             {' '}
//             <h1>
//               {item.title} id:{item.id}
//             </h1>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// class MeetingList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Fetch
//         url={URL}
//         render={({ data, isLoading }) => (
//           <MeetingListData isLoading={isLoading} data={data} />
//         )}
//       />
//     );
//   }
// }

// export default MeetingList;

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
                    {meeting.title} {meeting.id}
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
