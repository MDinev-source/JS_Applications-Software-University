import { create } from "../models/movies.js";
import { setHeader } from "./auth.js";
import commonPartial from './partials.js'

export function getCreate(ctx) {
    setHeader(ctx);
    ctx.loadPartials(commonPartial).partial('./view/movies/create.hbs')
}

export function postCreate(ctx) {
    const { title, description, imageUrl } = ctx.params;
    const creator = sessionStorage.getItem('user');

    create({ title, description, imageUrl, creator })
        .then(res => {
            ctx.redirect('#/home')
        }).catch(e => console.log(e));
}