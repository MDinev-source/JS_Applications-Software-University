import { getHome } from "./controller/home.js";
import { getCreate, postCreate } from "./controller/movies.js";
import { getLogin, getLogout, getRegister, postLogin, postRegister } from "./controller/user.js";

const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);

    this.get('#/register', getRegister);
    this.post('#/register', postRegister);

    this.get('#/login', getLogin);
    this.post('#/login', postLogin);

    this.get('#/logout', getLogout);

    this.get('#/create', getCreate);
    this.post('#/create', postCreate);
});

app.run('#/home');