// // RenderProps.js
// import { Component } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// const getbyidURL = `/meetings/meetingapi/${1}`;
// const POSTS_SERVICE_URL = `/meetings/meetingapi/`;

// export default class Fetch extends Component {
//   static propTypes = {
//     render: PropTypes.func.isRequired,
//     url: PropTypes.string.isRequired,
//   };

//   state = {
//     data: [],
//     isLoading: false,
//     id: '',
//   };

//   _fetch = async () => {
//     const res = await axios.get(this.props.url);
//     const json = await res.data;

//     console.log(this.props.url);
//     if (res.status > 400) {
//       return this.setState(() => {
//         return { placeholder: 'Something went wrong!' };
//       });
//     } else {
//       this.setState({
//         data: json,
//         isLoading: false,
//       });
//     }
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true }, this._fetch);
//   }

//   render() {
//     console.log(this.state.data);
//     return this.props.render(this.state);
//   }
// }
