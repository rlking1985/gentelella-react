import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <div>
    <div className="navbar nav_title" style={{border: 0}}>
      <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>{props.appName}</span></a>
    </div>
    <div className="clearfix"></div>
  </div>
);

Title.propTypes = {
  appName: PropTypes.string.isRequired
}

export default Title;
