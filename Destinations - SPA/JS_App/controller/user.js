import { registerUser, login, logout } from '../models/user.js';
import { saveUserInfo, setHeader } from './auth.js'
import { getAll } from "../models/destinations.js";
import commonPartial from './partials.js'

export function getRegister(ctx) {
    setHeader(ctx)
    ctx.loadPartials(commonPartial).partial('./view/user/register.hbs')
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
    ctx.loadPartials(commonPartial).partial('./view/user/login.hbs')
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

// export function getDestinations(ctx) {
//     setHeader(ctx);

//     const id = ctx.params.id;
//     get(id)
//         .then(res => {
//             const destination = { ...res.data(), id: res.id };
//             ctx.isOrganizer = destination.organizer === sessionStorage.getItem('user');
//             ctx.destination = destination;
//             ctx.loadPartials(commonPartial).partial('./view/destinations/details.hbs')
//         }).catch(e => console.log(e))
// }
export function getDestinations(ctx) {
    setHeader(ctx);
    getAll()
        .then(res => {
            const destinations = res.docs.map(x => x = { ...x.data(), id: x.id })
        
            ctx.isOrganizer = sessionStorage.getItem('user');
         
            ctx.destinations = destinations;
            ctx.loadPartials(commonPartial).partial('./view/user/dashBoard.hbs')
        })
}