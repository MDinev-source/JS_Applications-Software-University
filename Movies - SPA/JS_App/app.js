import { getHome } from "./controller/home.js";
import { getLogin } from "./controller/user.js";

const app = Sammy("body", function(){
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);

    this.get('#/login', getLogin);
});
app.run ('#/home');