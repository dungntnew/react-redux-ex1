import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return (
       <div>Select a user..</div>
      )
    }
    return (
      <div>
        <p>ID: {this.props.user.id}</p>
        <p>FirstName: {this.props.user.first}</p>
        <p>LastName: {this.props.user.last}</p>
        <p>Age: {this.props.user.age}</p>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    user: state.active
  }
}

export default connect(mapStateToProps)(UserDetail)
