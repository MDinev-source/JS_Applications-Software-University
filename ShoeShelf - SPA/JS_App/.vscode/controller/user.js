import { setHeader, saveUserInfo } from "./auth.js";
import commonPartial from './partials.js'
import { login, logout, registerUser } from '../models/user.js';

export function getRegister(ctx) {
    setHeader(ctx)
    ctx.loadPartials(commonPartial).partial('./view/user/register.hbs');
}

export function postRegister(ctx) {
    const { email, password, rePassword } = ctx.params;
    if (password !== rePassword) {
        throw new Error('Passwords do not match!');
    }

    registerUser(email, password)
        .then(res => {
            saveUserInfo(res.user.email)
            ctx.redirect('#/home');
        })
        .catch(e => console.log(e));
}

export function getLogin(ctx) {
    setHeader(ctx);
    ctx.loadPartials(commonPartial).partial('./view/user/login.hbs');
}

export function postLogin(ctx) {
    const { email, password } = ctx.params;
    login(email, password)
        .then(res => {
            saveUserInfo(res.user.email)
            ctx.redirect('#/home');
        }).catch(e => console.log(e));
}

export function getLogout(ctx) {
    logout()
        .then(res => {
            sessionStorage.clear()
            ctx.redirect('#/login')
        }).catch(e => console.log(e))
}