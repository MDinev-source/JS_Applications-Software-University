import { getHome } from "./controller/home.js";
import {   getRegister, postRegister} from './controller/user.js';

const app = Sammy("body", function() {
this.use("Handlebars", "hbs")

this.get('#/home', getHome);

this.get('#/register', getRegister);
this.post('#/register', postRegister);

})

app.run('#/home');