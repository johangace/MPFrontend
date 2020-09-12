// RenderProps.js
import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const getbyidURL = `/meetings/meetingapi/${1}`;
const POSTS_SERVICE_URL = `/meetings/meetingapi/`;

// class Fetch extends Component {
//   state = {
//     isFetching: false,
//     data: [],
//   };

//   render = () => this.props.children(this.state);

//   componentDidMount() {
//     this.fetchPosts();
//   }

//   async fetchPostsAsync() {
//     try {
//       this.setState({ ...this.state, isFetching: true });
//       const response = await axios.get(
//         `/meetings/meetingapi/${this.props.url}`
//       );
//       this.setState({
//         ...this.state,
//         isFetching: false,
//         data: response.data,
//         // .slice(0, 5),
//       }); // Take first 5 posts only
//     } catch (e) {
//       console.log(e);
//       this.setState({ ...this.state, isFetching: false });
//     }
//   }

//   fetchPosts = this.fetchPostsAsync;
// }
// export default Fetch;

export default class Fetch extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  };

  state = {
    data: [],
    isLoading: false,
  };

  _fetch = async () => {
    const res = await fetch(this.props.url);
    const json = await res.json();
    console.log(json);

    this.setState({
      data: json,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true }, this._fetch);
  }

  render() {
    console.log(this.state.data);
    return this.props.render(this.state);
  }
}
