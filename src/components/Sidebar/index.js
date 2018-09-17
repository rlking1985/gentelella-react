import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Profile from './Profile';
import Menus from './Menus';
// import FooterButtons from './FooterButtons';

const menuHeadings = [{
  name: "Home",
  fontAwesome: "fa fa-home",
  links: [
    ["index.html", "Dashboard"],
    ["index2.html", "Dashboard2"],
    ["index3.html", "Dashboard3"],
  ]
}, {
  name: "Forms",
  fontAwesome: "fa fa-edit",
  links: [
    ["form.html", "General Form"],
    ["form_advanced.html", "Advanced Components"],
    ["form_validation.html", "Form Validation"],
  ]
}];
console.log(menuHeadings);

const Sidebar = props => {
  return (
    <div className="col-md-3 left_col">
      <div className="left_col scroll-view">
        <Title appName={props.appName} />
        <Profile userName={props.userName} />
        <Menus headings={menuHeadings} />
        {/*<FooterButtons />*/}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  appName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
}

export default Sidebar;
