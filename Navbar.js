/*
- This file holds React component of a Navbar from index.html
- WIP: Need to figure out way to reuse this component to other sites (active tab only stays on index atm)
*/

'use strict';

const e = React.createElement;

function hello() {
    return React.createElement("nav", {class: "navbar navbar-expand-lg navbar-light bg-light"}, React.createElement("div", {class: "container"}, 
    React.createElement("a", {class: "navbar-brand",href: "#"}, "ACC"), React.createElement("ul", {class: "navbar-nav"}, React.createElement("li", {
    class: "nav-item active"}, React.createElement("a", {
    class: "nav-link"}, "Home ", React.createElement("span", {class: "sr-only"}, "\u2606"))), React.createElement("li", {class: "nav-item"
    }, React.createElement("a", {
      class: "nav-link",
      href: "pages/about.html"
    }, "About")), React.createElement("li", {
      class: "nav-item"
    }, React.createElement("a", {
      class: "nav-link",
      href: "pages/contact.html"
    }, "Contact")))));
  };

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return hello();
  }
}

const domContainer = document.querySelector('#navbar-container');
ReactDOM.render(e(Navbar), domContainer);