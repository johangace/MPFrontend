import React, { useState, useEffect, Suspense, Component } from 'react';
import axios from 'axios';
import Fetch from './middleware/RenderProps';
import MeetingList from './views/MeetingList';
import MeetingDetail from './views/MeetingDetail';
import routes from './routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const URL = '/meetings/';

class App extends Component {
  state = {
    meetings: [],
  };

  loading() {
    return (
      <div className='animated fadeIn pt-1 text-center'>
        <div className='sk-spinner sk-spinner-pulse'></div>
      </div>
    );
  }

  render() {
    return (
      <div>
        Meeting Plnr
        {URLSearchParams.id}
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MeetingList}></Route>
            <Route path='/:id' component={MeetingDetail}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
