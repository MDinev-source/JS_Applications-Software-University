import { getHome } from "./controller/home.js";

const app = Sammy("body", function(){
    this.use("Handlebars", "hbs");

    this.get('#/home', getHome);
});
app.run ('#/home');