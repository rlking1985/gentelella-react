import React from 'react';
import PropTypes from 'prop-types';
import DropDownMenu from './DropDownMenu';

const Menus = props => (
  <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
    <div className="menu_section">
      <h3>General</h3>
      <ul className="nav side-menu">
        {props.headings.map((heading, index)=> <DropDownMenu key={index} name={heading.name} links={heading.links} faClassName={heading.fontAwesome}/>) }
      </ul>
    </div>
  </div>
);

Menus.propTypes = {
  headings: PropTypes.array.isRequired,
}
export default Menus;
