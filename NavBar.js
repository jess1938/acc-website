'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    <div>
    <h2>navbar</h2>
    </div>
  }
}
const domContainer = document.querySelector('#index-NavBar');
ReactDOM.render(e(NavBar), domContainer);