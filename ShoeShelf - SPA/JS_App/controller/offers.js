import { create, get } from "../models/offers.js";
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

export function getDetail(ctx) {
    setHeader(ctx);

    const id = ctx.params.id;

    get(id)
        .then(res => {

            const offer = { ...res.data(), id: res.id };

            ctx.iSSalesman = offer.salesman === sessionStorage.getItem('user');

            ctx.offer = offer;

            ctx.loadPartials(commonPartial).partial('./view/offers/details.hbs');

        }).catch(e => console.log(e));
}