import React, { Component, Fragment } from 'react';
import Header from './views/Header';
import Home from './views/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MeetingDetail from './views/MeetingDetail';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/:id' component={MeetingDetail}></Route>
          </Switch>
        </BrowserRouter>
        {/* <Home /> */}
      </Fragment>
    );
  }
}

export default App;
