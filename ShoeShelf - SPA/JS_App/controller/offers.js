import { create, get, update, close } from "../models/offers.js";
import { setHeader } from "./auth.js";
import commonPartial from './partials.js'

export function getCreate(ctx) {
    setHeader(ctx);
    ctx.loadPartials(commonPartial).partial('./view/offers/create.hbs');
}

export function postCreate(ctx) {
    const { name, price, imageUrl, description, brand } = ctx.params;

    const salesman = sessionStorage.getItem('user');

    create({ name, price, imageUrl, description, brand, salesman, buyers: 0, isInTheClientsList: [] })
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

export function getEdit(ctx) {
    const id = ctx.params.id;

    get(id)
        .then(res => {
            const offer = { ...res.data(), id: res.id };
            ctx.offer = offer;
            ctx.loadPartials(commonPartial).partial('./view/offers/edit.hbs');
        }).catch(e => console.log(e));
}

export function postEdit(ctx) {
    const { name, price, imageUrl, description, brand } = ctx.params;
    const id = ctx.params.id;

    update(id, { name, price, imageUrl, description, brand })
        .then(res => {
            ctx.redirect(`#/details/${id}`);
        }).catch(e => console.log(e));
}

export function getDelete(ctx) {
    const id = ctx.params.id;

    close(id).then(res => {
        ctx.redirect('#/home');
    }).catch(e => console.log(e));
}

export function getBuy(ctx) {
    const id = ctx.params.id;
    get(id)
        .then(res => {
            const offer = res.data();
            const buyers = offer.buyers + 1;

            const email = sessionStorage.getItem("user");

            offer.isInTheClientsList.push(email);

            update(id, { buyers })
                .then(() => {
                    ctx.redirect(`#/details/${id}`);
                }).catch(e => console.log(e));


        }).catch(e => console.log(e));
}




