//require('./login');

require('../css/app.scss');

import { login } from "./login"

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/alien.png');

document.getElementById('alien-image').appendChild(img);

document.write("Hello world, aliens!");
login("admin", "wrong")

console.log('App loaded');