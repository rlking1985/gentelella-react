import React from 'react';
import PropTypes from 'prop-types';
import ProfileImage from '../../images/user.png';
const Profile = props => (
  <div>
    <div className="profile clearfix">
      <div className="profile_pic">
        <img src={ProfileImage} alt="..." className="img-circle profile_img" />
      </div>
      <div className="profile_info">
        <span>Welcome,</span>
        <h2>{props.userName}</h2>
      </div>
    </div>
    <br />
  </div>
);

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
}

export default Profile;
