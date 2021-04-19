
import { create, get, update } from "../models/destinations.js";
import { setHeader } from "./auth.js";
import commonPartial from './partials.js'

export function getCreate(ctx) {
    setHeader(ctx)
    ctx.loadPartials(commonPartial).partial('./view/destinations/create.hbs')
}

export function postCreate(ctx) {

    const { destination, city, duration, departureDate, imgUrl } = ctx.params;
    // const organizer = sessionStorage.getItem('user');
    create({ destination, city, duration, departureDate, imgUrl })
        .then(res => {
            ctx.redirect('#/home')
        }).catch(e => console.log(e))

}

export function getDetail(ctx) {
    setHeader(ctx);
   const id = ctx.params.id;
    get(id)
        .then(res => {
            const destination = { ...res.data(), id: res.id };
            ctx.destination = destination;
            ctx.loadPartials(commonPartial).partial('./view/destinations/details.hbs')
        }).catch(e => console.log(e))
}

export function getEdit(ctx){
    const id = ctx.params.id;
    get(id)
    .then(res=>{
        const destination = {...res.data(), id: res.id};
        ctx.destination=destination;
        ctx.loadPartials(commonPartial).partial('./view/destinations/edit.hbs')
    }).catch(e=>console.log(e))
}

export function postEdit(ctx){
    const { destination, city, duration, departureDate, imgUrl } = ctx.params;

    const id = ctx.params.id;
    update(id, { destination, city, duration, departureDate, imgUrl })
    .then(res=>{
        ctx.redirect(`#/details/${id}`);
    }).catch(e=>console.log(e));
}