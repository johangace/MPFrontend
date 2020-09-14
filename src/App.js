// import React, { useState, useEffect, Suspense, Component } from 'react';
// import axios from 'axios';
// import Fetch from './middleware/RenderProps';
// import MeetingList from './views/MeetingList';
// import MeetingDetail from './views/MeetingDetail';
// import NewMeetingForm from './views/NewMeetingForm';
// import routes from './routes';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// class App extends Component {
//   state = {
//     meetings: [],
//   };

//   loading() {
//     return (
//       <div className='animated fadeIn pt-1 text-center'>
//         <div className='sk-spinner sk-spinner-pulse'></div>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         Meeting Plnr
//         <Fragment>
//           <Header />
//           <Home />
//         </Fragment>
//         <BrowserRouter>
//           <Switch>
//             <Route exact path='/meetings' component={MeetingList}></Route>
//             <Route exact path='/meetings/:id' component={MeetingDetail}></Route>
//             <Route
//               exact
//               path='/themeetings/meeting/new'
//               component={NewMeetingForm}
//             ></Route>
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component, Fragment } from 'react';
import Header from './views/Header';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;
