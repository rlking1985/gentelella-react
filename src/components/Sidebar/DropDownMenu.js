import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

class DropDownMenu extends React.Component {
  state = {
    display: "none"
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
    faClassName: PropTypes.string.isRequired,
  };

  toggleDisplay = () => {
    this.setState({
      display: this.state.display === "none" ? "block" : "none"
    });
  }

  render() {
    return (
      <li onClick={this.toggleDisplay}><a><i className={this.props.faClassName}></i> {this.props.name} <span className="fa fa-chevron-down"></span></a>
        <ul className="nav child_menu" style={{display: this.state.display}}>
          {
            this.props.links.map((link, index)=> <MenuItem path={link[0]} title={link[1]} key={index}/>)
          }
        </ul>
      </li>
    )
  };
}

export default DropDownMenu;
