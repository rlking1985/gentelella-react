import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

import Sidebar from './containers/Sidebar'
import Topbar from './containers/Topbar';
import PageContent from './containers/PageContent'
import Footer from './containers/Footer';

class App extends Component {

  static propTypes = {
    appName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    menuHeadings: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="container body">
        <div className="main_container">
          <Sidebar appName={this.props.appName} userName={this.props.userName} menuHeadings={this.props.menuHeadings}/>
          <Topbar userName={this.props.userName} />
          <PageContent />
          <Footer />
        </div>
      </div>
    );
  }
}



export default App;
