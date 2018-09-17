import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props => (
  <li><a href={props.path}>{props.title}</a></li>
);

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MenuItem;
