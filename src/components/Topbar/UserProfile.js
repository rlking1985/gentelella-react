import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  state = {
    display: "none"
  }

  static propTypes = {
    userName: PropTypes.string.isRequired,
  }

  toggleDisplay = () => {
    this.setState({
      display: this.state.display === "none" ? "block" : "none"
    });
  }

  render() {
    return (
      <li onClick={this.toggleDisplay} className="open">
        <a className="user-profile dropdown-toggle" aria-expanded={this.state.display === "block"}>
          <img src="images/img.jpg" alt="" /><span> {this.props.userName} </span>
          <span className=" fa fa-angle-down"></span>
        </a>
        <ul className="dropdown-menu dropdown-usermenu pull-right" style={{display: this.state.display}}>
          <li><a> Profile</a></li>
          <li>
            <a>
              <span className="badge bg-red pull-right">50%</span>
              <span>Settings</span>
            </a>
          </li>
          <li><a>Help</a></li>
          <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
        </ul>
      </li>
    );
  };
}

export default UserProfile;
