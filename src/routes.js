import React from 'react';

const MeetingList = React.lazy(() => import('./views/MeetingList'));
// const MeetingDetail = React.lazy(() => import('views/MeetingDetail'));

const routes = [
  { path: '/', exact: true, name: 'Home' },

  {
    path: '/meetings/meetingapi',
    name: 'meetings',
    component: MeetingList,
    exact: true,
  },
  //   {
  //     path: '/meetings/meetingapi/:id',
  //     name: 'meeting',
  //     component: MeetingDetail,
  //     exact: true,
  //   },
];

export default routes;
