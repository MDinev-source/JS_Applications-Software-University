import {getHome} from './controller/home.js';
import { getCreate, getDetail, getEdit, postCreate, postEdit } from './controller/destinations.js';
import { getRegister, postRegister, getLogin, postLogin, getLogout, getDestinations } from './controller/user.js';

const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

this.get('#/home', getHome)

this.get('#/register', getRegister);
this.post('#/register', postRegister);

this.get('#/login', getLogin );
this.post('#/login', postLogin);

this.get('#/logout',getLogout);

this.get('#/create', getCreate);
this.post('#/create', postCreate);

this.get('#/details/:id', getDetail);

this.get('#/edit/:id', getEdit);
this.post('#/edit/:id', postEdit)
    
this.get('#/dashBoard', getDestinations)
});
app.run('#/home');