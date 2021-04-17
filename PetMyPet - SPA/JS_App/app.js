
import {getHome} from './controller/home.js';
import { getLogin, getRegister, postLogin, postRegister, getLogout } from './controller/user.js';
import { getCreate, postCreate, getDetail, getEdit, postEdit, getClose, getLike } from './controller/pets.js';

const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);

    this.get('#/login', getLogin );
    this.post('#/login', postLogin);

    this.get('#/register', getRegister);
    this.post('#/register', postRegister);

    this.get('#/logout',getLogout);

    this.get('#/create', getCreate);
    this.post('#/create', postCreate);

    this.get('#/details/:id',getDetail);

    this.get('#/edit/:id',getEdit);
    this.post('#/edit/:id', postEdit);

    this.get('#/close/:id', getClose)

    this.get('#/like/:id', getLike)
});
app.run('#/home');