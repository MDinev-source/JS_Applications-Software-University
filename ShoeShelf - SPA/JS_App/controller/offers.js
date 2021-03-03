import { create } from "../models/offers.js";
import { setHeader } from "./auth.js";
import commonPartial from './partials.js'

export function getCreate(ctx) {
    setHeader(ctx);
    ctx.loadPartials(commonPartial).partial('./view/offers/create.hbs');
}

export function postCreate(ctx) {
    const { name, price, imageUrl, description, brand } = ctx.params;

    const salesman = sessionStorage.getItem('user');

    create({ name, price, imageUrl, description, brand, salesman })
        .then(res => {
            ctx.redirect('#/home')
        }).catch(e => console.log(e))
}