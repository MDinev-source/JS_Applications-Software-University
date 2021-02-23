import { setHeader, saveUserInfo } from "./auth.js";
import commonPartial from './partials.js'
import {  registerUser } from '../models/user.js';

export function getRegister(ctx){
    setHeader(ctx)
    ctx.loadPartials(commonPartial).partial('./view/user/register.hbs');
}

export function postRegister(ctx) {
    const { username, password, rePassword } = ctx.params;
    if (password !== rePassword) {
        throw new Error('Passwords do not match!');
    }
    registerUser(username, password)
        .then(res => {
            saveUserInfo(res.user.email)
            ctx.redirect('#/home');
        })
        .catch(e => console.log(e));
}