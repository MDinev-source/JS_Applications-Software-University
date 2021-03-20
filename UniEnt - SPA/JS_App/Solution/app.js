
import { getCreate, postCreate, getDetail, getEdit, postEdit, getClose, getJoin } from './controller/events.js';
import {getHome} from './controller/home.js';
import { getLogin, getProfile,  getRegister, postLogin, postRegister, getLogout } from './controller/user.js';

const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);
    this.get('#/login', getLogin );
    this.get('#/profile', getProfile);
    this.get('#/register', getRegister);

    this.post('#/register', postRegister);
    this.post('#/login', postLogin);
    this.get('#/logout',getLogout);

    this.get('#/create', getCreate);
    this.post('#/create', postCreate);

    this.get('#/details/:id',getDetail);

    this.get('#/edit/:id',getEdit);
    this.post('#/edit/:id', postEdit);

    this.get('#/close/:id', getClose)
    this.get('#/join/:id', getJoin)
});
app.run('#/home');