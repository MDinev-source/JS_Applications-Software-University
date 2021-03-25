import { getHome } from "./controller/home.js";
import { getLogin, getRegister, postLogin, postRegister } from "./controller/user.js";

const app = Sammy("body", function () {
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);

    this.get('#/register', getRegister);
    this.post('#/register', postRegister);

    this.get('#/login', getLogin);
    this.post('#/login', postLogin);
});

app.run('#/home');