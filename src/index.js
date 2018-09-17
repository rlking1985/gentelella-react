import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import 'font-awesome/css/font-awesome.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
window.jQuery = jQuery;

require("bootstrap");
require('./index.css');


const sideBar = [{
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

ReactDOM.render(<App appName="Gentelella Port" userName="Ross King" menuHeadings={sideBar}/>, document.getElementById('root'));
registerServiceWorker();
