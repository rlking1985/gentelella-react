import React from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Sidebar/Title';
import Profile from '../components/Sidebar/Profile';
import Menus from '../components/Sidebar/Menus';
// import FooterButtons from './FooterButtons';

const Sidebar = props => {
  return (
    <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <Title appName={props.appName} />
        <Profile userName={props.userName} />
        <Menus headings={props.menuHeadings} />
        {/*<FooterButtons />*/}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  appName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  menuHeadings: PropTypes.array.isRequired,
}

export default Sidebar;
